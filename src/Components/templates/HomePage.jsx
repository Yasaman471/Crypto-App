import { useEffect, useState } from "react"
import TableCoins from "../modules/TableCoins"

function HomePage() {

    const [coins,setCoins] = useState([])
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en`)
                const json = await res.json()
                    setCoins(json)
                } catch (error) {
                console.log(error.name)
                }
        }
        fetchData()
    },[])
  return (
    <div>
        <TableCoins coins={coins} />
    </div>
  )
}

export default HomePage
import { useEffect, useState } from "react"
import TableCoins from "../modules/TableCoins"
import { getCoinList } from "../../Services/CryptoApi"

function HomePage() {

    const [coins,setCoins] = useState([])

    useEffect(()=>{
        const getData = async () => {
            try {
                const res = await fetch(getCoinList())
                const json = await res.json()
                setCoins(json)
                } catch (error) {
                console.log(error.name)
                }
        }
        getData()
    },[])
  return (
    <div>
        <TableCoins coins={coins} />
    </div>
  )
}

export default HomePage
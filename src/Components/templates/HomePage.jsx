import { useEffect, useState } from "react"
import TableCoins from "../modules/TableCoins"
import { getCoinList } from "../../Services/CryptoApi"
import Pagination from "../modules/Pagination"

function HomePage() {

    const [coins,setCoins] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        const getData = async () => {
            try {
                const res = await fetch(getCoinList())
                const json = await res.json()
                setCoins(json)
                setIsLoading(false)
                } catch (error) {
                console.log(error.name)
                }
        }
        getData()
    },[])
  return (
    <div>
        <Pagination />
        <TableCoins coins={coins} isLoading={isLoading}/>
    </div>
  )
}

export default HomePage
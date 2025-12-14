import { useState } from "react"


function Pagination() {
    const [page ,setPage] = useState(1)

 
    const PreviousHandler = () =>{
        if(page <= 1) return 
         setPage(page => page - 1)
    }
  
    const NextHandler = () =>{
        if(page >= 10) return
         setPage(page => page + 1)
    }
  return (
    <div>
        <button onClick={PreviousHandler}>Previous</button>
        <p>1</p>
        <p>2</p>
        {page>2 && page<9 && (
            <>
            <span>...</span>
            <p>{page}</p>
            </>
        )}
        <span>...</span>
        <p>9</p>
        <p>10</p>
        <button onClick={NextHandler}>Next</button>
    </div>
  )
}

export default Pagination
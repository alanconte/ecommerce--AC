import { useState } from "react"
import { useEffect } from "react"
import { getFetchOne } from "../../../helpers/getFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [producto,setProducto]=useState({})
    useEffect(() => {
    getFetchOne()
    .then((resp)=>setProducto(resp))
    .catch((err)=>console.log(err))
    }, [])
  
    return (
   <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer
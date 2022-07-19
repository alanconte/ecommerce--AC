import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../../helpers/getFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [producto,setProducto]=useState({})
  const{id}=useParams()

 
  useEffect(() => {
    getFetch(id)
    .then((resp)=>setProducto(resp))
    .catch((err)=>console.log(err))
    }, [])
    return (
  <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../ItemDetail/ItemDetail"
import { doc , getDoc , getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [bool,setBool]=useState(true)
  const [producto,setProducto]=useState({})
  const{id}=useParams()

useEffect(()=>{
  const db=getFirestore()
  const queryProduct=doc(db,'instrumentos',id)
getDoc(queryProduct)
.then(item=>{setProducto({ id: item.id, ...item.data() })})
},[id])
console.log(producto)
    return (
  <ItemDetail producto={producto}/>
  )
  }

export default ItemDetailContainer
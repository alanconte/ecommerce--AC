import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../../helpers/getFetch";
import ItemList from "../../ItemList/ItemList";
import Input from "../../Pruebas/Input";
import {Intercambiavilidad} from "../../Pruebas/Intercambiavilidad";

const ItemListContainer = ({saludo}) => {  
  const[loading, setLoading]=useState(true)
  const [productos, setProductos] = useState([])
  const { categoriaId }=useParams()
  
  
  useEffect(()=>{
    if (categoriaId) {
      getFetch()
      .then((resp)=>{
        setProductos(resp.filter(producto=>producto.categoria===categoriaId))
        setLoading(false)
        })
      .catch(err=>{console.log(err)})
      } else {
      getFetch()
      .then((resp)=>{
        setProductos(resp)
        setLoading(false)
        })
      .catch(err=>{console.log(err)})
      
    }
},[categoriaId])
  return ( 
    <div>
    { loading ? 
    <h1>Cargando...</h1>
      :
      <div>
      {saludo}
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
      <ItemList productos={productos}/>
      </div>
      </div>

    }
  <Input/>
  <Intercambiavilidad/>
  </div>
  )
}

export default ItemListContainer
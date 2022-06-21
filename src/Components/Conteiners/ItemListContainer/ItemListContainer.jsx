import { useEffect, useState } from "react";
import Contador from "../../Contador/Contador"
import ItemCount from "../../ItemCount/ItemCount"
import { getFetch } from "../../../helpers/getFetch";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = ({saludo}) => {  
  const[loading, setLoading]=useState(true)
  const [productos, setProductos] = useState([])
    useEffect(()=>{
  
      getFetch()
      .then((resp)=>{
        setProductos(resp)
        setLoading(false)
        })
      .catch(err=>{console.log(err)})
      .finally(()=>console.log())
},[])
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
  </div>
  )
}

export default ItemListContainer
import { getFirestore, query, collection, getDocs , where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer =

  
  ({saludo}) => {  
    const[loading, setLoading]=useState(true)
    const [productos, setProductos] = useState([])
    const { categoriaId }=useParams()
    
    useEffect(() => {
      if (categoriaId) {
          const db = getFirestore()
          const queryCollection = query(collection(db , 'instrumentos'), where('category', '==', categoriaId))
          getDocs(queryCollection)
          .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data()})) ))
          .catch(err => err)
          .finally(() => setLoading(false))
      } else {
          const db = getFirestore()
          const queryCollection = query(collection(db , 'instrumentos'))
          getDocs(queryCollection)
          .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data()})) ))
          .catch(err => err)
          .finally(() => setLoading(false))
                  }
  }, [categoriaId])
    console.log(productos)
    return ( 
      <div>
    { 
      loading ?
      <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner animation="border" role="status" variant="danger">
              <span className="visually-hidden">Loading...</span></Spinner>
      </div>
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
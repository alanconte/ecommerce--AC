import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"
import imgDetail from "./detail.css"
import {  CartContextProvider, useCartContext } from "../Context/cartContext"

const onAdd=(count)=>{console.log(count)}


const ItemDetail = ({producto}) => {
  const [estado, setEstado]=useState(null)
  const { cart, addToCart }=useCartContext()
  const onAdd = (cant)=>{
    console.log(cant)
    setEstado(cant)
    addToCart({...producto, cantidad: cant})
  }
  console.log(cart)
  return (
  
  <CartContextProvider>
    <div className="row card">
    <div>
      <img className="imgDetail" src={producto.img} alt="" />
    </div>
    <div className="cardDetail">
      <h2>nombre: {producto.nombre}</h2>
      <h3>detalles: {producto.detalles}</h3>
      <h4>precio: {producto.precio}</h4>
    </div>
      <div>
        {

          estado?
          <>
          <Link to={'/cart'}>
          <button className="btn btn-outline-primary">Ir al Carrito</button>
        </Link>
        <Link to='/'>
            <button
            className='btn btn-outline-primary'
            onClick={()=>console.log('Ir al home')}>
                Seguir comprando
            </button>
        </Link>
          </>
        :

        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
    
      }
        </div>
      </div>
  </CartContextProvider>
  )
}

export default ItemDetail
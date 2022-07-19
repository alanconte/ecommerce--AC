import { useState } from "react"
import { useCartContext } from "../Context/cartContext"
import img from './Cart.css'


const Cart = () => {
  const{ cart }=useCartContext() 
  console.log()
  
  return (
    <div>
        <ul>
          {cart.map(item=>
          <li key={item.id}> 
            <div>
              <img src={item.img} className='img' />
            </div>
            Producto:{item.nombre}
            Precio unitario: {item.precio} 
            Cantidad: {item.cantidad}
          </li>)}
        </ul>
      </div>
  )
}

export default Cart
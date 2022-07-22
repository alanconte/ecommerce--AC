import { Link } from "react-router-dom"
import { useCartContext } from "../Context/cartContext"
import './Cart.css'
import { CartEmpty } from "./CartEmpty"
import CartListDetail from "./CartListDetail"


const Cart = () => {
  const{ cart, vaciarCarrito , total }=useCartContext() 
  console.log()
  
  return (
    <>
      <div>
            <div>
            <h1>Tus Compras</h1>
            </div>
            {cart.length > 0 ? 
            <div>
                <CartListDetail />
                <div className="totalPrice"> 
                <p>Total : ${total()}</p>
                </div>
                <div className="total">
                    <div className="botonesCarrito">
                        <button className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <Link to="/"><button className="btn btn-outline-danger">Seguir Comprando</button> </Link>
                        
                    </div>
                </div>
            </div>
                            : 
                <CartEmpty />
            }
        </div>
    </>
  )
}

export default Cart
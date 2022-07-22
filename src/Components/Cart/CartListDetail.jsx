import { useCartContext } from "../Context/cartContext";

const CartListDetail = () => {
    
    const {cart , removeItemCarrito } = useCartContext()
    
    
    return (
        <>
            {cart.map(prod =>  
                (<div key={prod.id}>
                    <ul className="list-group">
                    <li className='list-group-item' key={prod.id}> <img className="img" src={prod.img}/> {prod.name} - U: {prod.cantidad} Precio: {(prod.price) * prod.cantidad}
                        <button className=" btn-danger" onClick={() => removeItemCarrito(prod.id)}> X </button>
                    </li>
                    </ul>
                </div>)
                )}
        </>
    )
}

export default CartListDetail;

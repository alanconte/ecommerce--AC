
import { useCartContext } from './../Context/cartContext'
const CartListDetail2 = () => {
    
    const {cart } = useCartContext()
    
    
    return (
    <div>
        {cart.map(prod =>  
                (<div key={prod.id}>
                <ul className="list-group">
                    <li className='list-group-item' key={prod.id}> <img className="img" src={prod.img}/> {prod.name} - U: {prod.cantidad} Precio: {(prod.price) * prod.cantidad}
                    </li>
                </ul>
                </div>)
                    ) }
    </div>
    );
};

export default CartListDetail2;

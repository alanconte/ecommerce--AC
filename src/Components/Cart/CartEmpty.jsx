import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';

export  const CartEmpty = () => {

    return (
        
        <div>
            <CartWidget />
            <h2>El carrito esta vacio</h2>
            <h3>Clickea en el boton para poder comprar</h3>
            <Link to="/">  <button className='btn btn-danger'>Ir al inicio</button> </Link>
        </div>
    )
};


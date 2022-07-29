import React from 'react';
import { CartEmpty } from '../Cart/CartEmpty';
import { useCartContext } from '../Context/cartContext';
import './Checkout.css'
import FormCheckout2 from './FormCheckout2/FormCheckout2';

const Checkout = () => {
  
  
  const {cart} = useCartContext()

  return (<div>
    {cart.length > 0 ? 
      <div  className="CheckoutOn"> 
      <FormCheckout2/>
      </div>  
    : 
      <CartEmpty />
    }
    </div>)
    };

export default Checkout;

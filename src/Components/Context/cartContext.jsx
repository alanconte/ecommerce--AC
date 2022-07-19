import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";


const CartContext = createContext([])


export const useCartContext=()=>useContext(CartContext)


export const CartContextProvider=({children})=>{
    
const [cart,setCart]=useState([])

const addToCart =(item)=>{
    let carritoPrevio=[...cart]
    if(carritoPrevio.some((item)=>item.id===item.id)){
        carritoPrevio.find((item)=>item.id===item.id).quantity+=item.quantity
        setCart(carritoPrevio)
    }
        setCart([
        ...cart,
        item
        ]);
}

    return(
        <CartContext.Provider 
        value={{cart,
        addToCart
    }}
        >
            {children}
        </CartContext.Provider>
    )
}
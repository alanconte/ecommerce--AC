import { useContext, useState, createContext } from "react";


const CartContext = createContext([])


export const useCartContext=()=>useContext(CartContext)


export const CartContextProvider=({children})=>{
    
const [cart,setCart]=useState([])

const addToCart =(item)=>{
    const indice=cart.findIndex(i => i.id === item.id)
        if (indice > -1){
            const cantidadVieja= cart[indice].cantidad
            let cantidadNueva= cantidadVieja + item.cantidad
            cart[indice].cantidad=cantidadNueva
            let arrAux = [...cart]
            setCart(arrAux)
    
        }else{
            setCart([...cart, item])
        }
    }
function vaciarCarrito(){
    setCart([])
}

function removeItemCarrito(itemId){
    
    setCart(cart.filter(item => item.id !== itemId))
    console.log("Click")
    
}

function total () {
    const sumaTotal = cart.map(valorTotal => valorTotal.cantidad * valorTotal.price).reduce((prev,curr)=> prev + curr,0)

    return sumaTotal
}

function mostrarCantidad () {
    const mostrar = cart.map( mostrar => mostrar.cantidad).reduce((prev,curr) => prev + curr,0)

    return mostrar
}

    return(
        <CartContext.Provider 
        value={{cart,
        addToCart,
        vaciarCarrito,
        removeItemCarrito,
        mostrarCantidad,
        total,
    }}
        >
            {children}
        </CartContext.Provider>
    )
}
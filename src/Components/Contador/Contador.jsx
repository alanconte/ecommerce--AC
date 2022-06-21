import {useState, useEffect} from 'react'
import '../Contador/Contador.css'
const Contador = () => {
    const [count, modificarCount]= useState(0)
    
    // const [bool, setBool] = useState(true) 
   
    // const cambiarEstado=()=>{
    //     setBool(!bool)
    // }
    const agregar=()=>{
        modificarCount(count+1)
    }
    const restar=()=>{
        modificarCount(count-1)
    }
    const agregarCarrito=()=>{
        console.log(count)
    }
    // useEffect(()=>{
    //     console.log('addEventListener')
    //     return()=>{
    //         console.log('removeEventListener')
    //     }
    // })//sin array es para ejecutarlo despues del montado
    // useEffect(()=>{
    //     console.log('llamada a la api2')
    // },[])//con array se ejecuta UNA sola vez, despues del montado
    // useEffect(()=>{
    //     console.log('llamada a la api3')
    // },[bool])//con array se ejecuta UNA sola vez, despues del montado
    // console.log('llamada a la api4')
    return (<>
    <div>
        <div className='Contador'>
        <button onClick={restar}>-</button>
        <div>{count} </div>
        <button onClick={agregar}>+</button>
        </div>
        <button onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
        {/* <button onClick={cambiarEstado}>bool</button>  */}
    </>
    )
}

export default Contador
import React from 'react'
import { useState } from 'react'
const ItemCount = ({initial, stock, onAdd}) => {
const [count, modificarCount]=useState(initial)
const sumar = ()=>{
                    if(count<stock){
                    modificarCount(count+1)}
                }
const restar = ()=>{
                    if(count>initial){
                    modificarCount(count-1)}
                }
const agregar=()=>{
    onAdd(count)
}
return(<>

<button onClick={restar}>-</button>
<p>{count}</p>
<button onClick={sumar}>+</button>
<button onClick={agregar}>Agregar</button>
</>
)

}


export default ItemCount
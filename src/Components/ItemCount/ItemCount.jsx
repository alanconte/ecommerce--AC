import { Button } from 'bootstrap'
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
return(
<div className='button'>
<button className='btn ' onClick={restar}>-</button>
<p className='count'> {count} </p>
<button  className='btn ' onClick={sumar}>+</button>
<button  className='btn '  onClick={agregar}>Agregar</button>
</div>

)

}


export default ItemCount
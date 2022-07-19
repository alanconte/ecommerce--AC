import React from 'react'

const Input = () => {
    const inputHandle=(e)=>{
        const vocal=['a','e','i','o','u']
        vocal.forEach((item)=>{
            item === e.key.toLowerCase()? e.preventDefault():null
        })
    }
    return (
        <div>
            <input
            onKeyDown={ inputHandle }
            />
        </div>
            )
}

export default Input
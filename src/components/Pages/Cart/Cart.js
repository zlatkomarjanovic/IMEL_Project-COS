import React from 'react'

const Cart = ({price, title, image}) => {
    return (
        <div>
            <img alt = {title} src = {image} /> 
            <h1>{title}</h1>
            <p>{price}</p>

        </div>
    )
}

export default Cart

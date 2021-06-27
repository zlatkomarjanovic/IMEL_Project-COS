import React from 'react'
import { useCart } from 'react-use-cart'
import RenderCartItem from './RenderCartItem'

const Cart = ({price, title, image}) => {
    const { 
        isEmpty, 
        totalUniqueItems,
        items,
        totalItems,
        cartTotal, 
        updateItemQuantity, 
        removeItem, 
        emptyCart
    } = useCart(); 

    if(isEmpty) return(
        <div>
            <h2>
                Your cart is damn empty
            </h2>
        </div>
    )
    return (
        <div>
            <h5>Cart ({totalUniqueItems}) total Items : ({totalItems})</h5>
            
            {items.map((item, index) => { return(
              <RenderCartItem items = {items} item = {item} /> 
              )
            })}
            
            
        </div>
    )
}

export default Cart

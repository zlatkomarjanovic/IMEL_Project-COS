import React from 'react'

const RenderCartItem = ({item}) => {
    return (
        <div className = "">
            <img className = "woman_item_image" src = {item.imgurl}/>
            <h1>{item.title}</h1>
            <h4>$ {item.price}</h4>
        </div>
    )
}

export default RenderCartItem

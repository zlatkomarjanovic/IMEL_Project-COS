import React from 'react'

const ItemDetails = (props) => {
    const {id, title, price, imgurl} = props.currentItem; 
    return (
        <div>
            <img src = {imgurl} /> 
        </div>
    )
}

export default ItemDetails

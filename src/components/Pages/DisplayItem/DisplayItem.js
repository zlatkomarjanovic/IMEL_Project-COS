import React from 'react'

const DisplayItem = ({title, imgurl, price, id, viewItemInfo}) => {
    return (
        <div onClick = {() => viewItemInfo(id)} className = "div_container">
            
            <img className = "woman_item_image" src = {imgurl} /> 
            <h3 className = "" >{title}</h3>
            <p className = "">{price}</p>
        </div>
    )
}

export default DisplayItem

import React from 'react'

const YouMightLikeMen = ({title, imgurl, price}) => {
    return (
        <div className = "div_container">
            
            <img className = "woman_item_image" src = {imgurl} /> 
            <h3 className = "" >{title}</h3>
            <p className = "">{price}</p>
        </div>
    )
}

export default YouMightLikeMen

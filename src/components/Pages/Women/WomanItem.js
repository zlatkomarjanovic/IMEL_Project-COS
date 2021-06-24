import React from 'react'

const WomanItem = ({title, imgurl, price, id}) => {
    return (
        <div>
            <img src = {imgurl} /> 
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    )
}

export default WomanItem

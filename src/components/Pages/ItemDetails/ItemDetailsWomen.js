import React, {Fragment} from 'react'
import YouMightLike from './YouMightLike'
import { useCart } from 'react-use-cart';

const ItemDetails = (props) => {
    
    const {id, title, price, imgurl, desc} = props.currentItem; 
    const { addItem } = useCart(); 

    return (
        <Fragment>
            <div className = "goback" onClick = {props.closeItemInfo}>
                 <i className = "fa fa-arrow-left"> </i>
                 <span style = {{marginLeft: 10}}> Go Back </span>
                </div>
            <div className = "img_details_container">
                
              <img alt = {title} className = "item_image" src = {imgurl} />
              <div style = {{margin: 40}}>
                <h1>{title}</h1>
                <h3>Price : {price}</h3> 
              </div>
              
              <p className = "p_width" >{desc}</p>
              <button 
                    onClick={() => addItem(props.currentItem)}
                    className = "add_to_cart">
                        Add to Cart
                </button>
              <p> Product number : {id}</p>
            </div>
            
            <div className = "">
                  <h4 style = {{marginRight: 25}}>You might also like:</h4>
                    <YouMightLike 
                        price = "14.99$"
                        title = "Casual Summer Outfit"
                        imgurl = "https://i.pinimg.com/originals/93/dc/90/93dc90acbaecb7c23c2da7b078226ddf.jpg"
                    /> 
                    <YouMightLike 
                        title = "Fancy Dress"
                        price = "14.99$"
                        imgurl = "https://cdn.shopify.com/s/files/1/2059/2623/products/ICHOIX-women-clothes-2018-fashion-autumn-winter-dress-sexy-party-dress-elegant-tube-long-sleeve-ladies_74172ea0-d43f-48a2-86c7-836d6119cfb4_800x.jpg?v=1539375263"
                    /> 
                    <YouMightLike 
                        title = "Spring Outfit"
                        price = "14.99$"
                        imgurl = "https://i.pinimg.com/736x/fc/a6/54/fca6549c9f74373ae03d9df78c8317a2.jpg"
                    />
                    
            </div>
        </Fragment>
    )
}

export default ItemDetails

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
                        title = "New Autumn Men Clothes Slim Fit"
                        imgurl = "https://ae01.alicdn.com/kf/HTB1z1HvmFkoBKNjSZFEq6zrEVXat/New-Autumn-Fashion-Brand-Men-Clothes-Slim-Fit-Men-Long-Sleeve-Shirt-Men-Plaid-Cotton-Casual.jpg_Q90.jpg_.webp"
                    /> 
                    <YouMightLike 
                        title = "Fashion Men Clothes"
                        price = "14.99$"
                        imgurl = "https://sc04.alicdn.com/kf/HTB1KWcjeDTI8KJjSsphq6AFppXao.jpg"
                    /> 
                    <YouMightLike 
                        title = "Casual Fall Outfits"
                        price = "14.99$"
                        imgurl = "https://i.pinimg.com/originals/84/48/af/8448af80944eaca909874361f6009221.png"
                    />
                    
            </div>
        </Fragment>
    )
}

export default ItemDetails

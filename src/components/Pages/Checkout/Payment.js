import React, {Fragment} from 'react'
import Logo from '../../Logo/Logo'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { 
        cartTotal,
        isEmpty, 
        totalUniqueItems,
        items,
        totalItems, 
        updateItemQuantity, 
        removeItem, 
        emptyCart
    } = useCart();

    return (
        <Fragment>
            <div className = "outer_checkout_container"> 
            
            <div className = "checkout_container"> 
                <Logo />

                
                
                <p style = {{textAlign: 'center', color:'gray', margin: 10}}> 
                    Information
                    <i class="fa fa-angle-right"></i> <span className = "active"> Payment </span> 
                    <i class="fa fa-angle-right"></i> Confirm
                </p>
                

                <h2>Payment provider</h2>
                <div> 
                    <img 
                        className = "payment_logo"
                        alt = "Paypal Logo" 
                        value = "Paypal" 
                        src = "https://cdn.dribbble.com/users/2367833/screenshots/11919536/pay_pal_medium_quality_dribbble__4x.png"/> 
                </div>
                <div> 
                    <img 
                        className = "payment_logo"
                        alt = "Paypal Logo" 
                        value = "Paypal" 
                        src = "https://stripe.com/img/v3/newsroom/social.png"/> 

                </div>
                <div> 
                    <img 
                        className = "payment_logo"
                        alt = "Paypal Logo" 
                        value = "Paypal" 
                        src = "https://i.pcmag.com/imagery/reviews/02RJy7OTtPnQQjh37yQDNqx-15..1598973550.png"/> 
                </div>
                <div> 
                <img 
                        className = "payment_logo"
                        alt = "Paypal Logo" 
                        value = "Paypal" 
                        src = "https://www.klarna.com/assets/sites/3/2019/12/05105033/blog-logo.png"/>
                    
                </div>
                <button className = "button"> Continue to Confirm </button> 

             </div>
            
            <div className = "checkout_container1"> 
            <h2>Cart</h2>
            {items.map((item, index) => { return(
                <Fragment>
                

                <img className = "checkout_img" src = {item.imgurl}/>
                
                <div className = "cart_container_data"> 
                    <h2>{item.title}</h2>
                    <h3>$ {item.price}</h3>
                    <p> Quantity of this item : {item.quantity} </p> 
                    <br/> <br/> <br/>
                </div>
                
             
             
             </Fragment>
             )
             
            })} <br/><br/> <br/><br/>
            <hr className = "line"/>
                <h3>Total Items : {totalItems}</h3> <br/>
                <h3>Total Unique Items : {totalUniqueItems}</h3> <br/>
            <hr className = "line"/>
            <h2>Total : $ {cartTotal}</h2>

            </div>


            </div>
        </Fragment>
    )
}

export default Checkout

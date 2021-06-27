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

                
                
                <p style = {{color:'gray', margin: 10}}> 
                    Information
                    <i class="fa fa-angle-right"></i>Payment 
                    <i class="fa fa-angle-right"></i><span className = "active"> Confirm</span> 
                </p>
                

                <h2 style = {{float: 'left', margin: 10}}>Thank you for your order ! </h2>
                <h3 style = {{float: 'left', margin: 10}}>The order will be processed within the next 48 hours</h3>
                
                 
                
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

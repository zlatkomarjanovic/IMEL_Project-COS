import React, {Fragment} from 'react'
import Logo from '../../Logo/Logo'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { 
        cartTotal,
        totalUniqueItems,
        items,
        totalItems, 
    } = useCart();

    return (
        <Fragment>
            <div className = "outer_checkout_container"> 
            
            <div className = "checkout_container"> 
                <Logo />

                
                
                <p style = {{textAlign: 'center', color:'gray', margin: 10}}> 
                    <span className = "active">Information </span> 
                    <i class="fa fa-angle-right"></i> Payment  
                    <i class="fa fa-angle-right"></i> Confirm
                </p>
                

                <div className="wrapper">
                 <div className="form_signin_checkout">       
                     <h2 style = {{float: 'left'}} className="form-signin-heading">Contact Information</h2>
                     <input type="text"  name="email" placeholder="Email Address" required="" autofocus="" />

                     <h2 style = {{float: 'left'}} className="form-signin-heading">Shipping adress</h2> <br /> < br/> 

                     <div className = "name_and_surname">
                        <input type="text" className="f_name" name="First Name" placeholder="First Name" required="" autofocus="" />    
                        <input type="text" className="f_name" name="Last Name" placeholder="Last Name" required="" autofocus="" />
                     </div>
                     <input type="text"  name="Company" placeholder="Company (Optional)" required="" autofocus="" />    
                     <input type="text"  name="Adress" placeholder="Adress" required="" autofocus="" />
                     <input type="text"  name="Apartment" placeholder="Apartment, Suite, etc.. (Optional)" required="" autofocus="" />
                     <div className = "name_and_surname">
                        <input type="text" className="f_name" name="Postal Code" placeholder="Postal Code" required="" autofocus="" />
                        <input type="text" className="f_name" name="City" placeholder="City" required="" autofocus="" />
                    </div>
                     <input type="text"  name="Country/Region" placeholder="Country/Region" required="" autofocus="" />
                     <input type="text"  name="Phone (optional)" placeholder="Phone (optional)" required="" autofocus="" />
                     <Link to = '/payment'>
                         <button style = {{float: 'right'}} className="button" type="submit">Continue to Payment</button>   
                     </Link>
             </div>
          </div>

             </div>
            
            <div className = "checkout_container1"> 
            <h2>Cart</h2>
            {items.map((item, index) => { return(
                <Fragment>
                

                <img className = "checkout_img" src = {item.imgurl}/>
                
                <div className = "cart_container_data"> 
                    <h2>{item.title}</h2>
                    <h3>$ {item.price} x {item.quantity}</h3>
                    
                    <br/> <br/> <br/> <br/> <br/>
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

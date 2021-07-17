import React, { Fragment } from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom"
import Logo from '../Logo/Logo'
import { useCart } from 'react-use-cart'

const Navbar = () => {
    const { 
        totalUniqueItems,
        totalItems
    } = useCart(); 
    return (
        <Fragment>

            <div className="nav">
                <input type="checkbox" id="nav-check"></input>
                
                <div className="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div className="nav_links_1">

                    
                         <NavLink exact to = "/women" className="nav-links">
                              Women
                          </NavLink>
                         
                         
                         <NavLink exact to = "/men" className="nav-links">
                              Men
                          </NavLink>
                        
                         <NavLink exact to = "/sale" className="nav-links">
                              Sale
                          </NavLink>
                    
                        <NavLink exact to = "/" className="nav-links">
                             <Logo /> 
                         </NavLink>
                         
                        <NavLink exact to = "/contact" className="nav-links">
                             Contact
                         </NavLink>
                        
                        <NavLink exact to = "/signin" className="nav-links">
                             Sign In
                         </NavLink>
                        
                        <NavLink exact to = "/cart" className="nav-links">
                         <span className = "cart_items">{totalUniqueItems}</span> Cart
                         </NavLink>
                        </div>
                
            </div>









            {/*<nav className = "navbar">
                <div className = "nav-container">
                <ul className = "nav-menu">
                         
                         <li>
                         <NavLink exact to = "/women" className="nav-links">
                              Women
                          </NavLink>
                         </li>
                         <li>
                         <NavLink exact to = "/men" className="nav-links">
                              Men
                          </NavLink>
                         </li>
                         <li>
                         <NavLink exact to = "/sale" className="nav-links">
                              Sale
                          </NavLink>
                         </li>
                    
                        <li>
                        <NavLink exact to = "/" className="nav-links">
                             <Logo /> 
                         </NavLink>
                         </li>
                         
                        <li>
                        <NavLink exact to = "/contact" className="nav-links">
                             Contact
                         </NavLink>
                        </li>
                        <li>
                        <NavLink exact to = "/signin" className="nav-links">
                             Sign In
                         </NavLink>
                        </li>
                        <li>
                        <NavLink exact to = "/cart" className="nav-links">
                         <span className = "cart_items">{totalUniqueItems}</span> Cart
                         </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>*/}
        
        </Fragment>
    )
}

export default Navbar

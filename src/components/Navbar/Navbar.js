import React, { Fragment } from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <Fragment>
            <nav className = "navbar">
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
                     </ul>
                        <NavLink exact to = "/" className="nav-logo">
                             COS
                         </NavLink>
                     <ul className = "nav-menu">
                         
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
                             Cart
                         </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar

import './App.css'
import React, {Fragment} from 'react'
import Navbar from './components/Navbar/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Men from './components/Pages/Men/Men' 
import Women from './components/Pages/Women/Women' 
import Sale from './components/Pages/Sale' 
import Contact from './components/Pages/Contact' 
import Signin from './components/Pages/Signin' 
import Cart from './components/Pages/Cart/Cart' 
import Footer from './components/Footer/Footer'
import { CartProvider } from 'react-use-cart'
import Checkout from './components/Pages/Checkout/Checkout'
import Payment from './components/Pages/Checkout/Payment'


const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
       
      <Switch>
        <CartProvider>
          <Route exact path = "/" component={Sale}/>
          <Route path = "/sale" component={Sale}/>
          <Route path = "/men" component={Men}/>
          <Route path = "/women" component={Women}/>
          <Route path = "/contact" component={Contact}/>
          <Route path = "/signin" component={Signin}/>
          <Route path = "/cart" component={Cart}/>
          <Route path = "/checkout" component = {Checkout} /> 
          <Route path = "/payment" component = {Payment} /> 
        </CartProvider>
      </Switch>
      </Router>


      <Footer />
    </Fragment>     
  )
}

export default App

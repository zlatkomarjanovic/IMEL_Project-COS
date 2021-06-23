import './App.css'
import React, {Fragment} from 'react'
import Navbar from './components/Navbar/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Men from './components/Pages/Men' 
import Women from './components/Pages/Women' 
import Sale from './components/Pages/Sale' 
import Contact from './components/Pages/Contact' 
import Signin from './components/Pages/Signin' 
import Cart from './components/Pages/Cart' 

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
       
      <Switch>
        <Route exact path = "/" component={Sale}/>
        <Route path = "/sale" component={Sale}/>
        <Route path = "/men" component={Men}/>
        <Route path = "/women" component={Women}/>
        <Route path = "/contact" component={Contact}/>
        <Route path = "/signin" component={Signin}/>
        <Route path = "/cart" component={Cart}/>
        
      </Switch>
      </Router>
    </Fragment>
  )
}

export default App

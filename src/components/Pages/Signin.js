import React from 'react'

const Signin = () => {
    return (
        <div>
            <div className="wrapper">
            <div className="form-signin">       
             <h2 className="form-signin-heading">Please login</h2>
                <input type="email" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                <input type="password" className="form-control" name="username" placeholder="Password" required="" autofocus="" />   <br/>  
                <label className="checkbox">
                  <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me <br/> 
              </label>
                <button className="button" type="submit">Login</button>   
            </div>
         </div>

				
        </div>
    )
}

export default Signin

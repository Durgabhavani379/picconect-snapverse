import React from 'react'
import logo from '../img/logo_1.png';
import './SignIn.css';
import{Link} from 'react-router-dom';

 function SignIn() {
  return (
    <div>
          <div className="signIn">
      <div>
        <div className="loginForm">
          <img className="signUpLogo" src={logo} alt="" />
          <div>
            <input type="email" name="email" id="email" value="email" placeholder="Email" />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              
            />
          </div>
          <input type="submit" id="login-btn"  value="Sign In" />
        </div>
        <div className="loginForm2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  

    </div>
  )
}
export default SignIn;

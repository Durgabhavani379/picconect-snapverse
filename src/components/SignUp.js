import React from 'react'
import logo from '../img/logo_1.png'
import './SignUp.css';
import{Link} from 'react-router-dom';

 function SignUp() {
  return (
    <div className="signup">
      <div className="from-container">
       <div classname="form">
<img className="logo"src={logo} alt="from"/>
<p className="loginPara">
    Sign up to see photos and videos <br/>from your friends
</p>
<div>
    <input type="email" name="email" placeholder="Email" id="email"/>
</div>
<div>
    <input type="text" name="name" placeholder="Name" id="name"/>
</div>
<div>
    <input type="text" name="username" placeholder="UserName" id="username"/>
</div>
<div>
    <input type="password" name="password" placeholder="Password" id="password"/>
</div>

<p className="loginpara" style={{fontSize:"12px",margin:"3px 0px"}}>
    By Signing up ,you agree to out Terms ,<br/> privacy policy and cookies policy
</p>
<input type="submit" id="submit-btn" value="Signup"/></div>
<div className="form2">
Already have an account?
<Link to="/signin">
<span style={{color:"blue",cursor:"pointer"}}> SignIn</span></Link>
</div>

      </div>
    </div>
  )
}
export default SignUp;

import React from 'react'
import "./Login.css";
import Logo2 from "../Images/Logo2.jpeg";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    src={Logo2}
                />
            </Link>
            <div className="login__card">
             <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>

                    <h5>Password</h5>
                    <input type='password'/>

                    <button className="login__signInButton" type='submit'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the RIYAPOLA FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>Create your Riyaola Account</button>
            </div>
            </div>
        </div>
    )
}

export default Login

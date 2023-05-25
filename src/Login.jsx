import React from "react";
import UserInput from "./UserInput";
export default function Login(){

    return (
        <div>
            <div className="login-form">
                <div className="navbar-logo">VISION</div>
                <div className="welcome">Welcome Back!!!</div>
                <div className="logIn">Log in</div>
                <UserInput type="email" title="Email"/>
                <div className="link-style forgot-password-link ">Forgot Password?</div>
                <UserInput type="password" title="Password"/>
                <button className="button-style theme-color">Log In <img src="src/assets/arrow.png"/></button>
                <div className="signup">
                    <span className="signup-label">Don't have an account ? </span>
                    <span className="signup-link link-style">Sign Up</span>
                </div>
                </div>
                
            <img src="src/assets/login-image.png"/>
        </div>

    )
}
import React from "react";
import UserInput from "./UserInput";
import './Login.css'

export default function login(){

            let login = function()
            {
                fetch('http://127.0.0.1:8000/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'kebe_retailer',
                    password: 'john123'
                })
                })
                .then(response => response.json())
                .then(data => {
                // Handle the response data here
                })
                .catch(error => {
                // Handle any errors that occurred during the request
                });
        }

    return (
        <div className="login-page">
            <div className="login-left">
                <div className="login-form">
                    <div className="navbar-logo">VISION</div>
                    <div className="welcome">Welcome Back!!!</div>
                    <div className="logIn">Log in</div>
                    <UserInput type="text" title="user name"/>
                    <div className="link-style forgot-password-link ">Forgot Password?</div>
                    <UserInput type="password" title="Password"/>
                    <button onClick={login} className="button-style theme-color login-btn">Log In <img className="login-btn-arrow"src="src/assets/arrow.png"/></button>
                    <div  className="signup">
                        <span className="signup-label">Don't have an account ? </span>
                        <span className="signup-link link-style">Sign Up</span>
                    </div>
                </div>
            </div>      
            <img className="login-image" src="src/assets/login-image.png"/>
        </div>

    )
}
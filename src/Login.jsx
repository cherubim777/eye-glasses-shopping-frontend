import React from "react";
import UserInput from "./UserInput";
import './Login.css'
import {useState} from "react"
import {useNavigate} from "react-router-dom"


export default function login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
    const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

    let login = function()
    {
        fetch('http://127.0.0.1:8000/user/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
        })
        .then(response => {
            switch (response.status){
                case 400:
                    alert("Error Occured. Please try again")
                    break
                case 401:
                    alert("Incorrect Username or Password")
                    break
            }
            return response.json()
        })
        .then(data => 
            {
                if (data) {
            const token = data.access;
            const userType = data.userType;
      
            // Store the JWT token in localStorage for customers
            if (userType === 'customer') {
              localStorage.setItem('customerToken', token);
              navigate('/', {reloadDocument: true})
            }
      
            // Store the JWT token in localStorage as 'retailertoken' for retailers
            if (userType === 'retailer') {
              localStorage.setItem('retailerToken', token);
              navigate('/retailer/', {reloadDocument: true})
            }
                }}
      )
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
                    <UserInput type="text" title="user name" value={username} onChange={handleUsernameChange}/>
                    <div onClick={() => navigate("/resetPassword")} className="link-style forgot-password-link ">Forgot Password?</div>
                    <UserInput type="password" title="Password" value={password} onChange={handlePasswordChange}/>
                    <button onClick={login} className="button-style theme-color login-btn">Log In <img className="login-btn-arrow"src="/src/assets/arrow.png"/></button>
                    <div  className="signup">
                        <span className="signup-label">Don't have an account ? </span>
                        <span className="signup-link link-style">Sign Up</span>
                    </div>
                </div>
            </div>      
            <img className="login-image" src="/src/assets/login-image.png"/>
        </div>

    )
}
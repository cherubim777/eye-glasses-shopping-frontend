import React from "react";
import UserInput from "./UserInput";

export default function Register(props){

    let customer_register =  function (){
        fetch('http://127.0.0.1:8000/user/customer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: 'John',
          last_name: 'Doe',
          username: 'kebe',
          password: 'john123',
          phone_number: '555-555-5555',
          email: 'johndoe@example.com',
          local_address: '123 Main St',
          subcity: 'Some Subcity',
          city: 'Some City',
          photo: 'https://example.com/johndoe.jpg',
        })
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
      })
      .catch(error => {
        // Handle any errors that occurred during the request
      });
      console.log()
    }

    let retailer_register =  function (){
        fetch('http://127.0.0.1:8000/user/retailer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: 'John',
          last_name: 'Doe',
          username: 'kebe_retailer',
          password: 'john123',
          phone_number: '555-555-5555',
          email: 'johndoe@example.com',
          local_address: '123 Main St',
          subcity: 'Some Subcity',
          store_name:'john glasses',
          city: 'Some City',
          photo: 'https://example.com/johndoe.jpg',
          accepts_custom_order:'True'
        })
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
      })
      .catch(error => {
        // Handle any errors that occurred during the request
      });
      console.log()
    }


    let customerRegister = <div className="login-page">
        <div className="login-left">
            <div className="login-form">
                <div className="navbar-logo">VISION</div>
                <div className="logIn">Register</div>
                <UserInput type="text" title="User Name"/>

                <UserInput type="text" title="first name"/>
                <UserInput type="text" title="last name"/>
                <UserInput type="number" title="phone number"/>
                <UserInput type="password" title="Password"/>
                <UserInput type="password" title="re-enter password"/>
                <UserInput type="email" title="email address"/>
                <UserInput type="text" title="local address"/>
                <UserInput type="text" title="subcity"/>
                <UserInput type="text" title="city"/>
                <UserInput type="file" title="photo"/>
                <button onClick={customer_register} className="button-style theme-color login-btn">Register<img className="login-btn-arrow"src="src/assets/arrow.png"/></button>

                </div>
                </div>
    </div>

let retailerRegister = <div className="login-page">
<div className="login-left">
    <div className="login-form">
        <div className="navbar-logo">VISION</div>
        <div className="logIn">Register</div>
        <UserInput type="text" title="User Name"/>
        <UserInput type="text" title="first name"/>
        <UserInput type="text" title="last name"/>
        <UserInput type="text" title="Store name"/>
        <UserInput type="number" title="phone number"/>
        <UserInput type="password" title="Password"/>
        <UserInput type="password" title="re-enter password"/>
        <UserInput type="email" title="email address"/>
        <UserInput type="text" title="local address"/>
        <UserInput type="text" title="subcity"/>
        <UserInput type="text" title="city"/>
        <UserInput type="file" title="photo"/>
        <label>
            Accept custom order?
            <input type="radio" name="custom-order" value="True" /> Yes
            <input type="radio" name="custom-order" value="False" /> No
      </label>
        <button onClick={retailer_register} className="button-style theme-color login-btn">Register<img className="login-btn-arrow"src="src/assets/arrow.png"/></button>

        </div>
        </div>
</div>


    return (
        <>
          {props.user == "customer" ? customerRegister : retailerRegister}

        </>
    )
}
import React ,{ useState } from "react";
import UserInput from "./UserInput";

export default function Register(props){

  const [retailerFields, setRetailerFields] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    phone_number: '',
    email: '',
    local_address: '',
    subcity: '',
    store_name:'',
    city: '',
    photo: '',
    accepts_custom_order:''
  });
  const [customerFields, setCustomerFields] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    phone_number: '',
    email: '',
    local_address: '',
    subcity: '',
    city: '',
    photo: '',
  });

  const handleRetailerChange = (event) => {
    const { name, value } = event.target;
    setRetailerFields({ ...retailerFields, [name]: value });
  };

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;
    setCustomerFields({ ...customerFields, [name]: value });
  };



    let customer_register =  function (){
        fetch('http://127.0.0.1:8000/user/customer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerFields)
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
      })
      .catch(error => {
        // Handle any errors that occurred during the request
      });
      console.log(customerFields)
    }

    let retailer_register =  function (){
        fetch('http://127.0.0.1:8000/user/retailer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(retailerFields)
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
      })
      .catch(error => {
        // Handle any errors that occurred during the request
      });
      console.log(retailerFields)
    }


    let customerRegister = <div className="login-page">
        <div className="login-left">
            <div className="login-form">
                <div className="navbar-logo">VISION</div>
                <div className="logIn">Register</div>
                <UserInput type="text" title="User Name" name="username" value={customerFields.username}  onChange={handleCustomerChange}/>
                <UserInput type="text" title="first name"name="first_name" value={customerFields.first_name}  onChange={handleCustomerChange}/>
                <UserInput type="text" title="last name" name="last_name" value={customerFields.last_name}  onChange={handleCustomerChange}/>
                <UserInput type="number" title="phone number" name="phone_number" value={customerFields.phone_number}  onChange={handleCustomerChange}/>
                <UserInput type="password" title="Password" name="password" value={customerFields.password}  onChange={handleCustomerChange}/>
                <UserInput type="password" title="re-enter password"/>
                <UserInput type="email" title="email address" name="email"value={customerFields.email}  onChange={handleCustomerChange}/>
                <UserInput type="text" title="local address" name="local_address" value={customerFields.local_address}  onChange={handleCustomerChange}/>
                <UserInput type="text" title="subcity" name="subcity" value={customerFields.subcity}  onChange={handleCustomerChange}/>
                <UserInput type="text" title="city" name="city" value={customerFields.city}  onChange={handleCustomerChange}/>
                <UserInput type="file" title="photo" name="photo" value={customerFields.photo}  onChange={handleCustomerChange}/>
                <button onClick={customer_register} className="button-style theme-color login-btn">Register<img className="login-btn-arrow"src="src/assets/arrow.png"/></button>

                </div>
                </div>
    </div>

let retailerRegister = <div className="login-page">
<div className="login-left">
    <div className="login-form">
        <div className="navbar-logo">VISION</div>
        <div className="logIn">Register</div>
        <UserInput type="text" title="User Name" name="username" value={retailerFields.username}  onChange={handleRetailerChange}/>
        <UserInput type="text" title="first name" name="first_name" value={retailerFields.first_name}  onChange={handleRetailerChange}/>
        <UserInput type="text" title="last name" name="last_name" value={retailerFields.last_name}  onChange={handleRetailerChange}/>
        <UserInput type="text" title="Store name" name="store_name" value={retailerFields.store_name}  onChange={handleRetailerChange}/>
        <UserInput type="number" title="phone number" name="phone_number" value={retailerFields.phone_number}  onChange={handleRetailerChange}/>
        <UserInput type="password" title="Password"  name="password" value={retailerFields.password}  onChange={handleRetailerChange}/>
        <UserInput type="password" title="re-enter password"/>
        <UserInput type="email" title="email address" name="email" value={retailerFields.email}  onChange={handleRetailerChange}/>
        <UserInput type="text" title="local address" name="local_address" value={retailerFields.local_address}  onChange={handleRetailerChange}/>
        <UserInput type="text" title="subcity" name="subcity" value={retailerFields.subcity}  onChange={handleRetailerChange}/>
        <UserInput type="text" title="city" name="city" value={retailerFields.city}  onChange={handleRetailerChange}/>
        <UserInput type="file" title="photo" name="photo" value={retailerFields.photo}  onChange={handleRetailerChange}/>
        <label>
            Accept custom order?
            <input type="radio" name="accepts_custom_order" value="True" checked={retailerFields.accepts_custom_order==="True"} onChange={handleRetailerChange}/> Yes
            <input type="radio" name="accepts_custom_order" value="False" checked={retailerFields.accepts_custom_order ==="False"} onChange={handleRetailerChange}/> No
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
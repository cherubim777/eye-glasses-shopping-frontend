import React ,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from "./UserInput";

export default function Register(props){
  const navigate = useNavigate()
  const [retailerFields, setRetailerFields] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirm_password: '',
    phone_number: '',
    email: '',
    local_address: '',
    subcity: '',
    store_name:'',
    city: '',
    photo: '',
    accepts_custom_order:'',
    custom_order_price: 0
  });
  const [customerFields, setCustomerFields] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirm_password: '',
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

  const handleCustomerImageChange = (e) => {
    setCustomerFields({ ...customerFields, photo: e.target.files[0] });
  };
  const handleRetailerImageChange = (e) => {
    setRetailerFields({ ...retailerFields, photo: e.target.files[0] });
  };
  const validate = (field) => {
    const usernamePattern = /^[a-zA-Z]{3,20}$/;
    const namePattern = /^[a-zA-Z]{2,20}$/;
    const emailPattern = /^[a-zA-Z0-9._+-]{1,20}@[a-zA-Z.]{2,30}\.[a-zA-Z]{2,6}$/;

    if(!usernamePattern.test(field.username)){
      alert("Username should contain 3 - 20 alphabetical characters")
      return false
    }
    if(!namePattern.test(field.first_name) || !namePattern.test(field.last_name)){
      alert("Name should contain 2 - 20 alphabetical characters")
      return false
    }
    if(!emailPattern.test(field.email)){
      alert("Invalid Email Address")
      return false
    }
    if(!field.password == field.confirm_password){
      alert("Passwords do not match")
      return false
    }
    return true
  }


    let customer_register =  function (event){
      event.preventDefault();
      if (!validate(customerFields)){
        return
      }
      
      const formData = new FormData();
      formData.append("first_name", customerFields.first_name);
      formData.append("last_name", customerFields.last_name);
      formData.append("password", customerFields.password);
      formData.append("username", customerFields.username);
      formData.append("phone_number", customerFields.phone_number);
      formData.append("email", customerFields.email);
      formData.append("local_address", customerFields.local_address);
      formData.append("subcity", customerFields.subcity);
      formData.append("city", customerFields.city);
      typeof customerFields.photo !== "string" && formData.append("photo", customerFields.photo);

        fetch('http://127.0.0.1:8000/user/customer/', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if(response.ok){
          alert("Registration successful")
          navigate("/login")
        }
      })
      .then(data => {
        // Handle the response data here
      })
      .catch(error => {
        // Handle any errors that occurred during the request
      });
    }

    let retailer_register =  function (event){
      event.preventDefault();
      if (!validate(retailerFields)){
        return
      }

      const formData = new FormData();
      formData.append("store_name", retailerFields.store_name);
      formData.append("email", retailerFields.email);
      formData.append("phone_number", retailerFields.phone_number);
      formData.append("local_address", retailerFields.local_address);
      formData.append("subcity", retailerFields.subcity);
      formData.append("city", retailerFields.city);
      formData.append("first_name", retailerFields.first_name);
      formData.append("last_name", retailerFields.last_name);
      formData.append("username", retailerFields.username);
      formData.append("password", retailerFields.password);
      formData.append("accepts_custom_order", retailerFields.accepts_custom_order);
      formData.append("custom_order_price", retailerFields.custom_order_price);
      typeof retailerFields.photo !== "string" && formData.append("photo", retailerFields.photo);
      

        fetch('http://127.0.0.1:8000/user/retailer/', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if(response.ok){
          alert("Form submitted. Email will be sent when you are approved.")
          navigate("/login")
        }
      })
      .then(data => {
        // Handle the response data here
      })
      .catch(error => {
        // Handle any errors that occurred during the request
      });
    }


    let customerRegister = <div className="login-page">
        <div className="login-left">
            <div className="login-form">
                <div className="navbar-logo">VISION</div>
                <div className="logIn">Register</div>
                <form onSubmit={(event) => customer_register(event)}>
                  <UserInput type="text" title="User Name" name="username" value={customerFields.username}  onChange={handleCustomerChange}/>
                  <UserInput type="text" title="first name"name="first_name" value={customerFields.first_name}  onChange={handleCustomerChange}/>
                  <UserInput type="text" title="last name" name="last_name" value={customerFields.last_name}  onChange={handleCustomerChange}/>
                  <UserInput type="number" title="phone number" name="phone_number" value={customerFields.phone_number}  onChange={handleCustomerChange}/>
                  <UserInput type="password" title="Password" name="password" value={customerFields.password}  onChange={handleCustomerChange}/>
                  <UserInput type="password" title="confirm_password" name="confirm_password" value={customerFields.confirm_password} onChange={handleCustomerChange}/>
                  <UserInput type="email" title="email address" name="email"value={customerFields.email}  onChange={handleCustomerChange}/>
                  <UserInput type="text" title="local address" name="local_address" value={customerFields.local_address}  onChange={handleCustomerChange}/>
                  <UserInput type="text" title="subcity" name="subcity" value={customerFields.subcity}  onChange={handleCustomerChange}/>
                  <UserInput type="text" title="city" name="city" value={customerFields.city}  onChange={handleCustomerChange}/>
                  <input type="file" title="photo" name="photo" accept="images/*" value={customerFields.photo}  onChange={handleCustomerImageChange}/>
                  <button className="button-style theme-color login-btn">Register<img className="login-btn-arrow"src="/src/assets/arrow.png"/></button>
                </form>
                </div>
                </div>
    </div>

let retailerRegister = <div className="login-page">
<div className="login-left">
    <div className="login-form">
        <div className="navbar-logo">VISION</div>
        <div className="logIn">Register</div>
        <form onSubmit={(event) => retailer_register(event)}>
          <UserInput type="text" title="User Name" name="username" value={retailerFields.username}  onChange={handleRetailerChange}/>
          <UserInput type="text" title="first name" name="first_name" value={retailerFields.first_name}  onChange={handleRetailerChange}/>
          <UserInput type="text" title="last name" name="last_name" value={retailerFields.last_name}  onChange={handleRetailerChange}/>
          <UserInput type="text" title="Store name" name="store_name" value={retailerFields.store_name}  onChange={handleRetailerChange}/>
          <UserInput type="number" title="phone number" name="phone_number" value={retailerFields.phone_number}  onChange={handleRetailerChange}/>
          <UserInput type="password" title="Password"  name="password" value={retailerFields.password}  onChange={handleRetailerChange}/>
          <UserInput type="password" title="confirm_password" name="confirm_password" value={retailerFields.confirm_password}  onChange={handleRetailerChange}/>
          <UserInput type="email" title="email address" name="email" value={retailerFields.email}  onChange={handleRetailerChange}/>
          <UserInput type="text" title="local address" name="local_address" value={retailerFields.local_address}  onChange={handleRetailerChange}/>
          <UserInput type="text" title="subcity" name="subcity" value={retailerFields.subcity}  onChange={handleRetailerChange}/>
          <UserInput type="text" title="city" name="city" value={retailerFields.city}  onChange={handleRetailerChange}/>
          <input type="file" title="photo" accept="image/*" name="photo" onChange={handleRetailerImageChange} /><br /><br />
        <label>
            Accept custom order?
            <input type="radio" required name="accepts_custom_order" value="True" checked={retailerFields.accepts_custom_order==="True"} onChange={handleRetailerChange}/> Yes
            <input type="radio" name="accepts_custom_order" value="False" checked={retailerFields.accepts_custom_order ==="False"} onChange={handleRetailerChange}/> No
      </label>
      {retailerFields.accepts_custom_order === "True" && <UserInput type="number" title="custom order price" name="custom_order_price" value={retailerFields.custom_order_price}  onChange={handleRetailerChange}/>}

        <button className="button-style theme-color login-btn">Register<img className="login-btn-arrow"src="/src/assets/arrow.png"/></button>
        </form>
        </div>
        </div>
</div>


    return (
        <>
          {props.user == "customer" ? customerRegister : retailerRegister}

        </>
    )
}
import React, {useState} from "react";
import UserInput from "./UserInput";
export default function AddProducts(){

    const [product,setProduct] = useState({
      name: '',
      age_group: '',
      gender_category: '',
      category: '',
      brand: '',
      description: '',
      price: '',
      image: ''
    });

    const token = localStorage.getItem('authToken');
    const csrftoken = getCookie('csrftoken');

    const handlePrductChange = (event) =>{
      const {name,value} = event.target;
      setProduct({...product,[name]:value})
    };

    let addProduct = function(){
        fetch('http://127.0.0.1:8000/product/addProduct/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
              'X-CSRFToken' : csrftoken
            },
            body: JSON.stringify(product)
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
        <>
        <div className="login-left">
        <div className="login-form">
          <h1> Add product</h1>
            <UserInput type="text" title="name" name="name" value={product.name} onChange={handlePrductChange}/>
        <label>
            Age Group 
            <input type="radio" name="age_group" value="K" checked={product.age_group ==="K"} onChange={handlePrductChange}/> Kids
            <input type="radio" name="age_group" value="T" checked={product.age_group ==="T"} onChange={handlePrductChange}/> Teens 
            <input type="radio" name="age_group" value="A" checked={product.age_group ==="A"} onChange={handlePrductChange}/> Adults
            <input type="radio" name="age_group" value="S" checked={product.age_group ==="S"} onChange={handlePrductChange}/> Seniors
     </label>
     <br/>
     <label>
            Gender Group
            <input type="radio" name="gender_category" value="M" checked={product.gender_category==="M"} onChange={handlePrductChange}/> Male
            <input type="radio" name="gender_category" value="F" checked={product.gender_category==="F"} onChange={handlePrductChange}/> Female 
            <input type="radio" name="gender_category" value="U" checked={product.gender_category==="U"} onChange={handlePrductChange} /> Unisex
     </label>
        <UserInput type="text" title="Brand" name="brand" value={product.brand} onChange={handlePrductChange}/>
        <label>
        Description
        <textarea  name="description" cols="60" rows="10" placeholder="short description about the product" value={product
        .description} onChange={handlePrductChange}></textarea>
        </label>
        <UserInput type="number" title="price" name="price" value={product.price} onChange={handlePrductChange}/>
        <UserInput type="file"  title="Product Image" name="image" value={product.image} onChange={handlePrductChange} />
        <button  onClick={addProduct} className="button-style theme-color ">Submit</button>

        </div>
        </div>
        </>
      
    )

}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
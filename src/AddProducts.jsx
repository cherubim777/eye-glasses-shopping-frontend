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

    const handleProductChange = (event) =>{
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
            <UserInput type="text" title="name" name="name" value={product.name} onChange={handleProductChange}/>
        <label>
            Age Group 
            <input type="radio" name="age_group" value="K" checked={product.age_group ==="K"} onChange={handleProductChange}/> Kids
            <input type="radio" name="age_group" value="T" checked={product.age_group ==="T"} onChange={handleProductChange}/> Teens 
            <input type="radio" name="age_group" value="A" checked={product.age_group ==="A"} onChange={handleProductChange}/> Adults
            <input type="radio" name="age_group" value="S" checked={product.age_group ==="S"} onChange={handleProductChange}/> Seniors
     </label>
     <br/>
     <label>
            Gender Group
            <input type="radio" name="gender_category" value="M" checked={product.gender_category==="M"} onChange={handleProductChange}/> Male
            <input type="radio" name="gender_category" value="F" checked={product.gender_category==="F"} onChange={handleProductChange}/> Female 
            <input type="radio" name="gender_category" value="U" checked={product.gender_category==="U"} onChange={handleProductChange} /> Unisex
     </label>
     
     <label><br/>
           Product Category
          <input type="radio" name="category" value="Oversized" checked={product.category === "Oversized"} onChange={handleProductChange}/> Oversized
          <input type="radio" name="category" value="Sports" checked={product.category === "Sports"} onChange={handleProductChange} />Sports
          <input type="radio" name="category" value="Mirrored" checked={product.category === "Mirrored"} onChange={handleProductChange} /> Mirrored
          <input type="radio" name="category" value="Gradient" checked={product.category === "Gradient"} onChange={handleProductChange} />Gradient
          <input type="radio" name="category" value="Polarized" checked={product.category === "Polarized"} onChange={handleProductChange}/>Polarized
          <input type="radio" name="category" value="Aviator" checked={product.category === "Aviator"} onChange={handleProductChange} />Aviator
          <input type="radio" name="category" value="Wayfarer" checked={product.category === "Wayfarer"} onChange={handleProductChange}/> Wayfarer
          <input type="radio" name="category" value="Round" checked={product.category === "Round"} onChange={handleProductChange} />Round
          <input type="radio" name="category" value="Cat Eye" checked={product.category === "Cat Eye"} onChange={handleProductChange}/>Cat Eye
          <input type="radio" name="category" value="Clip-On" checked={product.category === "Clip-On"} onChange={handleProductChange}/>Clip-On
    </label>
        <UserInput type="text" title="Brand" name="brand" value={product.brand} onChange={handleProductChange}/>
        <label>
        Description
        <textarea  name="description" cols="60" rows="10" placeholder="short description about the product" value={product
        .description} onChange={handleProductChange}></textarea>
        </label>
        <UserInput type="number" title="price" name="price" value={product.price} onChange={handleProductChange}/>
        <UserInput type="file"  title="Product Image" name="image" value={product.image} onChange={handleProductChange} />
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
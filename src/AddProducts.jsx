import React from "react";
import UserInput from "./UserInput";
export default function AddProducts(){


    let addProduct = function(){
        fetch('http://127.0.0.1:8000/product/addProduct/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: 'cool eye glass',
              age_group: 'T',
              gender_category: 'M',
              category: 'Sports',
              brand: 'what brand',
              description: 'this is a cood product',
              price: '76',
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
        <>
        <div className="login-left">
        <div className="login-form">
          <h1> Add product</h1>
            <UserInput type="text" title="name" />
        <label>
            Age Group 
            <input type="radio" name="age_group" value="K" /> Kids
            <input type="radio" name="age_group" value="T" /> Teens 
            <input type="radio" name="age_group" value="A" /> Adults
            <input type="radio" name="age_group" value="S" /> Seniors
     </label>
     <br/>
     <label>
            Gender Group
            <input type="radio" name="gender_category" value="M" /> Male
            <input type="radio" name="gender_category" value="F" /> Female 
            <input type="radio" name="gender_category" value="U" /> Unisex
     </label>
        <UserInput type="text" title="Brand" />
        <label>
        Description
        <textarea  name="description" cols="60" rows="10" placeholder="short description about the product"></textarea>
        </label>
        <UserInput type="number" title="price" />
        <UserInput type="file"  title="Product Image" />
        <button  onClick={addProduct} className="button-style theme-color ">Submit</button>

        </div>
        </div>
        </>
      
    )
}
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
      image: null,
      quantity:'',
    });

    const token = localStorage.getItem('authToken');

    const handleProductChange = (event) =>{
      const {name,value} = event.target;
      setProduct({...product,[name]:value})
    };
    const handleImageChange = (event) => {
      setProduct({ ...product, image: event.target.files[0] });
    };

    let addProduct = function(){
        
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('age_group', product.age_group);
        formData.append('gender_category', product.gender_category);
        formData.append('category', product.category);
        formData.append('brand', product.brand);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('quantity', product.quantity);
        formData.append('image', product.image);
        fetch('http://127.0.0.1:8000/product/addProduct/', {
            method: 'POST',
            headers: {
              // 'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            // Handle the response data here
          })
          .catch(error => {
            // Handle any errors that occurred during the request
          });

        }
        const handleSubmit = (event) => {
          event.preventDefault();
          addProduct();
        };

    return (
        <>
        <div className="login-left">
        <div className="login-form">
          <h1> Add product</h1>
          <form onSubmit={handleSubmit}>
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
        <UserInput type="number" min="1" max="10" title="quantity" name="quantity" value={product.quantity} onChange={handleProductChange}/>

        <UserInput type="file"  accept="image/*" title="Product Image" name="image"  onChange={handleImageChange} />
        <UserInput
              type="submit"
              value="Submit"
              className="button-style theme-color"
            />
            </form>
        </div>
        </div>
        </>
      
    )

}


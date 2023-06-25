import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserInput from "./UserInput";

export default function UpdateProduct() {

  const location = useLocation()
  const productId = location.state?.id
  const [product, setProduct] = useState({
    name: "",
    age_group: "",
    gender_category: "",
    category: "",
    brand: "",
    description: "",
    price: "",
    image: null,
  });

  const token = localStorage.getItem("retailerToken");
  // const csrftoken = getCookie("csrftoken");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/product/getProduct/${productId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });
  }, [productId, token]);

  const handleProductChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (event) => {
    setProduct({ ...product, photo: event.target.files[0] });
    console.log(product.photo)
  };


  const updateProduct = () => {

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('age_group', product.age_group);
    formData.append('gender_category', product.gender_category);
    formData.append('category', product.category);
    formData.append('brand', product.brand);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('quantity', product.quantity);
    typeof product.photo !== "string" && formData.append('photo', product.photo);
    fetch(`http://127.0.0.1:8000/product/updateProduct/${productId}/`, {
      method: "PUT",
      headers: {
        // "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(formData)
        // Handle the response data here
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct();
  };

  return (
    <>
      <div className="login-left">
        <div className="login-form">
          <h1> Update product</h1>
          <form onSubmit={handleSubmit}>
          <UserInput
            type="text"
            title="name"
            name="name"
            value={product.name}
            onChange={handleProductChange}
          />
          <label>
            Age Group
            <select 
              className="button-style"
              required
              name="age_group"
              value={product.age_group}
              onChange={handleProductChange}
            >
              <option value="">Select an age group</option>
              <option value="K">Kids</option>
              <option value="T">Teens</option>
              <option value="A">Adults</option>
              <option value="S">Seniors</option>
            </select>
          </label>
          <br />
          <label>
            Gender Group
            <select
              className="button-style"
              required
              name="gender_category"
              value={product.gender_category}
              onChange={handleProductChange}
            >
              <option value="">Select a gender category</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="U">Unisex</option>
            </select>
          </label>
          <UserInput
            type="text"
            title="Brand"
            name="brand"
            value={product.brand}
            onChange={handleProductChange}
          />
          <label>
            Description
            <textarea
              name="description"
              cols="60"
              rows="10"
              placeholder="short description about the product"
              value={product.description}
              onChange={handleProductChange}
            ></textarea>
          </label>
          <UserInput
            type="number"
            title="price"
            name="price"
            value={product.price}
            onChange={handleProductChange}
          />
          <input
            type="file"
            title="Product Image"
            name="image"
            value={product.image}
            onChange={handleImageChange}
          /><br /><br />
           <button
              type="submit"
              className="button-style theme-color"
            >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from "./UserInput";

export default function AddProducts() {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "",
    age_group: "",
    gender_category: "",
    category: "",
    brand: "",
    description: "",
    price: "",
    photo: null,
    quantity: "",
  });

  const token = localStorage.getItem("retailerToken");

  const handleProductChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (event) => {
    setProduct({ ...product, photo: event.target.files[0] });
    console.log(product.photo);
  };

  let addProduct = function () {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("age_group", product.age_group);
    formData.append("gender_category", product.gender_category);
    formData.append("category", product.category);
    formData.append("brand", product.brand);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("photo", product.photo);
    fetch("http://127.0.0.1:8000/product/addProduct/", {
      method: "POST",
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201){
          navigate("/retailer/products")
        }
        else {
          alert("Error Adding Product")
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct();
  };

  const ageGroupOptions = [
    { value: "K", label: "Kids" },
    { value: "T", label: "Teens" },
    { value: "A", label: "Adults" },
    { value: "S", label: "Seniors" },
  ];

  const genderCategoryOptions = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
    { value: "U", label: "Unisex" },
  ];

  const categoryOptions = [
    { value: "Oversized", label: "Oversized" },
    { value: "Sports", label: "Sports" },
    { value: "Mirrored", label: "Mirrored" },
    { value: "Gradient", label: "Gradient" },
    { value: "Polarized", label: "Polarized" },
    { value: "Aviator", label: "Aviator" },
    { value: "Wayfarer", label: "Wayfarer" },
    { value: "Round", label: "Round" },
    { value: "Cat Eye", label: "Cat Eye" },
    { value: "Clip-On", label: "Clip-On" },
  ];

  return (
    <>
      <div className="login-left">
        <div className="login-form">
          <h1> Add product</h1>
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
                name="age_group"
                required
                value={product.age_group}
                onChange={handleProductChange}
              >
                <option value="">Select age group</option>
                {ageGroupOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Gender Group
              <select
                className="button-style"
                name="gender_category"
                required
                value={product.gender_category}
                onChange={handleProductChange}
              >
                <option value="">Select gender category</option>
                {genderCategoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Product Category
              <select
                className="button-style"
                name="category"
                required
                value={product.category}
                onChange={handleProductChange}
              >
                <option value="">Select product category</option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <br />
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
            <UserInput
              type="number"
              min="1"
              title="quantity"
              name="quantity"
              value={product.quantity}
              onChange={handleProductChange}
            />

            <UserInput
              type="file"
              accept="image/*"
              title="Product Image"
              name="image"
              onChange={handleImageChange}
            />
            <input
              type="submit"
              value="Submit"
              className="button-style theme-color"
            />
          </form>
        </div>
      </div>
    </>
  );
}
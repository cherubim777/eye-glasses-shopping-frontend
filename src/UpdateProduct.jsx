import React, { useState, useEffect } from "react";
import UserInput from "./UserInput";

export default function UpdateProduct({ productId }) {
  const [product, setProduct] = useState({
    name: "",
    age_group: "",
    gender_category: "",
    category: "",
    brand: "",
    description: "",
    price: "",
    image: "",
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

  const updateProduct = () => {
    fetch(`http://127.0.0.1:8000/product/updateProduct/${productId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });
  };

  return (
    <>
      <div className="login-left">
        <div className="login-form">
          <h1> Update product</h1>
          <UserInput
            type="text"
            title="name"
            name="name"
            value={product.name}
            onChange={handleProductChange}
          />
          <label>
            Age Group
            <input
              type="radio"
              name="age_group"
              value="K"
              checked={product.age_group === "K"}
              onChange={handleProductChange}
            />
            Kids
            <input
              type="radio"
              name="age_group"
              value="T"
              checked={product.age_group === "T"}
              onChange={handleProductChange}
            />
            Teens
            <input
              type="radio"
              name="age_group"
              value="A"
              checked={product.age_group === "A"}
              onChange={handleProductChange}
            />
            Adults
            <input
              type="radio"
              name="age_group"
              value="S"
              checked={product.age_group === "S"}
              onChange={handleProductChange}
            />
            Seniors
          </label>
          <br />
          <label>
            Gender Group
            <input
              type="radio"
              name="gender_category"
              value="M"
              checked={product.gender_category === "M"}
              onChange={handleProductChange}
            />
            Male
            <input
              type="radio"
              name="gender_category"
              value="F"
              checked={product.gender_category === "F"}
              onChange={handleProductChange}
            />
            Female
            <input
              type="radio"
              name="gender_category"
              value="U"
              checked={product.gender_category === "U"}
              onChange={handleProductChange}
            />
            Unisex
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
          <UserInput
            type="file"
            title="Product Image"
            name="image"
            value={product.image}
            onChange={handleProductChange}
          />
          <button
            onClick={updateProduct}
            className="button-style theme-color "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}


import React from "react";
import { useNavigate, Link } from "react-router-dom"

export default function Product(props){
    const navigate = useNavigate()
    const token = localStorage.getItem('authToken');

    const addToCart = () => {
        fetch('http://127.0.0.1:8000/carts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(props.product)
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
        <Link to={`/customer/productDetails/${props.product.id}`}>
            <div className="product">
            <img className="product-image" src={`http://127.0.0.1:8000${props.product.photo}`} alt={props.product.name} />
            <div className="product-info">
                <span className="product-name">{props.product.name}</span>
                <span className="product-price">{props.product.price}</span>
            </div>
                <div className="product-buttons">
                    <button className="product-buy theme-color button-style">Buy Now</button>
                    <button onClick={addToCart} className="product-add theme-color button-style">Add to cart</button>
                </div>
            </div>
        </Link>
    )
}
import React from "react";
import { useNavigate, Link } from "react-router-dom"

export default function Product(props){
    const navigate = useNavigate()
    const token = localStorage.getItem('customerToken');
    console.log(token)
    const addToCart = () => {

        fetch('http://127.0.0.1:8000/cart/carts/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({"cart": 1, "quantity": 1, "product_id": props.product.id})
          })
          .then(response => response.json())
          .then(data => {
            // Handle the response data here
          })
          .catch(error => {
            // Handle any errors that occurred during the request
          });
    }

    const handlePurchase = () => {
      navigate("/customer/checkout", {state: {cartItem: [{"product_id": props.product.id}]}})
    }
    return (
      <div className="product">
              <Link to={`/customer/productDetails/${props.product.id}`} state={{id: props.product.id}}>
            <img className="product-image" src={props.product.photo} alt={props.product.name} />
            <div className="product-info">
                <span className="product-name">{props.product.name}</span>
                <span className="product-price">{`${props.product.price} ETB`}</span>
            </div>
        </Link>
                <div className="product-buttons">
                  {props.user === "customer" ?
                    <>
                    <button className="product-buy theme-color button-style" onClick={handlePurchase}>Buy Now</button>
                    <button onClick={addToCart} className="product-add theme-color button-style">Add to cart</button></>
                    :
                    <>
                    <button className="product-buy theme-color button-style" onClick={() => navigate("/retailer/updateProduct", {state: {id: props.product.id}})}>Edit</button>
                    <button  className="product-add theme-color button-style">Remove</button>
                    </>
                  }
                </div>
            </div>
    )
}
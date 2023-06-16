import React from "react";
import { useNavigate, Link } from "react-router-dom"

export default function Product(props){
    const navigate = useNavigate()

    return (
        <Link to={`/customer/productDetails/${props.product.id}`}>
            <div className="product">
            <img className="product-image" src={`data:image/png;base64,${props.product.image}`} alt={props.product.name} />
            <div className="product-info">
                <span className="product-name">{props.product.name}</span>
                <span className="product-price">{props.product.price}</span>
            </div>
                <div className="product-buttons">
                    <button className="product-buy theme-color button-style">Buy Now</button>
                    <button className="product-add theme-color button-style">Add to cart</button>
                </div>
            </div>
        </Link>
    )
}
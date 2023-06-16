import React from "react";

export default function Product(props){
    return (
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
    )
}
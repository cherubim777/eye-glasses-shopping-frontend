import React from "react";

export default function Product(){
    return (
        <div className="product">
            <img className="product-image" src="./src/assets/sample-eyeglass1.png" alt="eyeglass" />
            <div className="product-info">
                <span className="product-name">Rayban</span>
                <span className="product-price">30ETB</span>
            </div>
            <div className="product-buttons">
                <button className="product-buy theme-color button-style">Buy Now</button>
                <button className="product-add theme-color button-style">Add to cart</button>
            </div>
        </div>
    )
}
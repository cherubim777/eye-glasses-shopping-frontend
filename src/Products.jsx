import React from "react";
import Product from "./Product"

export default function Products(props){
    return(
        <div className= "products">
            <div className="products-header">
                <span className="products-category">{props.category}</span>
                <span className="products-expander">View all</span>
            </div>
            
            <div className="product-container">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            
             </div>
        </div>
    )
}
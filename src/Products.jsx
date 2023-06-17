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
            {props.products.map((product) => (
                 <Product key={product.id} id={product.id} product={product} user={props.user}/>
             ))}
            
             </div>
        </div>
    )
}
import React from "react";
import Product from "./Product"

export default function Products(props){
    const [productClassName, setProductClassName] = React.useState(props.className)
    const handleExpand = () => {
        if(productClassName === "product-container"){
            setProductClassName(productClassName+"-expanded")
        }
        else{
            setProductClassName("product-container")
        }
    }
    return(
        <div className= "products">
            {props.isHome && (<div className="products-header">
                <span className="products-category">{props.category}</span>
                <span className="products-expander link-style" onClick={handleExpand}>View all</span>
            </div>)}
            
            <div className={productClassName}>
            {props.products.map((product) => (
                 <Product key={product.id} id={product.id} product={product} user={props.user}/>
             ))}
            
             </div>
        </div>
    )
}
import React from "react";
import "./Cart.css"
export default function Item(){
    return(
        <div className="item">
            <img className="item-image" src="src/assets/sample-eyeglass3.png" alt="" />
            <div>
                <div className="item-name">Product Name</div>
                <div className="item-description">Product Description</div>
            </div>
            <input className="item-quantity" type="number" placeholder="1" min={1} max={6}/>
            <div className="item-price">$432</div>
            <img className="trash-btn" src="src/assets/trash.png" alt="trash image" />

        </div>
    )
}
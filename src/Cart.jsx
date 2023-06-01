import React from "react";
import Item from "./Item";
import "./Cart.css"

export default function Cart(){
    return(
        <div className="cart">
            <p> &lt; Shopping Continue</p>
            <hr/>
            <p>Shopping Cart</p>
            <p>You have 3 items in your cart</p>
            <div className="cart-body">
                <div className="cart-items">
                    <Item user="customer"/>
                    <Item user="customer"/>
                    <Item user="customer"/>
                   
                   
                    
                </div>
                <div className="price theme-color">
                    <div className="price-value">
                        <span>Subtotal</span>
                        <span>$1000</span>
                    </div>
                    <div className="price-value">
                        <span>Shipping</span>
                        <span>$5</span>
                    </div>
                    <div className="price-value">
                        <span>Total(Tax.incl)</span>
                        <span>$1005</span>
                    </div>
                    <div className="check-out" >
                        <span>$1005</span>
                        <span>Checkout ➜</span>
                    </div>
                </div>

            </div>     
        
        </div>
        
    )
}
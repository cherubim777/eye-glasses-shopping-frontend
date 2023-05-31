import React from "react";
import Item from "./Item";
export default function WishList(){
    return(
        <div className="cart">
            <p> &lt; Shopping Continue</p>
            <hr/>
            <p>Shopping Wishlist</p>
            <p>You have 3 items in your wish List</p>
            <div className="cart-body">
                <div className="cart-items">
                    <Item />
                    <Item />
                    <Item />
                </div>
                
            </div>     
        
        </div>
        
    )
}
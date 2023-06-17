import React from "react";
import {useNavigate} from 'react-router-dom'
import Item from "./Item";

export default function WishList(){
    const navigate = useNavigate()
    return(
        <div className="cart">
            <p onClick={() => navigate(-1)} style={{cursor: "pointer"}}> &lt; Shopping Continue</p>
            <hr/>
            <p>Shopping Wishlist</p>
            <p>You have 3 items in your wish List</p>
            <div className="cart-body">
                <div className="cart-items">
                    <Item user="customer"/>
                    <Item user="customer"/>
                    <Item user="customer"/>
                </div>
                
            </div>     
        
        </div>
        
    )
}
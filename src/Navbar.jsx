import React from "react";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar-logo">VISION</div>
            <ul className="navbar-links">
                <li>Home</li>
                <li>Products</li>
                <li className="logo search-btn"></li>
                <li className="logo cart-btn"></li>
                <li className="logo user-btn"></li>
            </ul>
        </div>
    )
}
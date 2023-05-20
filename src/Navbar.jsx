import React from "react";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar-logo">VISION</div>
            <ul className="navbar-links">
                <li>Home</li>
                <li>Products</li>
                <li className="logo search"></li>
                <li className="logo cart"></li>
                <li className="logo user"></li>
            </ul>
        </div>
    )
}
import React from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar(props){
    
    const customerNavbar = 
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

    const retailerNavbar = 
        <div className="retailer-navbar">
            <ul className="navbar-links retailer-navbar-list">
                <li className="navbar-logo"><img src="/src/assets/fashion-glasses-icon.png" style={{width: "50px", marginRight: "5px"}}/>VISION</li>
                <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/dashboard.png" alt="dashboard logo"/>
                        <NavLink to="/retailer/" className="inactive">Dashboard</NavLink>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/products.png" alt="Products logo"/>
                        <NavLink to="/retailer/products" className="inactive">Products</NavLink>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/orders.png" alt="orders logo"/>
                        <NavLink to="/retailer/orders" className="inactive">Orders</NavLink>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/shipments.png" alt="Shipments logo"/>
                        <NavLink to="/retailer/shipments" className="inactive">Shipments</NavLink>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/transactions.png" alt="transactions logo"/>
                        <NavLink to="/retailer/transactions" className="inactive">Transactons</NavLink>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/settings.png" alt="settings logo"/>
                        <NavLink to="/retailer/settings" className="inactive">Settings</NavLink>
                    </div>
                    </li>
            </ul>

         </div>

    return (
        <>
             {props.user == "customer" ? customerNavbar : retailerNavbar}

        </>
    )
}
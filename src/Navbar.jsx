import React from "react";

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
        <div>
            <ul className="navbar-links seller-navbar">
                <li className="navbar-logo">Vision</li>
                <li>
                    <div className="navbar-links">
                        <img src="src/assets/navbar/dashboard.png" alt="dashboard logo"/>
                        <div>Dashboard</div>
                    </div>
                    </li>
                    <li>
                    <div className="navbar-links">
                        <img src="src/assets/navbar/products.png" alt="Products logo"/>
                        <div>Products</div>
                    </div>
                    </li>
                    <li>
                    <div className="navbar-links">
                        <img src="src/assets/navbar/orders.png" alt="orders logo"/>
                        <div>Orders</div>
                    </div>
                    </li>
                    <li>
                    <div className="navbar-links">
                        <img src="src/assets/navbar/shipments.png" alt="Shipments logo"/>
                        <div>Shipments</div>
                    </div>
                    </li>
                    <li>
                    <div className="navbar-links">
                        <img src="src/assets/navbar/transactions.png" alt="transactions logo"/>
                        <div>Transactons</div>
                    </div>
                    </li>
                    <li>
                    <div className="navbar-links">
                        <img src="src/assets/navbar/settings.png" alt="settings logo"/>
                        <div>Settings</div>
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
import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar(props){
    const [loggedIn, setLoggedIn] = React.useState(true)
    const navigate = useNavigate()
    const userProfileElement =
    <div className="user-profile">
        <ul>
            {loggedIn && <li> Profile</li>}
            {loggedIn && <li> Settings</li>}
            {loggedIn ? <li> Logout</li> : <li onClick={(event) => {event.preventDefault();navigate("/customer/login")}}>Login</li>}
        </ul>
    </div>

    const customerNavbar = 
        <div className="navbar">
            <div className="navbar-logo">VISION</div>
            <nav className="navbar-links">
                <div>
                    <div className="inactive">Home</div>
                    <div>Products</div>
                </div>
                <div>
                    <NavLink className="logo search-btn"><img src="/src/assets/search.png" alt="Search" /></NavLink>
                    <NavLink className="logo cart-btn"><img src="/src/assets/cart.png" alt="Cart" /></NavLink>
                    <NavLink className="logo user-btn">
                        <img src="/src/assets/user.png" alt="User" />
                        {userProfileElement}
                    </NavLink>
                </div>
            </nav>
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
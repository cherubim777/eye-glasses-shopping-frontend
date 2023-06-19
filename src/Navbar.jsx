import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar(props){
    const [loggedIn, setLoggedIn] = React.useState(() => {
        return Boolean(localStorage.getItem('customerToken'));
      });

    React.useEffect(() => {
        setLoggedIn(Boolean(localStorage.getItem('customerToken')))
    },[localStorage.getItem('customerToken')])

    const navigate = useNavigate()
    function handleLogin(event) {
        event.preventDefault();
        navigate("/customer/login")
        
    }

    function handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem('customerToken');
        setLoggedIn(false);
    }

    const userProfileElement =
    <div className="user-profile">
        <ul>
            {loggedIn && <li> Profile</li>}
            {loggedIn && <li> Settings</li>}
            {loggedIn ? <li onClick={((event) => handleLogout(event)) }> Logout</li> : <li onClick={(event) => handleLogin(event)}>Login</li>}
        </ul>
    </div>

    const style = ({isActive}) => { return isActive ?  {fontWeight: "bold"} :  {opacity: 0.3}}
    const customerNavbar = 
        <div className="navbar">
            <NavLink to="/" className="navbar-logo">VISION</NavLink>
            <nav className="navbar-links">
                <div>
                    <NavLink style={style} to="/" className="inactive">Home</NavLink>
                    <NavLink style={style} to="/customer/allProducts">Products</NavLink>
                    <NavLink style={style} to={loggedIn ? "/customer/orders" : "/customer/login"}>Orders</NavLink>
                </div>
                <div>
                    <NavLink className="logo wishlist-btn" onClick={(event) => {event.preventDefault();navigate("/customer/wishlist")}}><img src="/src/assets/wishlist.png" alt="Search" /></NavLink>
                    <NavLink className="logo cart-btn" onClick={(event) => {event.preventDefault();navigate("/customer/cart")}}><img src="/src/assets/cart.png" alt="Cart" /></NavLink>
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
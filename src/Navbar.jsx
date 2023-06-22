import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar(props){

    const token = localStorage.getItem('customerToken')
    const [user,setUser] = React.useState({
        first_name: "",
        photo: null,
    })
    const [isCustomerLoggedIn, setIsCustomerLoggedIn] = React.useState(() => {
        return Boolean(localStorage.getItem('customerToken'));
      });

    const [isRetailerLoggedIn, setIsRetailerLoggedIn] = React.useState(() => {
        return Boolean(localStorage.getItem('retailerToken'));
      });
    
    React.useEffect(() => {
        setIsCustomerLoggedIn(Boolean(localStorage.getItem('customerToken')))
    },[token])


    React.useEffect(() => {
        fetch(`http://127.0.0.1:8000/user/getCustomerProfile`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          }
        })
        .then(response => response.json())
        .then(data => {
          setUser({
            first_name: data.first_name,
            photo: data.photo,
          });
          
        })
        .catch(error => {
          console.log(error);
        })  
    }, [])
      

    const navigate = useNavigate()
    function handleLogin(event) {
        event.preventDefault();
        navigate("/login")
        
    }

    function handleLogout(event, token) {
        event.preventDefault();
        localStorage.removeItem(token);
        if(token === "customerToken")
            setIsCustomerLoggedIn(false);
        else
            setIsRetailerLoggedIn(false);
        navigate("/")
    }

    const userProfileElement =
    <div className="user-profile">
        <ul>
            {isCustomerLoggedIn && <li onClick={(event) => {event.preventDefault();navigate("/customer/updateProfile")}}> Edit Profile</li>}
            {isCustomerLoggedIn ? <li onClick={((event) => handleLogout(event, "customerToken")) }> Logout</li> : <li onClick={(event) => handleLogin(event)}>Login</li>}
        </ul>
    </div>

    const style = ({isActive}) => { return isActive ?  {fontWeight: "bold"} :  {opacity: 0.3}}
    const customerNavbar = 
        <div className="navbar">
            <NavLink to="/" className="navbar-logo"><img src="/src/assets/fashion-glasses-icon.png" style={{width: "50px", marginRight: "5px"}}/>VISION</NavLink>
            <nav className="navbar-links">
                <div>
                    <NavLink style={style} to="/" className="inactive">Home</NavLink>
                    <NavLink style={style} to="/customer/products">Products</NavLink>
                    <NavLink style={style} to={isCustomerLoggedIn ? "/customer/orders" : "/login"}>Orders</NavLink>
                </div>
                <div>
                    <NavLink className="logo wishlist-btn" to={isCustomerLoggedIn ? "/customer/wishlist" : "/login"}><img src="/src/assets/wishlist.png" alt="Search" /></NavLink>
                    <NavLink className="logo cart-btn" to={isCustomerLoggedIn ? "/customer/cart" : "/login"} ><img src="/src/assets/cart.png" alt="Cart" /></NavLink>
                    <NavLink className="logo user-btn">
                        {isCustomerLoggedIn ? (
                            user.photo ? (
                                <img src={user.photo} style={{width: 40, borderRadius: 20}}/>
                            ) : (
                                <div className="profile-placeholder">{user.first_name && user.first_name[0].toUpperCase()}</div>
                            )
                        ) : (
                            <img src="/src/assets/user.png" alt="User" />
                        )}
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
                        <img src="/src/assets/navbar/settings.png" alt="settings logo"/>
                        <NavLink to="/retailer/settings" className="inactive">Settings</NavLink>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/logout.png" alt="logout logo"/>
                        <div onClick={(event) => handleLogout(event, "retailerToken")} className="inactive">Logout</div>
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
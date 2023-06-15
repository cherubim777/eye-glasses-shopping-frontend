import React from "react";

export default function Navbar(props){
    let classNameArray = ["", "", "", "", "", ""]
    switch(props.page){
        case "Dashboard":
            classNameArray[0] = "clicked"
            break
        case "Products":
            classNameArray[1] = "clicked"
            break
        case "Orders":
            classNameArray[2] = "clicked"
            break
        case "Transactions":
            classNameArray[3] = "clicked"
            break
        case "Shipment":
            classNameArray[4] = "clicked"
            break
        case "Settings":
            classNameArray[5] = "clicked"
            break


    }
    

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
                        <div className={classNameArray[0]}>Dashboard</div>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/products.png" alt="Products logo"/>
                        <div className={classNameArray[1]}>Products</div>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/orders.png" alt="orders logo"/>
                        <div className={classNameArray[2]}>Orders</div>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/shipments.png" alt="Shipments logo"/>
                        <div className={classNameArray[3]}>Shipments</div>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/transactions.png" alt="transactions logo"/>
                        <div className={classNameArray[4]}>Transactons</div>
                    </div>
                    </li>
                    <li>
                    <div className="retailer-navbar-links">
                        <img src="/src/assets/navbar/settings.png" alt="settings logo"/>
                        <div className={classNameArray[5]}>Settings</div>
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
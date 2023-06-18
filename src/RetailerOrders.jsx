import React from "react";
import Navbar from "./Navbar";
import Order from "./Order";
export default function RetailerOrders(){

    const token = localStorage.getItem("retailerToken")
    const [orders, setOrders] = React.useState([])
    
    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/order/getRetailerOrders/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }})
        .then((response) => response.json()) // return parsed JSON data
        .then((data) => {
          setOrders(data.orders)
        })
        .catch((error) => console.error(error));
      }, [])
    const orderElements = orders.map((order) => <Order for="retailer" order={order}/>)

    return (
        <div className="dashboard">
            <Navbar  user="retailer"/>
            <div className="cart">
            {orderElements}
            </div>
        </div>
    )
}
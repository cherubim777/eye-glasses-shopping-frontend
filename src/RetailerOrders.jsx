import React from "react";
import Navbar from "./Navbar";
import Order from "./Order";
export default function RetailerOrders(){

    const token = localStorage.getItem("retailerToken")
    const [orders, setOrders] = React.useState([])
    const [customOrders, setCustomOrders] = React.useState([])
    const [toggle, setToggle] = React.useState(false)

    const reloadOrders = () => {
      setToggle(state => !state)
    }
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

        fetch('http://127.0.0.1:8000/order/getRetailerCustomOrders/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }})
        .then((response) => response.json()) // return parsed JSON data
        .then((data) => {
          setCustomOrders(data.custom_orders)
        })
        .catch((error) => console.error(error));
      }, [toggle])
    const orderElements = orders.map((order) => <Order for="retailer" order={order} reloadOrders={reloadOrders}/>)
    const customOrderElements = customOrders.map((order) => <Order for="retailer" custom_order={order} reloadOrders={reloadOrders} custom={true}/>)

    return (
        <div className="dashboard">
            <Navbar  user="retailer"/>
            <div className="cart" style={{display: "flex", gap: 30}}>
              <div >
                <h2>Orders</h2>
                {orderElements}
              </div>
              <div>
                <h2>Custom Orders</h2>
              {customOrderElements}
              </div>
            </div>
        </div>
    )
}
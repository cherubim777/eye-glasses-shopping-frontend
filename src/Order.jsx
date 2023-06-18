import React from "react";
import Item from "./Item";

export default function Order(props){
    const token = localStorage.getItem('customerToken')
    
    const handleDelivery = () => {
        fetch(`http://127.0.0.1:8000/order/orderFulfilled/${props.order.order.id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            
        }).then((response) => response.json()) // return parsed JSON data
        .then((data) => {
          setOrders(data.orders)
        })
        .catch((error) => console.error(error));
    }

    const retailerOrder = 
              <div>
                <h2>Order {props.order.order.id}</h2>
                <p>Customer Name: {props.order.order_data.customer}</p>
                <p>Order Date: {props.order.order.createdAt}</p>
                <p>Order Status: {props.order.order.isDelivered ? "Delivered" :"Pending"}</p>
                <Item user="order" name={props.order.order_data.product_name} quantity={props.order.order_data.quantity} photo={props.order.order_data.photo}/>
            </div>
    
    const customerOrder = 
    <div>
            <Item user="order" name={props.order.order_data.product_name} quantity={props.order.order_data.quantity} photo={props.order.order_data.photo}/>
            <p>Store Name: {props.order.order_data.store_name}</p>
            <p>Order Date: {props.order.order.createdAt}</p>
            <button className="button-style theme-color" onClick={handleDelivery}>Delivered</button>
            

        </div>
            
    return (
        <>
            {props.for === "retailer" ? retailerOrder:customerOrder}
        </>
    
    )
}
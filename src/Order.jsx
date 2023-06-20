import React from "react";
import Item from "./Item";

export default function Order(props){
    const token = localStorage.getItem('customerToken')
    const retailerToken = localStorage.getItem('retailerToken');

    const handleDelivery = (endPoint, id, isReady) => {
        if(isReady === false){
            alert("The Order Is Not Ready Yet.")
            return
        }
        fetch(`http://127.0.0.1:8000/order/${endPoint}/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            
        }).then((response) => {props.reloadOrders()}) // return parsed JSON data
        .catch((error) => console.error(error));
    }

    const handleReady = () => {
        fetch(`http://127.0.0.1:8000/order/markReady/${props.custom_order.custom_order.id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${retailerToken}`
            },
            
        }).then(props.reloadOrders()) // return parsed JSON data
        .catch((error) => console.error(error));
        
    }

    const retailerOrder = 
    <>
    {
    !props.custom ?
        <>{props.order && 
            <div>
            <Item user="order" name={props.order.order_data.product_name} quantity={props.order.order_data.quantity} photo={props.order.order_data.photo}/>
            <p>Customer Name: {props.order.order_data.customer}</p>
            <p>Order Date: {props.order.order.createdAt}</p>
            <p>Order Status: {props.order.order.isDelivered ? "Delivered" : "Pending Delivery"}</p>
            {/* <button className="button-style theme-color" onClick={handleDelivery}>Delivered</button> */}
            <hr />
        </div>
        }</>
        
        :
        <>
            {props.for=="retailer" &&
              <div>
                <p>Customer Name: {props.custom_order.order_data.customer}</p>
                <p>Custom Order Date: {props.custom_order.custom_order.createdAt}</p>
                <p>Custom Order Status: {props.custom_order.custom_order.isDelivered ? "Delivered" : props.custom_order.custom_order.isReady ? "Ready for Delivery" : "Not Ready Yet"}</p>
                <button className="button-style theme-color" onClick={handleReady}>Ready</button>
                <hr />
            </div>}
        </>
    
}  

    </>
    
    const customerOrder = 
    <>
    {
    !props.custom ?
    <div>
            <Item user="order" name={props.order.order_data.product_name} quantity={props.order.order_data.quantity} photo={props.order.order_data.photo}/>
            <p>Store Name: {props.order.order_data.store_name}</p>
            <p>Order Date: {props.order.order.createdAt}</p>
            <p>Order Status: {props.order.order.isDelivered ? "Delivered" : "Pending Delivery"}</p>
            <button className="button-style theme-color" onClick={() => handleDelivery("orderFulfilled", props.order.order.id) }>Delivered</button>
            <hr />
        </div>
  :
    <div>
            <p>Store Name: {props.custom_order.order_data.store_name}</p>
            {props.custom_order.custom_order && <p>Custom Order Date: {props.custom_order.custom_order.createdAt}</p>}
            {props.custom_order.custom_order && <p>Custom Order Status: {props.custom_order.custom_order.isDelivered ? "Delivered" : props.custom_order.custom_order.isReady ? "Ready to be Delivered" : "Not Ready Yet" }</p>}
            <button className="button-style theme-color" onClick={() => handleDelivery("customOrderFulfilled", props.custom_order.custom_order.id, props.custom_order.custom_order.isReady)} >Delivered</button>
            <hr />
    </div>
}  

    </>
    return (
        <>
            {props.for === "retailer" ? retailerOrder: customerOrder}
        </>
    
    )
}
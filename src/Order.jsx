import React from "react";
import Item from "./Item";

export default function Order(props){
    return (
        <div>
                <h2>Order {props.order.order.id}</h2>
                <p>Customer Name: {props.order.order_data.customer}</p>
                <p>Order Date: {props.order.order.createdAt}</p>
                {/* <p>Order Number: {props.order.order.id}</p> */}
                <p>Order Status: {props.order.order.isDelivered ? "Delivered" :"Pending"}</p>
                <Item user="order" name={props.order.order_data.product_name} quantity={props.order.order_data.quantity} photo={props.order.order_data.photo}/>
            </div>
    )
}
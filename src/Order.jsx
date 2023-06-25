import { useState, useEffect } from "react";
import Item from "./Item";

export default function Order(props){
    const token = localStorage.getItem('customerToken')
    const retailerToken = localStorage.getItem('retailerToken');
    const [customProduct, setCustomProduct] = useState({})
    const [isDelivered, setIsDelivered] = useState(false)

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
            
        }).then((response) => {
            setIsDelivered(true)
            props.reloadOrders()
        }) // return parsed JSON data
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

    useEffect(() => {
        if(props.custom_order == null)
            return
        fetch(`http://127.0.0.1:8000/product/getProduct/${props.custom_order.custom_order.frame}/`)
          .then((response) => response.json())
          .then((data) => {
            setCustomProduct(data);
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
          });
      }, [props.custom_order]);

    const retailerOrder = 
    <>
    {
    !props.custom ?
        <>{props.order && 
            <div>
            <Item user="order" name={props.order.order_data.product_name} quantity={props.order.order_data.quantity} photo={props.order.order_data.photo}/>
            <p><b>Customer Name:</b> {props.order.order_data.customer}</p>
            <p><b>Order Date:</b> {props.order.order.createdAt}</p>
            <p><b>Delivery:</b> {props.order.order.delivery}</p>
            <p><b>Order Status:</b> {props.order.order.isDelivered ? "Delivered" : "Pending Delivery"}</p>
            {/* <button className="button-style theme-color" onClick={handleDelivery}>Delivered</button> */}
            <hr />
        </div>
        }</>
        
        :
        <>
            {props.for=="retailer" &&
              <div>
                <div style={{display: 'flex', gap: 25}}>
                <span >
                {customProduct.photo && <img src={customProduct.photo} width={150} alt="" />}&nbsp;<br />
                <b>Selected Frame: </b>{customProduct.name}
            </span>
            <br />
            <table border={1} cellPadding={5}>
                <tr>
                    <th></th>
                    <th>Sph</th>
                    <th>Cy</th>
                    <th>Ax</th>
                    <th>Pr</th>
                </tr>
                <tr>
                    <th>L</th>
                    <td>{props.custom_order.custom_order.leftSphere}</td>
                    <td>{props.custom_order.custom_order.leftCylinder}</td>
                    <td>{props.custom_order.custom_order.leftAxis}</td>
                    <td>{props.custom_order.custom_order.leftPrism}</td>
                </tr>
                <tr>
                    <th>R</th>
                    <td>{props.custom_order.custom_order.rightSphere}</td>
                    <td>{props.custom_order.custom_order.rightCylinder}</td>
                    <td>{props.custom_order.custom_order.rightAxis}</td>
                    <td>{props.custom_order.custom_order.rightPrism}</td>

                </tr>
            </table>
            </div>
                <p><b>Customer Name:</b> {props.custom_order.order_data.customer}</p>
                <p><b>Custom Order Date:</b> {props.custom_order.custom_order.createdAt}</p>
                <p><b>Delivery:</b> {props.custom_order.custom_order.delivery}</p>
                <p><b>Custom Order Status:</b> {props.custom_order.custom_order.isDelivered ? "Delivered" : props.custom_order.custom_order.isReady ? "Ready for Delivery" : "Not Ready Yet"}</p>
                <input type="checkbox" checked={props.custom_order.custom_order.isReady} disabled={props.custom_order.custom_order.isReady} onClick={handleReady} />Ready
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
            <p><b>Store Name:</b> {props.order.order_data.store_name}</p>
            <p><b>Order Date:</b> {props.order.order.createdAt}</p>
            <p><b>Delivery:</b> {props.order.order.delivery}</p>
            <p><b>Payment Method:</b> {props.order.order.paymentMethod}</p>
            <p><b>Order Status:</b> {props.order.order.isDelivered ? "Delivered" : "Pending Delivery"}</p>
            <input type="checkbox" checked={props.order.order.isDelivered} disabled={props.order.order.isDelivered}  onChange={() => handleDelivery("orderFulfilled", props.order.order.id) } />Delivered
            <hr />
        </div>
  :
    <>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 30}}>
            <div>
                <p><b>Store Name:</b> {props.custom_order.order_data.store_name}</p>
                {props.custom_order.custom_order && <p><b>Custom Order Date:</b> {props.custom_order.custom_order.createdAt}</p>}
                <p><b>Delivery:</b> {props.custom_order.custom_order.delivery}</p>
                <p><b>Payment Method:</b> {props.custom_order.custom_order.paymentMethod}</p>
                {props.custom_order.custom_order && <p><b>Custom Order Status:</b> {props.custom_order.custom_order.isDelivered ? "Delivered" : props.custom_order.custom_order.isReady ? "Ready to be Delivered" : "Not Ready Yet" }</p>}
                <input type="checkbox" checked={props.custom_order.custom_order.isDelivered} disabled={props.custom_order.custom_order.isDelivered} onChange={() => handleDelivery("customOrderFulfilled", props.custom_order.custom_order.id, props.custom_order.custom_order.isReady)} />Delivered
            </div>
            <div style={{width: 200,height: 200}}>
                {customProduct.photo && <img src={customProduct.photo} width={150} alt="" />} <br />
                {`Frame: ${customProduct.name}`}
            </div>
        </div>
        <hr />
    </>
}  

    </>
    return (
        <>
            {props.for === "retailer" ? retailerOrder: customerOrder}
        </>
    
    )
}
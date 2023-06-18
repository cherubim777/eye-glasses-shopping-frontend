import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import "./Cart.css"
import Order from "./Order";
export default function CustomerOrders(){
    const [orderedItems, setOrderedItems] = useState([]);
    const navigate = useNavigate()
    const token = localStorage.getItem("customerToken");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/order/getCustomerOrders/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        )
          .then((response) => response.json())
          .then((data) => {
            setOrderedItems(data.orders);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    return (
        
            <div className="cart">
                <p onClick={() => navigate(-1)} style={{cursor: "pointer"}}> &lt; Shopping Continue</p>
                <hr/>
                <p>Ordered Items</p>
                <p>You have {orderedItems.length} Ordered Items</p>
                <div className="cart-body">
                    <div className="cart-items">
                       {orderedItems.map((item) => {
                            return <Order for="customer" order={item} />
                       })}
                          
                    </div>
                </div>     
            </div>
            
        )
    
    
}
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import "./Cart.css"
import Order from "./Order";
import Navbar from "./Navbar";
export default function CustomerOrders(){
    const [orderedItems, setOrderedItems] = useState([]);
    const [orderedCustomItems,setOrderedCustomItems] = useState([]);
    const [toggle, setToggle] = useState(false)

    const reloadOrders = () => {
        
      setToggle(state => !state)
    }
    const navigate = useNavigate()
    const token = localStorage.getItem("customerToken");

    useEffect(() => {
        console.log('in effffect')
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
          fetch("http://127.0.0.1:8000/order/getCustomerCustomOrders/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.custom_orders)
            setOrderedCustomItems(data.custom_orders);
          })
          .catch((error) => {
            console.error(error);
          });

      }, [toggle])


    return (
            <>
            <Navbar user="customer"/>
            <div style={{display:"flex", flexWrap: 'wrap'}}>

            <div className="cart">
                <h2>Ordered Items</h2>
                <p>You have {orderedItems.length} Ordered Items</p>
                <hr />
                <div className="cart-body">
                    <div className="cart-items">
                       {orderedItems.map((item) => {
                           return <Order for="customer" order={item} reloadOrders={reloadOrders}/>
                        })}
                          
                    </div>
                </div>     
            </div>
            <div className="cart">
                <h2>Ordered Custom Items</h2>
                <p>You have {orderedCustomItems.length} Ordered Custom Items</p>
                <hr />
                <div className="cart-body">
                    <div className="cart-items">
                       {orderedCustomItems.map((item) => {
                           return <Order for="customer" custom_order={item} reloadOrders={reloadOrders} custom={true} />
                        })}
                          
                    </div>
                </div>     
            </div>
     </div>
            </>
        )
    
    
}
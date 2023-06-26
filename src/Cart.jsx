import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import "./Cart.css"

export default function Cart(){

    const [cartItems, setCartItems] = useState([]);
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [toggle, setToggle] = useState(false);

    const navigate = useNavigate()
    const token = localStorage.getItem('customerToken');
    useEffect(() => {
        fetch("http://127.0.0.1:8000/cart/carts", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        )
          .then((response) => response.json())
          .then((data) => {
            setCartItems(data.items);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [toggle]);

    useEffect(() => {
        const subtotal = cartItems.reduce((total, item) => total + (item.price*item.quantity), 0);
        setSubTotalPrice(subtotal);
      }, [cartItems]);

      const reloadCart = () => {
        setToggle(!toggle)
      }

      const handleCheckout = () => {
        if(cartItems.length === 0){
            alert("You Cart Is Empty");
            return
        }
        navigate("/customer/checkout", {state: { cartItems }})
      }

    return(
        <div className="cart" >
            <p onClick={() => navigate(-1)} style={{cursor: "pointer"}}>&lt; <b> Continue Shopping</b></p>
            <hr/>
            <h2>Shopping Cart</h2>
            <p>You have {cartItems.length} items in your cart</p>
            <div className="cart-body">
                <div className="cart-items">
                   {cartItems.map((item) => {
                        return <Item key={item.id} for="cart" reloadCart={reloadCart} user="customer" {...item} />
                   })}
                </div>
                <div className="price theme-color">
                    <div className="price-value">
                        <span>Subtotal</span>
                        <span>{`${subTotalPrice.toFixed(2)} ETB`}</span>
                    </div>
                    <div className="price-value">
                        <span>Shipping</span>
                        <span>{`${(subTotalPrice/200).toFixed(2)} ETB`}</span>
                    </div>
                    <div className="price-value">
                        <span>Total(Tax.incl)</span>
                        <span>{`${(subTotalPrice+subTotalPrice/200).toFixed(2)} ETB`}</span>
                    </div>
                    <div onClick={handleCheckout} style={{cursor: "pointer"}} className="check-out" >
                        <span>{`${(subTotalPrice+subTotalPrice/200).toFixed(2)} ETB`}</span>
                        <span>Checkout ➜</span>
                    </div>
                </div>

            </div>     
        
        </div>
        
    )
}
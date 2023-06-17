import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import "./Cart.css"

export default function Cart(){

    const [cartItems, setCartItems] = useState([]);
    const [subTotalPrice, setSubTotalPrice] = useState(0);

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://127.0.0.1:8000/cart/carts")
          .then((response) => response.json())
          .then((data) => {
            setCartItems(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    useEffect(() => {
        const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
        setSubTotalPrice(subtotal);
      }, [cartItems]);

    return(
        <div className="cart">
            <p onClick={() => navigate(-1)} style={{cursor: "pointer"}}> &lt; Shopping Continue</p>
            <hr/>
            <p>Shopping Cart</p>
            <p>You have {cartItems.length} items in your cart</p>
            <div className="cart-body">
                <div className="cart-items">
                    {/* <Item user="customer"/>
                    <Item user="customer"/>
                    <Item user="customer"/> */}
                   {cartItems.map((item) => {
                        return <Item key={item.id} user="customer" {...item} />
                   })}
                   
                    
                </div>
                <div className="price theme-color">
                    <div className="price-value">
                        <span>Subtotal</span>
                        <span>{`${subTotalPrice} ETB`}</span>
                    </div>
                    <div className="price-value">
                        <span>Shipping</span>
                        <span>{`${subTotalPrice/200} ETB`}</span>
                    </div>
                    <div className="price-value">
                        <span>Total(Tax.incl)</span>
                        <span>{`${subTotalPrice+subTotalPrice/200} ETB`}</span>
                    </div>
                    <div onClick={() => navigate("/customer/checkout", {state: { cartItems }})} style={{cursor: "pointer"}} className="check-out" >
                        <span>{`${subTotalPrice+subTotalPrice/200} ETB`}</span>
                        <span>Checkout ➜</span>
                    </div>
                </div>

            </div>     
        
        </div>
        
    )
}
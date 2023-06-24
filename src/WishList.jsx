import {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Notification from "./Notification";

import Item from "./Item";

export default function WishList(){
    const [wishListItems,setWishListItems] = useState([]);
    
    const navigate = useNavigate()
    const token = localStorage.getItem('customerToken');
    const [toggle, setToggle] = useState(false);
    const [showNotification, setShowNotification] = useState(false)

    const reloadWishlist = () => {
        setToggle(!toggle)
      }
    useEffect(() => {
        if(!token) return
        
        fetch("http://127.0.0.1:8000/wishlist/wishlist", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        )
          .then((response) => response.json())
          .then((data) => {
              setWishListItems(data);
              console.log("-hey" + JSON.stringify(wishListItems))
          })
          .catch((error) => {
            console.error(error);
          });
      }, [toggle]);

    return(
        <div className="cart">
            <p onClick={() => navigate(-1)} style={{cursor: "pointer"}}> &lt; Shopping Continue</p>
            <hr/>
            <p>Shopping Wishlist</p>
            <p>You have {wishListItems.length} {wishListItems.length ==1?"item":"items"} in your wish List</p>
            <div className="cart-body">
                <div className="cart-items">
                    {wishListItems.map((item) => {
                        return <div style={{display: 'flex', alignItems: 'center', gap: 50}}>
                            <Item key={item.id} user="customer" reloadWishlist={reloadWishlist} setShowNotification={setShowNotification} for="wishlist" product_id={item.product_id} />
                        </div>
                   })}
                   {showNotification && <Notification message={"Added Item to Cart"} onClose={() => setShowNotification(false)} color="green"/>}
                </div>
                
            </div>     
        
        </div>
        
    )
}
import {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Item from "./Item";

export default function WishList(){
    const [wishListItems,setWishListItems] = useState([]);
    
    const navigate = useNavigate()
    const token = localStorage.getItem('CustomerToken');
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/wishList/wishLists", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        )
          .then((response) => response.json())
          .then((data) => {
                setWishListItems(data.items);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    return(
        <div className="cart">
            <p onClick={() => navigate(-1)} style={{cursor: "pointer"}}> &lt; Shopping Continue</p>
            <hr/>
            <p>Shopping Wishlist</p>
            <p>You have {wishListItems.length} {wishListItems.length ==1?"item":"items"} in your wish List</p>
            <div className="cart-body">
                <div className="cart-items">
                    {wishListItems.map((item) => {
                        return <><Item key={item.id} user="customer" {...item} />add to cart</>
                   })}
                </div>
                
            </div>     
        
        </div>
        
    )
}
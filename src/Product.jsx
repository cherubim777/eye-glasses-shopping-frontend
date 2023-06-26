import React,{useState,useEffect} from "react";
import ReactStars from "react-rating-stars-component"
import { useNavigate, Link } from "react-router-dom"
import Notification from "./Notification";

export default function Product(props){
    const navigate = useNavigate()
    const token = localStorage.getItem('customerToken');
    const [showNotification, setShowNotification] = React.useState(false)
    const [liked, setLiked] = React.useState(false)

    useEffect(() => {
      if(token) return 
      const isLiked = props.wishListItems.some(item => item.product_id === props.product.id);
      console.log("liked: " + isLiked);
      console.log(props.wishListItems)
      setLiked(isLiked);
    },[props.wishListItems])
  
    const addToCart = () => {

        fetch('http://127.0.0.1:8000/cart/carts/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({"cart": 1, "quantity": 1, "product_id": props.product.id})
          })
          .then(response => {
            if (response.status === 201) {
              setShowNotification(true);
            }
            else if (response.status === 401) {
                navigate('/login')
      }
          })
          .catch(error => {
            // Handle any errors that occurred during the request
          });          
    }

    const addToWishlist = () => {
      if (liked){
        fetch('http://127.0.0.1:8000/wishlist/wishlist/' + props.product.id, {
               method: 'DELETE',
               headers: {
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${token}`
               }
            })
            .then((response) => {
              setLiked(!liked)
            })
            .catch((error) => console.error(error));
      }
      else{
        fetch('http://127.0.0.1:8000/wishlist/wishlist/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({"wishlist": 1, "product_id": props.product.id,"product":props.product.id})
          })
          .then(response => {
            if (response.status === 201) {
              console.log(props.product.id)
              setLiked(!liked)
            }
            else if (response.status === 401) {
                navigate('/login')
      }
          })
          .catch(error => {
            // Handle any errors that occurred during the request
          });
        }
  }


    const handlePurchase = () => {
      navigate("/customer/checkout", {state: {cartItem: [{"product_id": props.product.id}]}})
    }
    return (
      <div className="product">
            {props.user === "customer" && 
              <div className="fav-btn link-style" onClick={addToWishlist}> 
                <img src= {`/src/assets/favorite-${liked ? "checked" : "unchecked"}.png`} alt="fav" />
              </div>
            }
              <Link to={ `/customer/productDetails/${props.product.id}`} state={{id: props.product.id,user:props.user}}>
            <img style={{objectFit: "cover", objectPosition: "center"}}width={280} height={190} className="product-image" src={props.product.photo} alt={props.product.name} />
            <div className="product-info">
                <span className="product-name">{props.product.name}</span>
                <span className="product-price">{`${props.product.price} ETB`}</span>
            </div>
            <ReactStars isHalf={true} edit={false} value={parseFloat(props.product.rating)}/>
                  {showNotification && <Notification message={"Added Item to Cart"} onClose={() => setShowNotification(false)} color="green"/>}
        </Link>
                <div className="product-buttons">
                  {props.user === "customer" ?
                    <>
                    <button className="product-buy theme-color button-style" onClick={handlePurchase}>Buy Now</button>
                    <button onClick={addToCart} className="product-add theme-color button-style">Add to cart</button></>
                    :
                    <>
                    <button className="product-edit theme-color button-style" onClick={() => navigate("/retailer/updateProduct", {state: {id: props.product.id}})}>Edit</button>
                    </>
                  }
                </div>
            </div>
    )
}
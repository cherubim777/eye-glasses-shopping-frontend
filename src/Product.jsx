import React from "react";
import ReactStars from "react-rating-stars-component"
import { useNavigate, Link } from "react-router-dom"
import Notification from "./Notification";

export default function Product(props){
    const navigate = useNavigate()
    const token = localStorage.getItem('customerToken');
    const [showNotification, setShowNotification] = React.useState(false)

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
              // alert('Added Item to Cart')
              setShowNotification(true);
      }
          })
          .catch(error => {
            // Handle any errors that occurred during the request
          });
    }

    const handlePurchase = () => {
      navigate("/customer/checkout", {state: {cartItem: [{"product_id": props.product.id}]}})
    }
    return (
      <div className="product">
              <Link to={props.user === "customer" && `/customer/productDetails/${props.product.id}`} state={{id: props.product.id}}>
            <img style={{objectFit: "cover", objectPosition: "center"}}width={280} height={190} className="product-image" src={props.product.photo} alt={props.product.name} />
            <div className="product-info">
                <span className="product-name">{props.product.name}</span>
                <span className="product-price">{`${props.product.price} ETB`}</span>
            </div>
            <ReactStars isHalf={true} edit={false} value={parseFloat(props.product.rating)}/>
        </Link>
                  {showNotification && <Notification message={"Added Item to Cart"} onClose={setShowNotification(false)} color="green"/>}
                <div className="product-buttons">
                  {props.user === "customer" ?
                    <>
                    <button className="product-buy theme-color button-style" onClick={handlePurchase}>Buy Now</button>
                    <button onClick={addToCart} className="product-add theme-color button-style">Add to cart</button></>
                    :
                    <>
                    <button className="product-buy theme-color button-style" onClick={() => navigate("/retailer/updateProduct", {state: {id: props.product.id}})}>Edit</button>
                    <button  className="product-add theme-color button-style">Remove</button>
                    </>
                  }
                </div>
            </div>
    )
}
import {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserInput from './UserInput';
import Item from './Item';

export default function Checkout(){

    const token = localStorage.getItem('customerToken');
    const location = useLocation();
    const navigate = useNavigate();
    const cartItem = location.state.cartItem;
    const cartItems = location.state.cartItems;
    const [checkoutFields, setCheckoutFields] = useState({
        full_name: '',
        phone_number: '',
        local_address: '',
        city: '',
        payment_method: '',
        delivery: '',
      });

      let userProfile;
      useEffect(() => {
        fetch('http://127.0.0.1:8000/user/getCustomerProfile/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }})
        .then((response) => response.json()) // return parsed JSON data
        .then((data) => {
          setCheckoutFields(prevFields => (
            {
                ...prevFields, 
                full_name: `${data.first_name} ${data.last_name}`,
                phone_number: data.phone_number,
                local_address: data.local_address,
                city: data.city
            }
          ))
        })
        .catch((error) => console.error(error));
      }, [])
    
    const handleCheckoutChange = (event) => {
        const { name, value } = event.target;
        setCheckoutFields({ ...checkoutFields, [name]: value });
      };

    const handlePlaceOrder = (event) => {
      event.preventDefault();
        cartItem ?
        (fetch('http://127.0.0.1:8000/order/placeOrder/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                "product_id": cartItem[0].product_id, 
                "quantity": 1, 
                "shipping_address": {"local_address": checkoutFields.local_address, "city": checkoutFields.city},
                "payment_method": checkoutFields.payment_method,
                "delivery": checkoutFields.delivery
            })
          
          })
          .then(response => response.json())
          .then(data => {
            // Handle the response data here
            navigate('/')
          })
          .catch(error => {
            alert(error)
            // Handle any errors that occurred during the request
          }))
        :
        (fetch('http://127.0.0.1:8000/order/placeCartOrder/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                "shipping_address": {"local_address": checkoutFields.local_address, "city": checkoutFields.city},
                "payment_method": checkoutFields.payment_method,
                "delivery": checkoutFields.delivery
            })
          
          })
          .then(response => response.json())
          .then(data => {
            // Handle the response data here
            navigate('/')
            fetch('http://127.0.0.1:8000/cart/clearCart/', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${token}`
               }
            })
            .then((response) => response.json())
            .catch((error) => console.error(error));
          })
          .catch(error => {
            // Handle any errors that occurred during the request
          }))
    }

    return (
        <div className='login-form'>
            <form onSubmit={(event) => handlePlaceOrder(event)}>
              <h1>Checkout</h1>
              <h2>1. Shipping Address</h2>
              <UserInput type="text" title="Full name" name="full_name" value={checkoutFields.full_name}  onChange={handleCheckoutChange} readOnly={true}/>
              <UserInput type="number" title="phone number" name="phone_number" value={checkoutFields.phone_number}  onChange={handleCheckoutChange} readOnly={true}/>
              <UserInput type="text" title="local address" name="local_address" value={checkoutFields.local_address}  onChange={handleCheckoutChange}/>
              <UserInput type="text" title="city" name="city" value={checkoutFields.city}  onChange={handleCheckoutChange}/>
              <h2>2. Payment Method</h2>
              <input type="radio" required name="payment_method" value="telebirr" checked={checkoutFields.payment_method ==="telebirr"} onChange={handleCheckoutChange}/> Tele Birr
              <input type="radio" name="payment_method" value="cbebirr" checked={checkoutFields.payment_method ==="cbebirr"} onChange={handleCheckoutChange}/> CBE Birr
              <input type="radio" name="payment_method" value="amole" checked={checkoutFields.payment_method ==="amole"} onChange={handleCheckoutChange}/> Amole
              
              <h2>3. Items and Shipping</h2>
              <h3>Delivery Method</h3>
              <br />
              <input type="radio" required name="delivery" value="GO Delivery Ethiopia" checked={checkoutFields.delivery === "GO Delivery Ethiopia"} onChange={handleCheckoutChange}/>
              <label>GO Delivery Ethiopia</label>
              <br />
              <input type="radio" name="delivery" value="WeDeliver" checked={checkoutFields.delivery === "WeDeliver"} onChange={handleCheckoutChange}/>
              <label>WeDeliver</label>
              <br />
              <input type="radio" name="delivery" value="Eshi Express" checked={checkoutFields.delivery === "Eshi Express"} onChange={handleCheckoutChange}/>
              <label>Eshi Express</label>
              <br />
              <input type="radio" name="delivery" value="Awra Delivery" checked={checkoutFields.delivery === "Awra Delivery"} onChange={handleCheckoutChange}/>
              <label>Awra Delivery</label>
              <br /><br />
              {(cartItem ? cartItem: cartItems).map((item) => {
                  console.log("item: " + JSON.stringify(item))
                          return <Item key={item.id} user="customer" for="checkout" {...item} />
                    })}

              <button className='button-style theme-color'>Place Order</button>
            </form>
        </div>
    )
}
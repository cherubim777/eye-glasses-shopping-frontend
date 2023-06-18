import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import UserInput from './UserInput';
import Item from './Item';

export default function Checkout(){

    const location = useLocation();
    const cartItems = location.state.cartItems;
    const [checkoutFields, setCheckoutFields] = useState({
        full_name: '',
        phone_number: '',
        local_address: '',
        subcity: '',
        city: '',
        payment_method: '',
      });
    const handleCheckoutChange = (event) => {
        const { name, value } = event.target;
        setCheckoutFields({ ...checkoutFields, [name]: value });
      };
    return (
        <div className='login-form'>
            <h1>Checkout</h1>
            <h2>1. Shipping Address</h2>
            <UserInput type="text" title="Full name" name="full_name" value={checkoutFields.first_name}  onChange={handleCheckoutChange}/>
            <UserInput type="number" title="phone number" name="phone_number" value={checkoutFields.phone_number}  onChange={handleCheckoutChange}/>
            <UserInput type="text" title="local address" name="local_address" value={checkoutFields.local_address}  onChange={handleCheckoutChange}/>
            <UserInput type="text" title="subcity" name="subcity" value={checkoutFields.subcity}  onChange={handleCheckoutChange}/>
            <UserInput type="text" title="city" name="city" value={checkoutFields.city}  onChange={handleCheckoutChange}/>
            <h2>2. Payment Method</h2>
            <input type="radio" name="payment_method" value="telebirr" checked={checkoutFields.payment_method ==="telebirr"} onChange={handleCheckoutChange}/> Tele Birr
            <input type="radio" name="payment_method" value="cbebirr" checked={checkoutFields.payment_method ==="cbebirr"} onChange={handleCheckoutChange}/> CBE Birr
            <input type="radio" name="payment_method" value="amole" checked={checkoutFields.payment_method ==="amole"} onChange={handleCheckoutChange}/> Amole
            <h2>3. Items and Shipping</h2>
            {cartItems.map((item) => {
                        return <Item key={item.id} user="customer" product={item} />
                   })}
            <button className='button-style theme-color'>Place Order</button>
        </div>
    )
}
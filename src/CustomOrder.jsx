import  React,{ useState ,useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserInput from './UserInput';

export default function CustomOrder() {

  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState({
    right_sphere: '',
    left_sphere: '',
    right_cylinder: '',
    left_cylinder: '',
    right_axis: '',
    left_axis: '',
    right_prism: '',
    left_prism: '',
    payment_method: '',
    retailer: location.state.retailer.user,
    frame: location.state.product.id,
    local_address: '',
    city: '',
    delivery:'',
  });
  const authToken = localStorage.getItem('customerToken');

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/order/placeCustomOrder/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({...formData, shipping_address: {address: formData.local_address, city: formData.city}})
    })
      .then((response) => {
        if (response.status === 201) {
          alert('Custom order saved successfully!');
          navigate(-2)
        } else {
          alert('Failed to save custom order. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error saving custom order:', error);
        alert('An error occurred while saving the custom order. Please try again.');
      });
  };

  return (
    <div className="login-form">
      <h1>Custom Order</h1>
      <form onSubmit={handleSubmit}>
      <UserInput type="number" title="Right Sphere" name="right_sphere" value={formData.right_sphere} onChange={handleFieldChange} />
      <UserInput type="number" title="Left Sphere" name="left_sphere" value={formData.left_sphere} onChange={handleFieldChange} />
      <UserInput type="number" title="Right Cylinder" name="right_cylinder" value={formData.right_cylinder} onChange={handleFieldChange} />
      <UserInput type="number" title="Left Cylinder" name="left_cylinder" value={formData.left_cylinder} onChange={handleFieldChange} />
      <UserInput type="number" title="Right Axis" name="right_axis" value={formData.right_axis} onChange={handleFieldChange} />
      <UserInput type="number" title="Left Axis" name="left_axis" value={formData.left_axis} onChange={handleFieldChange} />
      <UserInput type="number" title="Right Prism" name="right_prism" value={formData.right_prism} onChange={handleFieldChange} />
      <UserInput type="number" title="Left Prism" name="left_prism" value={formData.left_prism} onChange={handleFieldChange} />
      <label>
        Payment Method
        <br/>
        <input type="radio" required name="payment_method" value="telebirr" checked={formData.payment_method === 'telebirr'} onChange={handleFieldChange} /> TeleBirr
        <input type="radio" name="payment_method" value="cbebirr" checked={formData.payment_method === 'cbebirr'} onChange={handleFieldChange} /> CBEBirr
        <input type="radio" name="payment_method" value="amole" checked={formData.payment_method === 'amole'} onChange={handleFieldChange} /> Amole
      </label><br />
      <label><br />
      <div>Shipping Address</div>
              <UserInput type="text" title="local address" name="local_address" value={formData.local_address}  onChange={handleFieldChange}/>
              <UserInput type="text" title="city" name="city" value={formData.city}  onChange={handleFieldChange}/>
      Delivery Method
  <br />
  <input type="radio" required name="delivery" value="GO Delivery Ethiopia" checked={formData.delivery === "GO Delivery Ethiopia"} onChange={handleFieldChange}/>
  <label>GO Delivery Ethiopia</label>
  <br />
  <input type="radio" name="delivery" value="WeDeliver" checked={formData.delivery === "WeDeliver"} onChange={handleFieldChange}/>
  <label>WeDeliver</label>
  <br />
  <input type="radio" name="delivery" value="Eshi Express" checked={formData.delivery === "Eshi Express"} onChange={handleFieldChange}/>
  <label>Eshi Express</label>
  <br />
  <input type="radio" name="delivery" value="Awra Delivery" checked={formData.delivery === "Awra Delivery"} onChange={handleFieldChange}/>
  <label>Awra Delivery</label>
</label>
<label><br/><br />
  <UserInput type="text" readOnly={true} title="Retailer" value={location.state.retailer.store_name}/>
</label><br />
      <button type="submit" className="button-style theme-color login-btn">Submit</button>

        </form>
    </div>
  );
}


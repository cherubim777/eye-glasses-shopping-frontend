import  React,{ useState } from 'react';
import UserInput from './UserInput';

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    rightSphere: '',
    leftSphere: '',
    rightCylinder: '',
    leftCylinder: '',
    rightAxis: '',
    leftAxis: '',
    rightPrism: '',
    leftPrism: '',
    paymentMethod: ''
  });

  const authToken = localStorage.getItem('authToken');

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/custom-order/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.status === 201) {
          alert('Custom order saved successfully!');
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
        <UserInput type="number" title="Right Sphere" name="rightSphere" value={formData.rightSphere} onChange={handleFieldChange} />
        <UserInput type="number" title="Left Sphere" name="leftSphere" value={formData.leftSphere} onChange={handleFieldChange} />
        <UserInput type="number" title="Right Cylinder" name="rightCylinder" value={formData.rightCylinder} onChange={handleFieldChange} />
        <UserInput type="number" title="Left Cylinder" name="leftCylinder" value={formData.leftCylinder} onChange={handleFieldChange} />
        <UserInput type="number" title="Right Axis" name="rightAxis" value={formData.rightAxis} onChange={handleFieldChange} />
        <UserInput type="number" title="Left Axis" name="leftAxis" value={formData.leftAxis} onChange={handleFieldChange} />
        <UserInput type="number" title="Right Prism" name="rightPrism" value={formData.rightPrism} onChange={handleFieldChange} />
        <UserInput type="number" title="Left Prism" name="leftPrism" value={formData.leftPrism} onChange={handleFieldChange} />
        <label>
            Payment Method
            <br/>
            <input type="radio" name="paymentMethod" value="creditCard" checked={formData.paymentMethod === 'creditCard'} onChange={handleFieldChange} /> Credit Card
            <input type="radio" name="paymentMethod" value="paypal" checked={formData.paymentMethod === 'paypal'} onChange={handleFieldChange} /> PayPal
            <input type="radio" name="paymentMethod" value="cashOnDelivery" checked={formData.paymentMethod === 'cashOnDelivery'} onChange={handleFieldChange} /> Cash on Delivery
        </label>     
        <button type="submit" className="button-style theme-color login-btn">Submit</button>
      </form>
    </div>
  );
}


import React, { useState } from 'react';
import Navbar from './Navbar';
import './ContactUs.css';

export default function  ContactUs(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name}`;
    const body = `From: ${email}\n\n${message}`;
    const mailtoLink = `mailto:visioneyeglassshopping@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setShowSuccessMessage(true);
  };

  return (
    <div>
      <Navbar user="customer" />
      <div className="contact-us">
        <h1>Contact Us</h1>
      </div>
      <div className="content">
        <p>If you have any questions or concerns, please don't hesitate to contact us. You can reach us by email, phone, or through our online form below.</p>
        <h2>Our Contact Information</h2>
        <ul>
          <li>Email: visioneyeglassshopping@gmail.com</li>
          <li>Phone: +251-943-102-482</li>
          <li>Address: 123 Main Street, ADDIS ABEBA ETHIOPIA</li>
        </ul>
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button className="button-style theme-color" type="submit">Send</button>
        </form>
      </div>
      {showSuccessMessage && <div>Thank you for your message!</div>}
    </div>
  );
};
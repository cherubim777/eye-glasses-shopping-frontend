import React from 'react';
import Navbar from './Navbar';
import "./AboutUs.css"

const AboutUs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar user="customer"  />
      <div className="aboutus">
        <h1>About Us</h1>
      </div>
      <div className="content">
        <p>We are a team of passionate developers who created this eyeglass shopping site. Our goal is to provide you with the best online shopping experience for all your eyewear needs.</p>
        <p>Our team consists of experienced professionals in web development and design, who are dedicated to building a user-friendly and visually appealing platform for our customers.</p>
        <p>We believe that technology can make a difference in people's lives, and we strive to leverage it to improve the way people shop for eyewear.</p>
        <p>Thank you for choosing our site for your eyewear needs. We hope you enjoy shopping with us!</p>
        <p>Sincerely,</p>
        <p>The Eyeglass Shopping Site Development Team</p>
      </div>
    </div>
  );
};

export default AboutUs;
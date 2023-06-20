import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://127.0.0.1:8000/product/getFeatured/')
      .then((response) => response.json())
      .then((data) => 
      {
        setFeaturedProducts(data)
        console.log(data)
    })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/product/getLatest/')
      .then((response) => response.json())
      .then((data) => 
      {
        setNewProducts(data)
        console.log(data)
    })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/product/getPopular/')
      .then((response) => response.json())
      .then((data) => 
      {
        setPopularProducts(data)
        console.log(data)
    })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar user="customer" />
      <div className="intro">
        <div className="intro-text">
          <div className="intro-text-title">Vision care for you</div>
          <div className="intro-text-description">
            Discover a range of stylish and affordable eyeglasses that provide the vision care you deserve, all from the comfort of your own home.
          </div>
          <button onClick={() => navigate("/customer/allProducts")} className="theme-color button-style">Explore</button>
        </div>
        <div className="intro-images">
          <div className="intro-images-vertical">
            <div className="intro-image-n">
              <div className="intro-image-tag theme-color">New</div>
            </div>
            <div className="intro-image-p">
              <div className="intro-image-tag theme-color">Popular</div>
            </div>
          </div>
          <div className="intro-image-f">
            <div className="intro-image-tag theme-color">Featured</div>
          </div>
        </div>
      </div>

      {featuredProducts.length > 0 && <Products category="Featured" user="customer" products={featuredProducts} />}
      {newProducts.length > 0 && <Products category="New" user="customer" products={newProducts} />}
      {newProducts.length > 0 && <Products category="Popular" user="customer" products={popularProducts} />}

      <Footer />
    </>
  );
}
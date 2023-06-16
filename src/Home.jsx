import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
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
          <button className="theme-color button-style">Explore</button>
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

      <Products category="Featured" products={products.filter((product) => product.category === 'Featured')} />
      <Products category="New" products={products.filter((product) => product.category === 'New')} />
      <Products category="Popular" products={products.filter((product) => product.category === 'Popular')} />

      <Footer />
    </>
  );
}
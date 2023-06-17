import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';
import UserInput from './UserInput';

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:8000/product/getProducts/')
      .then((response) => response.json()) // return parsed JSON data
      .then((data) => {
        console.log(data); // log the parsed JSON data
        setProducts(data); // set the products state variable
        setFilteredProducts(data)
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query == '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };


 
  return (
    <>
      <Navbar user="customer" />
      <div className="login-form">
        <UserInput
          type="text"
          placeholder="Search for a product"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <Products products={filteredProducts}  user="customer"/>
      <Footer />
    </>
  );
}
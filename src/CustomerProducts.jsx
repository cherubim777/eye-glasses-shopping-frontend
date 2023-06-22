import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';
import UserInput from './UserInput';
import FilterBar from './FilterBar';
import './FilterBar.css';


export default function CustomerProducts() {
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


  };


 
  return (
    <>
      <Navbar user="customer" />
      <div style={{textAlign: "center"}}>
      <div style={{display: "flex",justifyContent: "left", width: "100%"}}>
      <table>
        <tr>
          <td colSpan={2}>
          <UserInput
            className="search-bar"
            type="text"
            placeholder="Search for a product"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          </td>
        </tr>
        <tr>
          <td valign='top'>
        <FilterBar query={searchQuery} products={products} setFilteredProducts={setFilteredProducts}/>
        </td>
        <td>
        <div className='products-body'>
          
          <div>
          <Products products={filteredProducts} className="product-container-expanded" user="customer"/>
          </div>
          </div>
          </td>
          </tr>
        </table>
      </div>
      </div>
      <Footer />
    </>
  );
}
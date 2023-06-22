import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Products from "./Products";
import UserInput from "./UserInput";
export default function RetailerProducts(){
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const  token = localStorage.getItem('retailerToken')
  useEffect(() => {
    fetch('http://127.0.0.1:8000/product/getRetailerProducts/',{
       headers: {
        Authorization: `Bearer ${token}`,
       } 
    })
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
    <div className="dashboard" style={{backgroundColor: "white"}}>
      <Navbar user="retailer" />
      <div style={{textAlign: "center"}}>
      <div>
        <UserInput
        className="search-bar"
          type="text"
          placeholder="Search for a product"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="button-style theme-color" onClick={() => navigate("/retailer/addProduct")}>+ Add Product</button>
      </div>
      <Products products={filteredProducts} className="product-container-expanded" user="retailer"/>
      </div>
    </div>
  );
}
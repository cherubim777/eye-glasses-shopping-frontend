import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import SubmitReview from './SubmitReview';
import ReactStars from 'react-rating-stars-component';
import ProductReviews from './ProductReviews';
import Navbar from './Navbar';
import {useNavigate} from 'react-router-dom';
export default function ProductDetails(){
    const navigate = useNavigate()
    const location = useLocation()
    const [product, setProduct] = useState({})
    const [retailer,setRetailer] = useState({})
    useEffect(() => {
        fetch('http://127.0.0.1:8000/product/getProduct/' + location.state.id)
          .then((response) => response.json()) // return parsed JSON data
          .then((data) => {
            console.log(data); // log the parsed JSON data
            setProduct(data) // set the products state variable
            fetch('http://127.0.0.1:8000/user/getRetailerProfile/' + data.retailer)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setRetailer(data);
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    }, []);

    return (
        <div className='product-detail'>
          <Navbar user="customer"/>
          <table cellSpacing={50}>
            <tr>
              <td>
                <img src={product.photo} width={700} height={450} style={{objectFit :"cover", objectPosition: "center"}} alt="" />
              </td>
              <td valign='top' width={400}>
                <h2>{product.name}</h2>
                {product.rating && <ReactStars value={parseFloat(product.rating)}
                    edit={false}
                    isHalf={true}
                />}
               <div>{`Description: ${product.description}`}</div>
               <div>{`Retailer: ${retailer.store_name}`}</div>

                <div>{`Description: ${product.description}`}</div>
                <div>{`Brand: ${product.brand}`}</div>
                <div>{`Category: ${product.category}`}</div>
                <div>{`Gender Category: ${
                  product.gender_category == 'M' ? 'Male' :
                  product.gender_category == 'F' ? 'Female' :
                  product.gender_category == 'U' ? 'Unisex' :
                  product.gender_category
                }`}
                </div>
                <div>
                  {`Age Group: ${
                  product.age_group == 'K' ? 'Kids' :
                  product.age_group == 'T' ? 'Teens' :
                  product.age_group == 'A' ? 'Adults' :
                  product.age_group == 'S' ? 'Seniors' :
                  product.age_group
                }`}
                </div>
                <br />
                <div>{`Price: ${product.price}`}</div>
                <div>{`Status: ${product.quantity > 0 ? "In Stock" : "Out of Stock"}`}</div>
                <br />
                <button className='button-style theme-color'>Add to Cart</button>
                <button className="button-style theme-color" onClick={() => navigate("/customer/customOrder", {state: {retailer: retailer, product: product}})}>+ Add Custom Lenses</button>

              </td>
            </tr>
            
            <tr>
              <td colSpan={2}>
            <h1>Reviews</h1>
            <SubmitReview id={product.id}/>
            {product.id && <ProductReviews id={product.id} />}
            </td>
            </tr>
            </table>
        </div>
    )
}
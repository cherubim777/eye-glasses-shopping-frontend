import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import SubmitReview from './SubmitReview';
import ReactStars from 'react-rating-stars-component';
import ProductReviews from './ProductReviews';

export default function ProductDetails(){

    const location = useLocation()
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/product/getProduct/' + location.state.id)
          .then((response) => response.json()) // return parsed JSON data
          .then((data) => {
            console.log(data); // log the parsed JSON data
            setProduct(data) // set the products state variable
          })
          .catch((error) => console.error(error));
      }, []);

    return (
        <div className='product-detail'>
            <div className='product-detail-image'>
                <img src={product.photo} alt="" />
            </div>
            <div>
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>{product.price}</div>
                <div>{product.quantity}</div>
                <div>{product.brand}</div>
                <div>{product.category}</div>
                <div>{product.gender_category}</div>
                <div>{product.age_group}</div>
                {product.rating && <ReactStars value={parseFloat(product.rating)}
                    edit={false}
                    isHalf={true}
                />}
            </div>
            <h1>Reviews</h1>
            <SubmitReview id={product.id}/>
            {product.id && <ProductReviews id={product.id} />}
        </div>
    )
}
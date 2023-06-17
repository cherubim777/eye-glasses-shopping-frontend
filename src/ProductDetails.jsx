import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function ProductDetails(){

    let product;
    const { id } = useParams()
    useEffect(() => {
        fetch('http://127.0.0.1:8000/product/getProducts/' + id)
          .then((response) => response.json()) // return parsed JSON data
          .then((data) => {
            console.log(data); // log the parsed JSON data
            product = data // set the products state variable
            
          })
          .catch((error) => console.error(error));
      }, []);

    return (
        <div className='product-detail'>
            <div className='product-detail-image'>
                <img src="/src/assets/sample-eyeglass1.png" alt="" />
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
            </div>
        </div>
    )
}
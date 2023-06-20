import React, { useState, useEffect } from "react";
import Comment from "./Comment";


export default function ProductReviews(props)
{

    const [reviews,setReviews] = useState([])
        
        useEffect(() => {
            fetch(`http://127.0.0.1:8000/product/getReviews/${props.id}`)
              .then((response) => response.json()) // return parsed JSON data
              .then((data) => {
                setReviews(data); // set the products state variable
              })
              .catch((error) => console.error(error));
          }, []);
        
          
         

          return (
            <div>
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <Comment comment={review.comment} userId={review.customer} />
                </li>
              ))}
            </ul>
          </div>
          )
        
    
}
import React from "react";
import ReactStars from 'react-rating-stars-component';

export default function SubmitReview(props) {
    const [review, setReview] = React.useState({
        rating: 0,
        comment: ''
    })

    const token = localStorage.getItem('customerToken')
    
    const handleCommentChange = (event) => {
        const {value} = event.target
        setReview({...review, comment: value})
    };

    const ratingChanged = (newRating) => {
        setReview({...review, rating: newRating})
    };

    let submitReview = function () {
        fetch(`http://127.0.0.1:8000/product/addReview/${props.id}/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            },
            body:JSON.stringify(review)
        })
        .then(response => response.json())
        .then(data=> {

        })
        .catch(error => console.log(error))
    }

    const handleSubmit = (event) => {
       event.preventDefault(); 
       submitReview()
    }
   return (
    <div>
        <form onSubmit={handleSubmit}>

            <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                onChange={ratingChanged}
                value={review.rating}
                isHalf={true}
                activeColor="#ffd700"
                name="rate"
            />

            <textarea name="comment" 
                className="commentClass" 
                cols="30" rows="10"
                value={review.comment}
                onChange={handleCommentChange}
            ></textarea>
            <br />
            <input className="theme-color button-style" type="submit" />
        </form>


    </div>
   )

}
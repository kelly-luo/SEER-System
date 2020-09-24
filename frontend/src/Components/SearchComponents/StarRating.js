import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import "./StarRating.css"
import axios from "axios"

function StarRating(id) {
    const articleId = Object.values(id);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const submitRating = (e) =>{
        e.preventDefault();

        axios.put("/articles/"+articleId,{
            rating : [rating]
        })
        .then((response) =>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err);
        })
        window.location.reload();
    }

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={submitRating}>
                        </input>
                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseOver={() => setHover(ratingValue)}
                            onMouseOut={() => setHover(null)}
                            size={20}
                            onClick={() => setRating(ratingValue)}>
                        </FaStar>
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating

import React from 'react'
import "./Review.css"
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import axios from "axios"

function Review(article) {
    const getArticle = Object.values(article);

    const acceptArticle = (e) => {
        e.preventDefault();

        axios.post(`/${getArticle[0]}`, {
            author: getArticle[1].author,
            title: getArticle[1].title,
            journal: getArticle[1].journal,
            year: getArticle[1].year,
            volume: getArticle[1].volume,
            number: getArticle[1].number,
            pages: getArticle[1].pages,
            month: getArticle[1].month,
            url: getArticle[1].url
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })

        axios.delete(`/${getArticle[0]}/${getArticle[1]._id}`)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })
        window.location.reload();
    }

    const declineArticle = (e) => {
        e.preventDefault();

        axios.post("/declinedArticles", {
            author: getArticle[1].author,
            title: getArticle[1].title,
            journal: getArticle[1].journal,
            year: getArticle[1].year,
            volume: getArticle[1].volume,
            number: getArticle[1].number,
            pages: getArticle[1].pages,
            month: getArticle[1].month,
            url: getArticle[1].url
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })
        axios.delete(`/${getArticle[0]}/${getArticle[1]._id}`)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })
        window.location.reload();


    }

    return (
        <div>
            <button onClick={acceptArticle}><CheckIcon></CheckIcon></button><button><ClearIcon onClick={declineArticle}></ClearIcon></button>
        </div>
    )
}

export default Review

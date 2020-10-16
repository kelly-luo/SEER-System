import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar'
import * as ReactBootStrap from "react-bootstrap"
import "./ModerationPage.css"
import Review from '../Review/Review';

function ModerationPage() {
    const [moderationArticles, setModerationArticles] = useState([]);

    useEffect(() => {
        axios.get('/moderation')
            .then(response => {
                setModerationArticles(response.data)
            })
    }, [])

    const renderArticles = (article, index) => {
        return (
            <tr className="results" key={index} data-href={article.url}>
                <td><a href={article.url}>{article.author}</a></td>
                <td><a href={article.url}>{article.title}</a></td>
                <td><a href={article.url}>{article.journal}</a></td>
                <td><a href={article.url}>{article.year}</a></td>
                <td><Review page="moderation" article={article}></Review></td>
            </tr>
        );
    }

    return (
        <div className="moderationResults">
            <NavBar></NavBar>
            <center><h3 className="reqModeration">Number of articles required for moderation: {moderationArticles.length}</h3></center>
            <div className='moderationDataTable'>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{width: "33.66%"}}>Author</th>
                            <th style={{width: "33.66%"}}>Title</th>
                            <th style={{width: "14.66%"}}>Journal</th>
                            <th style={{width: "5%"}}>Year</th>
                            <th style={{width: "11%", fontStyle:"bold"}}>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {moderationArticles.map(renderArticles)}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
        </div>
    )
}

export default ModerationPage

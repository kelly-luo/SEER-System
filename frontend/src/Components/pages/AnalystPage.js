import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar'
import * as ReactBootStrap from "react-bootstrap"
import "./AnalystPage.css"
import AnalystReview from '../Review/AnalystReview';

function AnalystPage() {
    const [analystArticles, setAnalystArticles] = useState([]);

    useEffect(() => {
        axios.get('/analyst')
            .then(response => {
                setAnalystArticles(response.data)
            })
    }, [])

    const renderArticles = (article, index) => {
        return (
            <tr className="results" key={index} data-href={article.url}>
                <td><a href={article.url}>{article.author}</a></td>
                <td><a href={article.url}>{article.title}</a></td>
                <td><a href={article.url}>{article.journal}</a></td>
                <td><a href={article.url}>{article.year}</a></td>
                <td><AnalystReview article={article}></AnalystReview></td>
            </tr>
        );
    }

    return (
        <div className="analystResults">
            <NavBar></NavBar>
            <center><h3 className="reqAnalyse">Number of articles required for analysis: {analystArticles.length}</h3></center>
            <div className='analystDataTable'>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{width: "36.66%"}}>Author</th>
                            <th style={{width: "36.66%"}}>Title</th>
                            <th style={{width: "16.66%"}}>Journal</th>
                            <th style={{width: "5%"}}>Year</th>
                            <th style={{width: "5%"}}>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {analystArticles.map(renderArticles)}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
        </div>
    )
}

export default AnalystPage

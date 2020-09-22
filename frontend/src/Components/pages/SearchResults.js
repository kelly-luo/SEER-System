import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavigationBar from './NavBar'
import './SearchResults.css'
import SearchHeader from '../SearchComponents/SearchHeader';
import * as ReactBootStrap from "react-bootstrap"

function SearchResults() {

    const [articles, setArticles] = useState([]);
    const numberOfResults = articles.length;

    useEffect(() => {
        axios.get('/articles')
            .then(response => {
                setArticles(response.data)
            })

    }, [])

    const renderArticles = (article, index) => {
        return (
            <tr className="results" key={index} data-href={article.url}>
                <td><a href={article.url}>{article.authorss}</a></td>
                <td><a href={article.url}>{article.title}</a></td>
                <td><a href={article.url}>{article.journal}</a></td>
                <td><a href={article.url}>{article.year}</a></td>
            </tr>
        );
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="searchResults">

                <div className='searchHeader'>
                    <SearchHeader></SearchHeader>
                </div>
                <p className ="resultsNumber">Number of results: {numberOfResults}</p>
                <div className='searchData'>
                    <ReactBootStrap.Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Title</th>
                                <th>Journal</th>
                                <th>year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map(renderArticles)}
                        </tbody>
                    </ReactBootStrap.Table>
                </div>
            </div>
        </div>);
};

export default SearchResults;
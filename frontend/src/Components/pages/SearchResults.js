import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavigationBar from './NavBar'
import './SearchResults.css'
import SearchHeader from '../SearchComponents/SearchHeader';
import * as ReactBootStrap from "react-bootstrap"
import { useParams } from "react-router-dom"
import StarRating from '../SearchComponents/StarRating'
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import ArticleModal from './ArticleModal';

function SearchResults() {
    const { term } = useParams();

    const [articles, setArticles] = useState([]);
    const [selectOption] = useState('Sort search by');

    const selectSortBy = (e) => {
        e.preventDefault();

        if (e.target.textContent.toLowerCase() === "author") {
            setArticles([...articles].sort((a, b) => a.author > b.author ? 1 : -1));
        }
        if (e.target.textContent.toLowerCase() === "title") {
            setArticles([...articles].sort((a, b) => a.title > b.title ? 1 : -1));
        }
        if (e.target.textContent.toLowerCase() === "year") {
            setArticles([...articles].sort((a, b) => a.year < b.year ? 1 : -1));
        }


        console.log("Sorted array", articles);
    }


    useEffect(() => {
        axios.get('/getArticles')
            .then(response => {
                setArticles(response.data)
            })
    }, [term])


    const filteredArticles = articles.filter(article => {
        if (term === undefined) {
            return articles;
        }
        else {
            return Object.keys(article).some(key =>
                article[key].toString().toLowerCase().includes(term.toLowerCase().trim())
            );
        }

    })

    const articleModal = (e) => {
        return (
            <div>
                <ArticleModal id={e.currentTarget.id}></ArticleModal>
            </div>
        )
    }

    const renderArticles = (article, index) => {
        let sum = 0;
        if (article.rating != null) {
            for (let num of article.rating) {
                sum = sum + num
            }
            sum = Math.round((sum / article.rating.length) * 10) / 10;
        }
        if (isNaN(sum)) sum = 0;

        return (
            <tr id={article._id} className="results" key={index} onClick={(e) => articleModal(e)}>
                <td>{article.author}</td>
                <td>{article.title}</td>
                <td>{article.journal}</td>
                <td>{article.year}</td>
                <td><StarRating id={article._id}></StarRating> Avg user rating: {sum}</td>
                <td><ArticleModal id={article._id}></ArticleModal></td>
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
                <div className='sortBy'>
                    <div>
                        <DropdownButton id="dropdown-item-button" title={selectOption}>
                            <Dropdown.Item value="author" onClick={(e) => selectSortBy(e)}>Author</Dropdown.Item>
                            <Dropdown.Item value="title" onClick={(e) => selectSortBy(e)}>Title</Dropdown.Item>
                            <Dropdown.Item value="year" onClick={(e) => selectSortBy(e)}>Year</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <p className="resultsNumber">Number of results for query "{term}" : {filteredArticles.length}</p>
                <div className='searchData'>
                    <ReactBootStrap.Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Title</th>
                                <th>Journal</th>
                                <th>Year</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredArticles.map(renderArticles)}
                        </tbody>
                    </ReactBootStrap.Table>
                </div>
            </div>
        </div>);


};

export default SearchResults;
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

function SearchResults() {
    const { term } = useParams();
    const [articles, setArticles] = useState([]);
    const [selectOption] = useState('Sort search by');

    const sortByAuthor = (e) =>{
        e.preventDefault();
        if(e.target.textContent.toLowerCase() === "author"){
            setArticles([...articles].sort((a, b) => a.author > b.author ? 1 : -1));
        }
    }

    const sortByTitle = (e) =>{
        e.preventDefault();
        if(e.target.textContent.toLowerCase() === "title"){
            setArticles([...articles].sort((a, b) => a.title > b.title ? 1 : -1));
        }
    }

    const sortByYear = (e) =>{
        e.preventDefault();
        if(e.target.textContent.toLowerCase() === "year"){
            setArticles([...articles].sort((a, b) => a.year < b.year ? 1 : -1));
        }
    
    }

    const sortByJournal = (e) =>{
        e.preventDefault();
        if(e.target.textContent.toLowerCase() === "journal"){
            setArticles([...articles].sort((a, b) => a.journal < b.journal ? 1 : -1));
        }
    }

    const sortByRating = (e) => {
        if (e.target.textContent.toLowerCase() === "rating") {
            setArticles([...articles].sort((a, b) => a.rating > b.rating ? 1 : -1));
        }
    }


    useEffect(() => {
        axios.get('/articles')
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
            <tr className="results" key={index} data-href={article.url}>
                <td><a href={article.url}>{article.author}</a></td>
                <td><a href={article.url}>{article.title}</a></td>
                <td><a href={article.url}>{article.journal}</a></td>
                <td><a href={article.url}>{article.year}</a></td>
                <td><StarRating id={article._id}></StarRating> Avg user rating: {sum}</td>
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
                            <Dropdown.Item value="author" onClick={(e) => sortByAuthor(e)}>Author</Dropdown.Item>
                            <Dropdown.Item value = "title" onClick={(e) => sortByTitle(e)}>Title</Dropdown.Item>
                            <Dropdown.Item value = "rating" onClick={(e) => sortByJournal(e)}>Journal</Dropdown.Item>
                            <Dropdown.Item value = "year" onClick={(e) => sortByYear(e)}>Year</Dropdown.Item>
                            <Dropdown.Item value = "rating" onClick={(e) => sortByRating(e)}>Rating</Dropdown.Item>
                            
                        </DropdownButton>
                    </div>
                </div>
                <p className="resultsNumber">Number of results for query "{term}" : {filteredArticles.length}</p>
                <div className='searchData'>
                    <ReactBootStrap.Table striped bordered hover>
                        <thead>
                            <th><button onClick={sortByAuthor}>Author</button></th>
                            <th><button onClick={sortByTitle}>Title</button></th>                                
                            <th><button onClick={sortByJournal}>Journal</button></th> 
                            <th><button onClick={sortByYear}>Year</button></th> 
                            <th><button onClick={sortByRating}>Rating</button></th> 
                                
                                
                                

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
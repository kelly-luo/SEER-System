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
import { useSelector } from 'react-redux';

function SearchResults() {
    const leftCustomValue = useSelector(state => state.leftCustomValue)
    const operatorCustomValue = useSelector(state => state.operatorCustomValue)
    const rightCustomValue = useSelector(state => state.rightCustomValue)
    const { term } = useParams();
    
    const [articles, setArticles] = useState([]);
    const [selectOption] = useState('Sort search by');

    const selectSortBy = (e) => {
        e.preventDefault();

        if(e.target.textContent.toLowerCase() === "author"){
            setArticles([...articles].sort((a, b) => a.author > b.author ? 1 : -1));
        }
        if(e.target.textContent.toLowerCase() === "title"){
            setArticles([...articles].sort((a, b) => a.title > b.title ? 1 : -1));
        }
        if(e.target.textContent.toLowerCase() === "year"){
            setArticles([...articles].sort((a, b) => a.year < b.year ? 1 : -1));
        }
        
        console.log("Sorted array",articles);
    }


    useEffect(() => {
        axios.get('/articles')
            .then(response => {
                setArticles(response.data)
            })
    }, [term])


    const filteredArticles = articles.filter(article => {
        if (term === undefined) {
            if(Array.isArray(rightCustomValue.items) && rightCustomValue.items.length){
                var right = rightCustomValue.items[0]
                var left = leftCustomValue.items[0].toString().toLowerCase().split(' ').join('')

                return Object.keys(article).some(key =>
                    (key === left.toLowerCase()) ? article[left].toString().toLowerCase().includes(right.toLowerCase().trim()) : false
                );
            }
            return articles;
        }
        else {
            // var right = rightCustomValue.items[0]
            // var left = leftCustomValue.items[0].toString().toLowerCase().split(' ').join('')
            // // if it has SEmethod then add to term
            // var newTerm = term.concat(rightCustomValue.items[0]);

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
                            <Dropdown.Item value="author" onClick={(e) => selectSortBy(e)}>Author</Dropdown.Item>
                            <Dropdown.Item value = "title" onClick={(e) => selectSortBy(e)}>Title</Dropdown.Item>
                            <Dropdown.Item value = "year" onClick={(e) => selectSortBy(e)}>Year</Dropdown.Item>
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
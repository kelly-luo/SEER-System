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
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"

function SearchResults() {
    const leftCustomValue = useSelector(state => state.leftCustomValue)
    const operatorCustomValue = useSelector(state => state.operatorCustomValue)
    const rightCustomValue = useSelector(state => state.rightCustomValue)
    const { term } = useParams();
    const [articles, setArticles] = useState([]);
    const [selectOption] = useState('Sort search by');
    // eslint-disable-next-line
    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sortByAuthor = (e) =>{
        e.preventDefault();
        if(e.target.textContent.toLowerCase() === "author"){
            setArticles([...articles].sort((a, b) => a.author.trim() > b.author.trim() ? 1 : -1));
        }
    }

    const sortByTitle = (e) =>{
        e.preventDefault();
        if(e.target.textContent.toLowerCase() === "title"){
            setArticles([...articles].sort((a, b) => a.title.trim() > b.title.trim() ? 1 : -1));
        }
    }

    const sortByYear = (e) =>{
        e.preventDefault();
        if(e.target.textContent.toLowerCase() === "year"){
            setArticles([...articles].sort((a, b) => a.year.trim() < b.year.trim() ? 1 : -1));
        }
    
    }

    const sortByJournal = (e) =>{
        e.preventDefault();
        if(e.target.textContent.toLowerCase() === "journal"){
            setArticles([...articles].sort((a, b) => a.journal.trim().toLowerCase() > b.journal.trim().toLowerCase() ? 1 : -1));
        }
    }

    const sortByRating = (e) => {
        if (e.target.textContent.toLowerCase() === "rating") {
            console.log("Sum of ratings: " + setArticles([...articles].reduce((a, b) => a.rating + b.rating, 0)))
            setArticles([...articles].sort((a, b) => a.rating.index > b.rating.index ? 1 : -1));
        }
    }


    useEffect(() => {
        axios.get('/getArticles')
            .then(response => {
                setArticles(response.data)
            })
    }, [term])


    const filteredArticles = articles.filter(article => {
        if (term === undefined) {
            if(Array.isArray(rightCustomValue.items) && rightCustomValue.items.length){
                var right = rightCustomValue.items[0]
                var left = leftCustomValue.items[0].toString().toLowerCase().split(' ').join('')
                var operator = operatorCustomValue.items[0]

                if(operator === 'contains'){
                    return Object.keys(article).some(key =>
                        (key === left) ? article[left].toString().toLowerCase().includes(right.toLowerCase().trim()) : false
                    );
                }else if(operator === 'does not contain'){
                    return Object.keys(article).some(key =>
                        (key === left) ? !article[left].toString().toLowerCase().includes(right.toLowerCase().trim()) : false
                    );
                }

            }
            return articles;
        }
        else {
            if(Array.isArray(rightCustomValue.items) && rightCustomValue.items.length){
                // var right = rightCustomValue.items[0]
                // var left = leftCustomValue.items[0].toString().toLowerCase().split(' ').join('')

                return Object.keys(article).some(key =>
                    article[key].toString().toLowerCase().includes(term.toLowerCase().trim()) && ((key === left) ? article[left].toString().toLowerCase().includes(right.toLowerCase().trim()) : false)
                );
            }else{
                return Object.keys(article).some(key =>
                    article[key].toString().toLowerCase().includes(term.toLowerCase().trim())
                );
            }

        }

    })

    const toggleTrueFalse = () => {
        setShowModal(handleShow)
    }

    const ModalContent = () => {
        return (
            <Modal isOpen={show} toggle={handleClose}>
                <ModalHeader>Title: {articles[index].title}</ModalHeader>
                <ModalBody>Description: {articles[index].description}</ModalBody>
                <ModalBody>DOI: {articles[index].DOI}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { toggleTrueFalse(); window.open(articles[index].url) }}>Go to article</Button>
                </ModalFooter>
            </Modal>

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
            <tr id={article} className="results" key={index} onClick={() => { setIndex(index); toggleTrueFalse(); }}>
                <td>{article.author}</td>
                <td>{article.title}</td>
                <td>{article.journal}</td>
                <td>{article.year}</td>
                <td><StarRating id={article._id}></StarRating> Avg user rating: {article.rating}</td>
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
                {show ? <ModalContent /> : null}
                <div className='searchData'>
                    <ReactBootStrap.Table striped bordered hover>
                        <thead>
                            <tr>
                            <th><button className="tableButtons" onClick={sortByAuthor}>Author</button></th>
                            <th><button className="tableButtons" onClick={sortByTitle}>Title</button></th>                                
                            <th><button className="tableButtons" onClick={sortByJournal}>Journal</button></th> 
                            <th><button className="tableButtons" onClick={sortByYear}>Year</button></th> 
                            <th><button className="tableButtons" onClick={sortByRating}>Rating</button></th> 
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
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
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"

function SearchResults() {
    const { term } = useParams();

    const [articles, setArticles] = useState([]);
    const [selectOption] = useState('Sort search by');
    // eslint-disable-next-line
    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Dropdown.Item value="author" onClick={(e) => selectSortBy(e)}>Author</Dropdown.Item>
                            <Dropdown.Item value="title" onClick={(e) => selectSortBy(e)}>Title</Dropdown.Item>
                            <Dropdown.Item value="year" onClick={(e) => selectSortBy(e)}>Year</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <p className="resultsNumber">Number of results for query "{term}" : {filteredArticles.length}</p>
                {show ? <ModalContent /> : null}
                <div className='searchData'>
                    <ReactBootStrap.Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{width: "31.66%"}}>Author</th>
                                <th style={{width: "31.66%"}}>Title</th>
                                <th style={{width: "16.66%"}}>Journal</th>
                                <th style={{width: "5%"}}>Year</th>
                                <th style={{width: "15%"}}>Rating</th>
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
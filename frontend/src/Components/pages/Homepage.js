import React from 'react';
import './Homepage.css';
import NavigationBar from './NavBar'
import SearchBar from './Searchbar'
import { Button, Col, Row, Container } from 'react-bootstrap'

function Homepage() {
    return (
        <div className='homepage'>
        <NavigationBar></NavigationBar>
            <div className='homepage_body'>
                <img src="./SEER_logo.png" alt="" />
                <SearchBar></SearchBar>
                <div class="d-flex justify-content-center">
                    <div class="p-3"><Button variant="secondary" size="sm">Custom Search</Button>{' '}</div>
                </div>
            </div>
        </div>
    )
};

export default Homepage;
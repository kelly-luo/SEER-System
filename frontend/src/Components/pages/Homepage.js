import React from 'react';
import './Homepage.css';
import NavigationBar from './NavBar'
import CustomSearchCard from './CustomSearchCard'
import SearchBar from '../SearchComponents/Searchbar'
import { Button, Form, Row, Col, Dropdown } from 'react-bootstrap';

function Homepage() {
    return (
      <div className="homepage">
        <NavigationBar></NavigationBar>
        <div className="homepage_body">
          <img src="./SEER_logo.png" alt="" />
          <SearchBar></SearchBar>
          <div class="d-flex justify-content-center">
            <div class="p-3">
              <Button id="customButton" variant="secondary" size="sm">
                Custom Search
              </Button>{" "}
            </div>
          </div>
          <div className="customForm" class="d-flex justify-content-center">
            <CustomSearchCard></CustomSearchCard>
          </div>
        </div>
      </div>
    );
};


export default Homepage;
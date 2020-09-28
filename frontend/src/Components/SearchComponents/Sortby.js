import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import './Sortby.css';

function Sortby() {
    //const { term } = useParams();
    const [articles, setArticles] = useState([]);



    const sortbyTitle = articles.filter

    return (
        <div>

            <DropdownButton id="dropdown-item-button" title="Sort search by">
                <Dropdown.Item href="#/byAuthor">Author</Dropdown.Item>
                <Dropdown.Item href="#/byTitle">Title</Dropdown.Item>
                <Dropdown.Item href="#/byYear">Year</Dropdown.Item>
            </DropdownButton>

        </div>
    );

};

export default Sortby;
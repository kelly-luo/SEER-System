import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import './Sortby.css';
import { useParams } from "react-router-dom"

function Sortby() {
    //const { term } = useParams();
    const [selectOption, setOption] = useState('Sort search by');
    const [selectByAuthor, setByAuthor] = useState([]);



    const selectAuthor = (e) => {
        e.preventDefault();
        setByAuthor(e.target.value);

    }

    return (
        <div>

            <DropdownButton id="dropdown-item-button" title={selectOption}>
                <Dropdown.Item onClick={(e) => selectAuthor(e)}>Author</Dropdown.Item>
                <Dropdown.Item href="#/byTitle">Title</Dropdown.Item>
                <Dropdown.Item href="#/byYear">Year</Dropdown.Item>
            </DropdownButton>

        </div>
    );

};

export default Sortby;
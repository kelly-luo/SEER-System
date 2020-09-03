import React from 'react';
import './Homepage.css';
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div className='homepage'>
            <div className='homepage_body'>
                <img src="./SEER_logo.png" alt="" />
                <div className='search'>
                    <div className='search_input'>
                        <input className = 'input_field' />
                        <Link to="/search"><SearchIcon className="search_inputIcon" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Homepage;
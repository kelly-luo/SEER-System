import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";

class SearchBar extends Component {
    render() {
        return (
            <div className='search'>
                <div className='search_input'>
                    <input />
                    <Link to = "/search"><SearchIcon className="search_inputIcon" /></Link>
                </div>
            </div>);
    }
}

export default SearchBar;
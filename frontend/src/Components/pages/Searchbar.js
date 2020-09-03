import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Searchbar.css'
import SearchIcon from '@material-ui/icons/Search'
class SearchBar extends Component {
    render() {
        return (
            <div className='search'>
                <div className='search_input'>
                    <input />
                    <SearchIcon className="search_inputIcon" />
                </div>
            </div>);
    }
}

export default SearchBar;
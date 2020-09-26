import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core'

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        if (searchInput !== "") {
            history.push(`/search/${searchInput}`)
        }
        else{
            history.push(`/search`)
        }
        setSearchInput("")
    }

    return (
        <form className='search'>
            <div className='search_input'>
                <input type="text" placeholder="Search" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
                <Button type="submit" onClick={search}><SearchIcon className="search_inputIcon" /></Button>
            </div>
        </form>);
}

export default SearchBar;
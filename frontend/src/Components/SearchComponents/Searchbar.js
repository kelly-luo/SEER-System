import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

function SearchBar(){
    const [searchInput, setSearchInput] = useState('');

    const search = (e) =>{
        e.preventDefault();
    }


    return (
        <form className='search'>
            <div className='search_input'>
                <input type= "text" value={searchInput} onChange={ e=> setSearchInput(e.target.value) }/>
                <Link to={`/search/${searchInput}`}><SearchIcon className="search_inputIcon" /></Link>
            </div>
        </form>);
}

export default SearchBar;
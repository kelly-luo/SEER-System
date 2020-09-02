import React from 'react';
import './Homepage.css';
import SearchIcon from '@material-ui/icons/Search';
import { Button} from 'react-bootstrap';

function Homepage() {
    return (
        <div className='homepage'>
            <div className='homepage_body'>
                <img src="./SEER_logo.png" alt="" />
                <div className='search'>
                    <div className='search_input'>
                        <input />
                        <SearchIcon className="search_inputIcon" />
                        <Button variant="secondary">Secondary</Button>{' '}
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Homepage;
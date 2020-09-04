import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {
    render() {
        console.log("nav bar generated");
        return (
            <div className='navBar'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to ="/" class="nav-link active">Home</Link>
                            <Link to ="/login" class="nav-link active">Sign in</Link>
                            <Link to ="/register" class="nav-link active">Register</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
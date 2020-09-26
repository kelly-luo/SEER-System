import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {
    render() {
        console.log("nav bar generated");
        return (
            <div className='navBar'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to ="/" className="nav-link active">Home</Link>
                            <Link to ="/login" className="nav-link active">Sign in</Link>
                            <Link to ="/register" className="nav-link active">Register</Link>
                            <Link to ="/Moderation" className="nav-link active">Moderation</Link>
                            <Link to ="/Analyse" className="nav-link active">Analyse</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import './NavBar.css'
import Register from './Auth/Register';
import Logout from './Auth/Logout';
import Login from './Auth/Login';
import { connect } from 'react-redux';
import PropTypes from "prop-types"


class NavBar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        var authLinks;
        var guestLinks;
        if (user === null) {
            guestLinks = (
                <Fragment>
                    <Register></Register>
                    <Login></Login>
                </Fragment>
            )
        }
        else {
            if (user.role === "registeredUser") {
                authLinks = (
                    <Fragment>
                        <Link to="/upload" className="nav-link active">Upload</Link>
                        <Link to="/profile" className="nav-link active">Profile</Link>
                        <Logout></Logout>
                    </Fragment>
                )
            }
            if (user.role === "moderator") {
                authLinks = (
                    <Fragment>
                        <Link to="/upload" className="nav-link active">Upload</Link>
                        <Link to="/moderate" className="nav-link active">Moderation</Link>
                        <Link to="/profile" className="nav-link active">Profile</Link>
                        <Logout></Logout>
                    </Fragment>
                )
            }
            if (user.role === "analyst") {
                authLinks = (
                    <Fragment>
                        <Link to="/upload" className="nav-link active">Upload</Link>
                        <Link to="/analyse" className="nav-link active">Analyse</Link>
                        <Link to="/profile" className="nav-link active">Profile</Link>
                        <Logout></Logout>
                    </Fragment>
                )
            } if (user.role === "admin") {
                authLinks = (
                    <Fragment>
                        <Link to="/upload" className="nav-link active">Upload</Link>
                        <Link to="/moderate" className="nav-link active">Moderation</Link>
                        <Link to="/analyse" className="nav-link active">Analyse</Link>
                        <Link to="/admin" className="nav-link active">Admin</Link>
                        <Link to="/profile" className="nav-link active">Profile</Link>
                        <Logout></Logout>
                    </Fragment>
                )
            }
        }
        return (
            <div className='navBar' >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active">Home</Link>
                            <div className = "components">
                                {isAuthenticated ? authLinks : guestLinks}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, null)(NavBar);
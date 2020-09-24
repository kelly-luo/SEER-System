import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchResults from './pages/SearchResults'

function Nav() {
    return (
        <Router>
            <div className="nav">
                <Switch>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="/search/:term">
                        <SearchResults></SearchResults>
                    </Route>
                    <Route path="/">
                        <Homepage></Homepage>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Nav
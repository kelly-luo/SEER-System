import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './pages/Homepage';

function Nav() {
    return (
        <Router>
            <div className="nav">
                <Switch>
                    <Route path="/login">
                        <h1>Login page</h1>
                    </Route>
                    <Route path="/register">
                        <h1>Register page</h1>
                    </Route>
                    <Route path="/search">
                        <h1>Search Results</h1>
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
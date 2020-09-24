import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnalystPage from './pages/AnalystPage';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import ModerationPage from './pages/ModerationPage';
import Register from './pages/Register';
import SearchResults from './pages/SearchResults';
import UploadArticlePage from './pages/UploadPage/UploadArticlePage.js'
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
                    <Route path="/moderation">
                        <ModerationPage></ModerationPage>
                    </Route>
                    <Route path="/analyse">
                        <AnalystPage></AnalystPage>
                    </Route>
                    <Route path="/upload">
                        <UploadArticlePage></UploadArticlePage>
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
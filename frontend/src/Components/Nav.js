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
                    <Route path="/login" exact component={Login}>
                    </Route>
                    <Route path="/register" exact component={Register}>
                    </Route>
                    <Route path="/search/:term" exact component={SearchResults}>
                    </Route>
                    <Route path="/moderate" exact component={ModerationPage}>
                    </Route>
                    <Route path="/analyse" exact component={AnalystPage}>
                    </Route>
                    <Route path="/upload" exact component={UploadArticlePage}>
                    </Route>
                    <Route path="/" exact component={Homepage}>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Nav
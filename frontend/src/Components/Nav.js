import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from './pages/AdminPage';
import AnalystPage from './pages/AnalystPage';
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import UploadArticlePage from './pages/UploadPage/UploadArticlePage'
import ModerationPage from "./pages/ModerationPage"

function Nav() {
    return (
        <Router>
            <div className="nav">
                <Switch>
                    <Route path={["/search/:term","/search/:term/:custom","/search/custom/:custom","/search"]} exact component={SearchResults}>
                    </Route>
                    <Route path="/analyse" exact component={AnalystPage}>
                    </Route>
                    <Route path="/moderate" exact component={ModerationPage}>
                    </Route>
                    <Route path="/upload" exact component={UploadArticlePage}>
                    </Route>
                    <Route path="/admin" exact component={AdminPage}>
                    </Route>
                    <Route path="/" exact component={Homepage}>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Nav
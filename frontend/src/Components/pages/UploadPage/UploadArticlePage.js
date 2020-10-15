import React, { Component } from 'react';
import NavBar from '../NavBar.js';
import UploadFile from './UploadFile.js';
class UploadArticlePage extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <UploadFile></UploadFile>
            </div>
        );
    }
}

export default UploadArticlePage;
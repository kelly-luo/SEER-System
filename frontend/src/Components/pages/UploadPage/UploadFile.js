import React, { Component } from 'react';
import axios from 'axios';
import * as FormData from 'form-data'
//const FormData = require('form-data');

class UploadFile extends Component {
    state = {
        file: null,
        fileName: null,
        fileResult:null,
    }

    handleFile(e) {
        let file = e.target.files[0]
        this.state.fileName = e.target.files[0].name;
        this.setState({ file: file })
        //console.log(file);

    }

    handleUpload(e) {
        let formData = new FormData();
        formData.append("uploaded-file", this.state.file);
        const url = '/files';
        var reader = new FileReader();
        reader.readAsText(this.state.file, "UTF-8");
        // reader.onload = () => this.setState({ 
        //     fileResult: reader.result
        // })
        reader.onload = function() {  
            axios.post(url, {file:reader.result})
            .then((response) => {
                //handle response latter
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
          }

    }
    render() {
        return (
            <React.Fragment>
                <h1>Upload your file</h1>
                <div className="input-group">

                    <div className="custom-file" onSubmit={this.onSubmit}>

                        <input type="file" className="custom-file-input" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" onChange={(e) => this.handleFile(e)} />
                        <label className="custom-file-label" htmlFor="inputGroupFile01" >choose a file</label>
                    </div>
                    <button onClick={(e) => this.handleUpload(e)}>submit</button>
                </div>
                <p>{this.state.fileName}</p>
                <br></br>
                <p>{this.state.fileResult}</p>

            </React.Fragment>
        );
    }
}

export default UploadFile;
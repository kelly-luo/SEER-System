import React, { Component } from 'react';
import axios from 'axios';
import * as FormData  from 'form-data'
class UploadFile extends Component {
    state = {
        file:null
      }

    handleFile(e){
        let file = e.target.files[0]
        this.setState({file:file})
    }  

    handleUpload(e){
        let file = this.state.file
        let formData = new FormData();
        formData.append("file", file);
        const url = '/files';
        console.log(formData);

        axios.post(url,formData)
            .then((response) => {
               //handle response latter
               console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Upload your file</h1>
                <div className="input-group">
   
                <div className="custom-file" onSubmit={this.onSubmit}>
                    <input type="file" className="custom-file-input" id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01" onChange={(e) =>this.handleFile(e)}/>
                    <label className="custom-file-label" htmlFor="inputGroupFile01" >Choose file</label>
                </div>
                <button onClick={(e) =>this.handleUpload(e)}>submit</button>
                </div>
            </React.Fragment>
         );
    }
}
 
export default UploadFile;
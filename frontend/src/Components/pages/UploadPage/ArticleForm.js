import React, { Component } from 'react';
import axios from 'axios';

class form extends Component {
 
    handleUpload(e) {

        const url = '/files';
            axios.post(url, {author:document.getElementById("author-text-area").value })
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
                <form>
                    <div className="form-group">
                    <label >Author</label>
                    <textarea className="form-control" id="author-text-area" rows="3" defaultValue={this.props.author}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <textarea className="form-control" rows="1"></textarea>

                    </div>
                    <div className="form-group">
                        <label >Publisher</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label >Year</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label >Month</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label >Journal</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <button onClick={(e) => this.handleUpload(e)}>submit</button>
                    </form>
            </React.Fragment>
         );
    }
}
 
export default form;
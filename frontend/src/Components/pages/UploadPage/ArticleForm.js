import React, { Component } from 'react';

class form extends Component {
    render() { 
        const{fileInfo} = this.props;
        console.log(fileInfo);

        return ( 
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <label >Author</label>
                        <textarea className="form-control"  rows="1"></textarea>

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
                    </form>
            </React.Fragment>
         );
    }
}
 
export default form;
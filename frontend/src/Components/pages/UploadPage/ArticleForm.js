import React, { Component } from 'react';

class form extends Component {
    render() { 
        const{fileResult} = this.props;
        return ( 
            <React.Fragment>
                <form>
                    <div class="form-group">
                        <label >Author</label>
                        <textarea className="form-control"  rows="1"></textarea>

                    </div>
                    <div class="form-group">
                        <label>Title</label>
                        <textarea className="form-control" rows="1"></textarea>

                    </div>
                    <div class="form-group">
                        <label >Publisher</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div class="form-group">
                        <label >Year</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div class="form-group">
                        <label >Month</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    <div class="form-group">
                        <label >Journal</label>
                        <textarea className="form-control"  rows="1"></textarea>
                    </div>
                    </form>
            </React.Fragment>
         );
    }
}
 
export default form;
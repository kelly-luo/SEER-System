import React, { Component } from 'react';

class form extends Component {
    onTextChange = (e) => {
        let str = e.target.value;
        str = str.replace(/^\s+/, '');
        this.setState({val: str});
      }
    render() { 
        const{author} = this.props;
        return ( 
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <label >Author</label>
                    <textarea className="form-control" rows="3" value={this.props.author} onChange={this.onTextChange}></textarea>
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
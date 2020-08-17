import React from 'react';
import axios from 'axios';


class CommentForm extends React.Component {
    submitComment(event) {
        event.preventDefault();

        axios.post('/comments', {
            firstName: this.refs.firstName.value,
            comment: this.refs.comment.value,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    render() {
        return (
            <div className="row">
                <h1 className="center">Add new comment</h1>
                <form className="col s12" onSubmit={this.submitComment.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref="firstName" type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="comment" ref="comment" type="text" />
                            <label htmlFor="comment">Comment</label>
                        </div>
                    </div>
                    <button className= "btn waves-effect waves-light" type="submit"
                    name = "action">Add comment</button>
                </form>
            </div>
        );
    }
}

export default CommentForm;
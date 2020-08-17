import React from 'react';
import './App.css';
import axios from 'axios';
import CommentSingle from './Comment/CommentSingle';
import CommentForm from './Comment/CommentForm';
import CommentList from './Comment/CommentList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      currentComment: {},
    }

    this.updateCurrentComment = this.updateCurrentComment.bind(this);
  }

  componentDidMount() {
    const url = process.env.PORT || 'http://localhost:4000/comments';

    axios.get(url)
      .then((response) => {
        this.setState({
          comments: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateCurrentComment(item) {
    this.setState({
      currentComment: item,
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="/" className="brand-logo">Comment Maker</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3"><CommentList comments={this.state.comments}
            updateCurrentComment={this.updateCurrentComment} />
          </div>
          <div className="col s9"><CommentSingle comment = {this.state.currentComment} /></div>
        </div>
        <div className="row">
          <div className="col s12"><CommentForm /></div>
        </div>
      </div>
    );
  }
}

export default App;

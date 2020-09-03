import React from 'react';
import axios from 'axios';
import SearchResultsData from './SearchResultsData';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        const url = '/comments';

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


    CommentList() {
        return this.state.comments.map((res, i) => {
            return <SearchResultsData obj={res} key={i} />;
        });
    }


    render() {
        return (
            <div className="searchResults">
                <tbody>
                    {this.CommentList()}
                </tbody>
            </div>);
    }
};

export default SearchResults;
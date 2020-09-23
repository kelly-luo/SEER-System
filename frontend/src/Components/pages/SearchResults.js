import React from 'react';
import axios from 'axios';
import SearchResultsData from '../SearchComponents/SearchResultsData';
import NavigationBar from './NavBar'
import './SearchResults.css'
import SearchHeader from '../SearchComponents/SearchHeader';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        const url = '/articles';

        axios.get(url)
            .then((response) => {
                this.setState({
                    articles: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    };


    ArticleList() {
        return this.state.articles.map((res, i) => {
            return <SearchResultsData obj={res} key={i} />;
        });
    }


    render() {
        return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="searchResults">
            
            <div className='searchHeader'>
                <SearchHeader></SearchHeader>
            </div>
                <div className='searchData'>
                    {this.ArticleList()}
                </div>
            </div>
        </div>);

    }
};

export default SearchResults;
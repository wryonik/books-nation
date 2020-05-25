import React, { Component } from 'react';
import Searchbar from './../components/searchbar';
import { getBookByName } from '../api/booksApi';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        getBookByName(this.searchField).then((res, err) => {
            this.setState({ books: [...res.items]})
        })
    }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        return(
            <div>
                <Searchbar searchBook={this.searchBook} handleSearch={this.handleSearch} />
            </div>
        );
    }
}

export default LandingPage;
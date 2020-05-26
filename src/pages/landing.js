import React, { Component } from 'react';
import Searchbar from './../components/searchbar';
import { getBookByName } from '../api/booksApi';
import BooksList from '../components/booksList';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        getBookByName(this.state.searchField).then((data) => {
            console.log(data.items)
            this.setState({ books: [...data.items] })
        })
    }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        return(
            <div>
                <Searchbar searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BooksList books={this.state.books} />
            </div>
        );
    }
}

export default LandingPage;
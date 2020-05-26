import React, { Component } from 'react';
import Searchbar from './../components/searchbar';
import { getBookByName, getBookByNameOrderBy } from '../api/booksApi';
import BooksList from '../components/booksList';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: 'relevance'
        }
    }

    // searchBook = (e) => {
    //     e.preventDefault();
    //     getBookByName(this.state.searchField).then((data) => {
    //         console.log(data.items)
    //         this.setState({ books: [...data.items] })
    //     })
    // }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value});
    }

    handleSort = async (e) => {
        e.preventDefault();
        if(e.target.value!==undefined) {
            await this.setState({sort: e.target.value});
        }
        getBookByNameOrderBy(this.state.searchField, this.state.sort).then((data) => {
            this.setState({ books: [...data.items] })
        })
    }

    render() {
        return(
            <div className="landing">
                <Searchbar searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} sort={this.state.sort} />
                <BooksList books={this.state.books} />
            </div>
        );
    }
}

export default LandingPage;
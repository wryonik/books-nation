import React, { Component } from 'react';
import Searchbar from './../components/searchbar';
import { getBooks } from '../api/booksApi';
import BooksList from '../components/booksList';
import LoadingSpinner from '../components/loadingSpinner';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: 'relevance',
            isLoading: false,
            filter: null,
            languageRestriction: ''
        }
    }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value});
    }

    handleSort = (e) => {
        e.preventDefault();
        if(e.target.value!==undefined) {
            this.setState({sort: e.target.value});
        }
        this.handleRequest()
    }

    
    handleFilter = (e) => {
        if(e.target.value!=="none") {
            this.setState({ filter: e.target.value });
        } else {
            this.setState({ filter: null })
        }
        this.handleRequest()
    }

    handleLanguageRes = (e) => {
        this.setState({ languageRestriction: e.target.value });
        this.handleRequest()
    }
    
    handleRequest = () => {
        console.log("hello")
        console.log(this)
        this.setState({ isLoading:true }, () => {
            getBooks(this.state.searchField, this.state.sort, this.state.filter, this.state.languageRestriction).then((data) => {
                console.log(this.state.isLoading);
                this.setState({ isLoading:false, books: [...data.items] })
                console.log(this.state.isLoading);
            })
        })
    }

    render() {
        return(
            <div className="landing">
                <Searchbar searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} sort={this.state.sort} handleFilter={this.handleFilter} handleLanguageRes={this.handleLanguageRes} />
                {this.state.isLoading ? <LoadingSpinner /> : <BooksList books={this.state.books} />}
            </div>
        );
    }
}

export default LandingPage;
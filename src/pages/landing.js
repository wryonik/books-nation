import React, { Component } from 'react';
import Searchbar from './../components/searchbar';
import { getBooks } from '../api/booksApi';
import BooksList from '../components/booksList';
import LoadingSpinner from '../components/loadingSpinner';
import Chip from "../components/chip";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            totalBooks: 0,
            searchField: '',
            sort: 'relevance',
            isLoading: false,
            filter: null,
            languageRestriction: '',
            startIndex: 0
        };
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value });
    }

    handleSort = (e) => {
        e.preventDefault();
        if(e.target.value!==undefined) {
            this.setState({ sort: e.target.value });
        }
        this.handleRequest();
    }


    handleFilter = (e) => {
        if(e==null) {
            this.setState({ filter: null });
        } else if(e.target.value!=="none") {
            this.setState({ filter: e.target.value });
        } else {
            this.setState({ filter: null });
        }
        this.handleRequest();
    }

    handleLanguageRes = (e) => {
        if(e!==undefined) {
            this.setState({ languageRestriction: e.target.value });
        } else {
            this.setState({ languageRestriction: null });
        }
        this.handleRequest();
    }

    handlePage = (currentPage) => {
        this.setState({ startIndex: (currentPage-1)*10 });
        this.handleRequest();
    }

    handleRequest = () => {
        if(this.state.searchField!=='') {
            this.setState({ isLoading:true }, () => {
                getBooks(this.state.searchField, this.state.sort, this.state.filter, this.state.languageRestriction, this.state.startIndex)
                .then((data) => {
                    this.setState({ isLoading:false, books: [...data.items], totalBooks: data.totalItems });
                })
                .catch( err => {
                    this.setState({ isLoading:false });
                    alert(err);
                });
            });
        } else {
            alert("Please input Search Query");
        }
    }

    render() {
        return(
            <div className="landing">
                <Searchbar
                    searchBook={this.searchBook}
                    handleSearch={this.handleSearch}
                    handleSort={this.handleSort}
                    sort={this.state.sort}
                    filter={this.state.filter}
                    languageRestriction={this.state.languageRestriction}
                    handleFilter={this.handleFilter}
                    handleLanguageRes={this.handleLanguageRes}
                />
                <div className="chipComponents">
                    { this.state.filter ? <Chip filter={this.state.filter} handleFilter={this.handleFilter} /> : null }
                    { this.state.languageRestriction ? <Chip
                        filter={this.state.languageRestriction}
                        handleLanguageRes={this.handleLanguageRes}
                    /> : null }
                </div>
                {this.state.isLoading ? <LoadingSpinner /> : <BooksList
                    books={this.state.books}
                    totalBooks={this.state.totalBooks}
                    onPageChange={this.handlePage}
                /> }
            </div>
        );
    }
}

export default LandingPage;
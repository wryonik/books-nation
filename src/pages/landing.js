import React, { Component } from 'react';
import Searchbar from './../components/searchbar';
import { getBookByName, getBookByNameOrderBy } from '../api/booksApi';
import BooksList from '../components/booksList';
import LoadingSpinner from '../components/loadingSpinner';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: 'relevance',
            isLoading: false
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
        this.setState({ isLoading:true }, () => {
            getBookByNameOrderBy(this.state.searchField, this.state.sort).then((data) => {
                console.log(this.state.isLoading);
                this.setState({ isLoading:false, books: [...data.items] })
                console.log(this.state.isLoading);
            })
        })
    }

    render() {
        return(
            <div className="landing">
                <Searchbar searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} sort={this.state.sort} />
                {this.state.isLoading ? <LoadingSpinner /> : <BooksList books={this.state.books} />}
            </div>
        );
    }
}

export default LandingPage;
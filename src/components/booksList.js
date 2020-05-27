/* eslint-disable react/prop-types */
import BookCard from './bookCard';
import Pagination from './pagination';
import React, { Component } from 'react';

class BooksList extends Component {
    render() {
        return(
            <div className="bookslist">
                {this.props.books.map((book) => {
                    return <BookCard book={book} />;
                })}
                { this.props.books.length ? <Pagination totalBooks={this.props.totalBooks} onPageChange={this.props.onPageChange} /> : null}
            </div>
        );
    }
}

export default BooksList;
import React from 'react';
import BookCard from './bookCard';

const BooksList = (props) => {
    return(
        <div className="bookslist">
            {props.books.map((book) => {
                return <BookCard book={book} />
            })}
        </div>
    );
}

export default BooksList;
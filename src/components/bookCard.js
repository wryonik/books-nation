import React from 'react';

const BookCard = (props) => {
    const publishedYear = props.book.volumeInfo.hasOwnProperty('publishedDate') === false
                        ? props.book.volumeInfo.publishedDate = "0000" : props.book.volumeInfo.publishedDate.substring(0,4);
    const averageRating = props.book.volumeInfo.hasOwnProperty('averageRating') === false
                        ? props.book.volumeInfo.averageRating = "1" : props.book.volumeInfo.averageRating;
    const thumbnail = props.book.volumeInfo.hasOwnProperty('imageLinks') === false
                        ? props.book.volumeInfo.imageLinks.thumbnail = "1" : props.book.volumeInfo.imageLinks.thumbnail;

    return(
        <a href={props.book.accessInfo.webReaderLink}>
            <div className="bookCard">
                <div className="bookCard-bookThumbnail"><img src={thumbnail} alt={props.book.volumeInfo.title} /></div>
                <div className="bookCard-bookInfo">
                    <div className="bookCard-bookInformation"><span className="cardLabel">Name: </span> {props.book.volumeInfo.title}</div>
                    <div className="bookCard-bookInformation"><span className="cardLabel">Authors: </span> {props.book.volumeInfo.authors}</div>
                    <div className="bookCard-bookInformation"><span className="cardLabel">Publisher: </span> {props.book.volumeInfo.publisher}</div>
                    <div className="bookCard-bookInformation"><span className="cardLabel">Published Year: </span> {publishedYear}</div>
                    <div className="bookCard-bookInformation">
                        <span className="cardLabel">Language: </span> {props.book.volumeInfo.language.toUpperCase()}
                    </div>
                    <div className="bookCard-bookInformation"><span className="cardLabel">Rating: </span> {averageRating}/5</div>
                </div>
            </div>
        </a>
    );
};

export default BookCard;
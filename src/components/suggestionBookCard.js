import React from 'react';
import {Link} from 'react-router-dom';

const SuggestedBookCard = (props) => {
    const thumbnail = !props.book.volumeInfo.hasOwnProperty('imageLinks')
                      ? 1 : props.book.volumeInfo.imageLinks.thumbnail;

    return(
        <Link to={`/${props.book.id}`}>
            <div className="suggestedbookCard">
                <div className="suggestedBookCard-bookThumbnail"><img src={thumbnail} alt={props.book.volumeInfo.title} /></div>
                <div className="suggestedBookCard-bookInfo">
                    <div className="suggestedBookCard-bookInformation">
                        <span className="cardLabel">Name: </span>
                        {props.book.volumeInfo.title}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SuggestedBookCard;
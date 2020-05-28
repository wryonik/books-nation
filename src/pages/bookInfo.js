import React, { Component } from 'react';
import { getBookById, getBooks } from '../api/booksApi';
import SuggestedBookCard from '../components/suggestionBookCard';

class BookInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BookId: this.props.match.params.id,
            isLoading: false,
            Book: {
                title: '',
                authors: [],
                publisher: '',
                publishedDate: '',
                description: '',
                thumbnail: '',
                pagecount: '',
                saleInfo: '',
                category: [],
                link: '',
                ebook: ''
            },
            suggestions: []
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true }, () => {
            getBookById(this.state.BookId)
            .then((data) => {
                this.setState({
                    isLoading:false,
                    Book: {
                        title: data.volumeInfo.title,
                        authors: data.volumeInfo.authors,
                        publisher: data.volumeInfo.publisher,
                        publishedDate: data.volumeInfo.publishedDate,
                        description: data.volumeInfo.description,
                        thumbnail: data.volumeInfo.imageLinks.thumbnail,
                        pagecount: data.volumeInfo.pageCount,
                        saleInfo: data.saleInfo.saleability,
                        category: data.volumeInfo.categories,
                        link: data.accessInfo.webReaderLink,
                        ebook: data.saleInfo.saleability.isEbook
                    }
                });
                this.query = `${data.volumeInfo.title}+subject=${data.volumeInfo.categories}`;
                getBooks(this.query)
                .then((data) => {
                    this.setState({ suggestions: [...data.items] });
                })
                .catch( err => {
                    alert("Error while getting suggestions");
                });
            })
            .catch( err => {
                this.setState({ isLoading:false });
                alert(err);
            });
        });
    }

    render() {
        return(
            <div className="bookInfo">
                <div className="title">{this.state.Book.title}</div>
                <div className="bookProperties">
                    <div className="image">
                        <div className="thumbnail">
                            <img src={this.state.Book.thumbnail} alt={this.state.Book.title} />
                        </div>
                        <a className="button" href={this.state.Book.link}>Go to Book</a>
                    </div>
                    <div className="smallInfo">
                        <div className="author">
                            <span className="label">Authors:</span>
                            {this.state.Book.authors}
                        </div>
                        <div className="publisher">
                            <span className="label">Publisher:</span>
                            {this.state.Book.publisher}
                        </div>
                        <div className="published date">
                            <span className="label">Published Date:</span>
                            {this.state.Book.publishedDate}
                        </div>
                        <div className="saleinfo">
                            <span className="label">Sale Info:</span>
                            {this.state.Book.saleInfo}
                        </div>
                        <div className="ebook">
                            <span className="label">E-book:</span>
                            {!this.state.Book.ebook ? 'Not available': 'Available' }
                        </div>
                        <div className="pagecount">
                            <span className="label">Page Count:</span>
                            {this.state.Book.pagecount}
                        </div>
                    </div>
                </div>
                <label className="descLabel">About the Book</label>
                <div className="description">{this.state.Book.description}</div>
                <div className="suggestions">
                    <label className="descLabel">Suggested Books</label>
                    <div className="suggestedBooks">
                        {this.state.suggestions.map((book) => {
                            return <SuggestedBookCard key={book} book={book} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default BookInfo;

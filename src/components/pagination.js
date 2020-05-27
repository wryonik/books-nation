import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumbers: [1, this.totalPages],
            booksPerPage: 10,
            totalPages: Math.ceil(props.totalBooks / 10),
            currentPage: this.props.currentPage
        };

        this.pageNumbers = [];

        if(this.state.currentPage<5) {
            for (let i = 5; i >= 2; i--) {
                this.state.pageNumbers.splice(1,0,i);
            }
        } else if( this.state.currentPage>(this.state.totalPages-5)) {
            for (let i = this.state.totalPages-5; i >= this.state.totalPages-8; i--) {
                this.state.pageNumbers.splice(1,0,i);
            } 
        } else {
            for (let i = this.state.currentPage+2; i >= this.state.currentPage-2; i--) {
                this.state.pageNumbers.splice(1,0,i);
            }
        }


        this.handlePaginationNext = this.handlePaginationNext.bind(this);
        this.handlePaginationPrev = this.handlePaginationPrev.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePaginationNext () {
        this.props.onPageChange(this.state.currentPage+1);
    }

    handlePaginationPrev () {
        this.props.onPageChange(this.state.currentPage-1);
    }

    handlePageChange (Number) {
        this.setState({ currentPage: Number });
        this.props.onPageChange(Number);
    }

    render() {
        return(
            <div className="pagination">
                <div className="pagination-prev" onClick={this.handlePaginationPrev}>Prev</div>
                <div className="pagination-list">
                    {this.state.pageNumbers.map(Number => (
                        <div className={ `pagination-element ${this.state.currentPage === { Number } ? 'active': ''}` }
                             onClick={ ()=> { this.handlePageChange(Number); } }
                        >
                            { Number }
                        </div>
                    ))}
                </div>
                <div className="pagination-next" onClick={this.handlePaginationNext}>Next</div>
            </div>
        );
    }
}

export default Pagination;

import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumbers: [],
            booksPerPage: 10,
            currentPage: 1,
            totalPages: Math.ceil(props.totalBooks / 10)
        }

        for (let i = 1; i <= this.state.totalPages; i++) {
            this.state.pageNumbers.push(i);
        }
    }

    handlePaginationNext = async () => {
        if(this.state.currentPage<this.state.totalPages) {
            await this.setState({currentPage : this.state.currentPage+1})
        }
        this.handlePageChangeUpdate()
    }

    handlePaginationPrev = () => {
        console.log(this.state.currentPage)
        if(this.state.currentPage>0) {
            this.setState({ currentPage : this.state.currentPage-1 })
        }
        this.handlePageChangeUpdate()
    }
    
    handlePageChange = async (Number) => {
        await this.setState({ currentPage: Number })
        this.handlePageChangeUpdate()
    }
    
    handlePageChangeUpdate = () => {
        console.log(this.state.currentPage)
        this.props.onPageChange(this.state.currentPage);
    }

    render() {
        return(
            <div className="pagination">
                <div className="pagination-prev" onClick={this.handlePaginationPrev}>Prev</div>
                <div className="pagination-list">
                    {this.state.pageNumbers.map(Number => (
                        <div className={ `pagination-element ${this.state.currentPage === {Number} ? 'active': ''}` } onClick={ ()=> { this.handlePageChange(Number) } } >{ Number }</div>
                    ))}
                </div>
                <div className="pagination-next" onClick={this.handlePaginationNext}>Next</div>
            </div>
        );
    }
}

export default Pagination;

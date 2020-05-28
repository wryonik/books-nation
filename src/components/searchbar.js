import React from 'react';
import Filter from './filter';

const Searchbar = (props) => {
    Searchbar.defaultProps = {
        sort: "relevance"
    };

    return(
        <div className="searchbar">
            <form onSubmit={props.handleSort} action="">
                <div className="field">
                    <label className="label">Search By: </label>
                    <input
                        type="text"
                        className="searchfield"
                        placeholder="Search by"
                        onChange={props.handleSearch}
                    />
                </div>
                <div className="field">
                    <label className="label">Book Title: </label>
                    <input
                        type="text"
                        className="searchfield"
                        placeholder="Enter book title"
                        onChange={props.handleBookTitle}
                    />
                </div>
                <div className="field">
                    <label className="label">Author Name: </label>
                    <input
                        type="text"
                        className="searchfield"
                        placeholder="Enter Author name"
                        onChange={props.handleAuthorName}
                    />
                </div>
                <div className="field">
                    <label className="label">Publisher Name: </label>
                    <input
                        type="text"
                        className="searchfield"
                        placeholder="Enter Publisher name"
                        onChange={props.handlePublisherName}
                    />
                </div>
                <button type="submit" className="button">Search</button>
                <div className="properties">
                    <Filter
                        handleLanguageRes={props.handleLanguageRes}
                        handleFilter={props.handleFilter}
                        filter={props.filter}
                        languageRestriction={props.languageRestriction}
                    />
                    <div className="sortBy" onClick={props.handleSort}>
                        <span className="label">Sort By:</span>
                        <button
                            value="relevance"
                            className={ `sortButton left-button ${props.sort === "relevance" ? 'active': ''}` }
                        >
                            Relevance
                        </button>
                        <button
                            value="newest"
                            className={ `sortButton right-button ${props.sort === "newest" ? 'active': ''}` }
                        >
                            Newest
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Searchbar;
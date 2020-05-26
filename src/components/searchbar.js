import React from 'react';

const Searchbar = (props) => {
    Searchbar.defaultProps = {
        sort: "relevance"
    }



    return(
        <div className="searchbar">
            <form onSubmit={props.handleSort} action="">
                <input type="text" className="searchfield" placeholder="Enter book name" onChange={props.handleSearch} />
                <button type="submit" className="button">Search</button>
                <div className="sortBy" onClick={props.handleSort}>
                    <button value="relevance" className={ `sortButton ${props.sort === "relevance" ? 'active': ''}` }>Relevance</button>
                    <button value="newest" className={ `sortButton ${props.sort === "newest" ? 'active': ''}` }>Newest</button>
                </div>
            </form>
        </div>
    );
}

export default Searchbar;
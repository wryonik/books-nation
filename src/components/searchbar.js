import React from 'react';

const Searchbar = (props) => {
    return(
        <div className="searchbar">
            <form onSubmit={props.searchBook} action="">
                <input type="text" className="searchfield" placeholder="Enter book name" onChange={props.handleSearch} />
                <button type="submit" className="button">Search</button>
            </form>
        </div>
    );
}

export default Searchbar;
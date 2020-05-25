import React from 'react';

const Searchbar = (props) => {
    return(
        <div className="searchbar">
            <form action="">
                <input type="text" className="searchfield" placeholder="Enter book name" />
                <button type="submit" className="button">Search</button>
            </form>
        </div>
    );
}

export default Searchbar;
import React from 'react';

const Filter = (props) => {
    return(
        <div className="filter">
            <select className="filterBy" defaultValue="none" onChange={props.handleFilter}>
                <option value="none">None</option>
                <option value="category">Category</option>
                <option value="language">Language</option>
            </select>
        </div>
    );
}

export default Filter;
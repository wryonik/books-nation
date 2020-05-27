import React, { Component } from 'react';

class Header extends Component {
    handleRemove = () => {
        if(this.props.handleFilter) {
            this.props.handleFilter();
        } else if (this.props.handleLanguageRes) {
            this.props.handleLanguageRes();
        }
    }

    render() {
        return(
            <div className="chip">
                <div className="filterName">{this.props.filter}</div>
                <i className="fas fa-times-circle" value="none" onClick={this.handleRemove} />
            </div>
        );
    }
}

export default Header;
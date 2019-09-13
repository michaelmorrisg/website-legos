import React, { Component } from 'react';

class NavItem extends Component {

    renderDropdownOptions(props) {
        let item; 
        if(this.props.dropDownOptions) {
            item = this.props.dropDownOptions.map((option, index) => {
                return <li key={index}>{option.text}</li>
            });
        }
        return item;
    }

    render(props) {
        return (
            <div className="nav-item-wrapper">
                <div className="nav-item">
                    <div>{this.props.text}</div>
                </div>
                <div className="dropdown-main">
                    <ul>
                        {this.renderDropdownOptions()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavItem;
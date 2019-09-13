import React, { Component } from 'react';

class Divider extends Component {

    renderProps(input) {
        if(input) {
            return <h1>{input}</h1>;
        } else {
            return '';
        }
    }

    render() {
        return (
            <div className="divider-main">
                {this.renderProps(this.props.dividerText)}
            </div>
        )
    }
}

export default Divider;
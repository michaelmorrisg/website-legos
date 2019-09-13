import React, {Component} from 'react';

class ButtonBuilder extends Component {

    render(props) {
        return (
            <div>
                <button 
                    className="button-main"
                    style={{
                        backgroundColor: `${this.props.buttonColor}`
                    }}
                >
                    {this.props.buttonText}
                </button>
            </div>
        )
    }
}

export default ButtonBuilder;
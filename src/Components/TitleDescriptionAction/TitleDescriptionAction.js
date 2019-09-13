import React, {Component} from 'react';
import ButtonBuilder from '../ButtonBuilder/ButtonBuilder';

class TitleDescriptionAction extends Component {
    
    optionalPropsRendering(input) {
        if(input) {
            return input
        } else {
            return ''
        }
    }

    render() {
        return (
            <div className="title-description-action-main">
                <h1 style={{fontSize:this.optionalPropsRendering(this.props.titleSize)}}>{this.props.textTitle}</h1>
                <br/>
                <h4 style={{fontSize:this.optionalPropsRendering(this.props.descriptionSize)}}>{this.props.textDescription}</h4>
                <br/>
                <ButtonBuilder 
                    buttonText="Learn More"
                    buttonColor={this.optionalPropsRendering(this.props.buttonColor)}
                />
            </div>
        )
    }
}

export default TitleDescriptionAction;
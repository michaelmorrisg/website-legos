import React, {Component} from 'react';
import TitleDescriptionAction from '../TitleDescriptionAction/TitleDescriptionAction';

class BannerWithImage extends Component {

    render() {
        return (
            <div 
                className="banner-main" 
                style={{
                    backgroundImage: `url(${this.props.bannerImage})`,
                    backgroundSize: this.props.backgroundSize ? this.props.backgroundSize : "",
                    backgroundPosition: this.props.backgroundPosition ? this.props.backgroundPosition : "",
                    }}
            >
            <TitleDescriptionAction 
                textTitle={this.props.textTitle}
                textDescription={this.props.textDescription}
                titleSize={this.props.titleSize}
                descriptionSize={this.props.descriptionSize}
                buttonColor={this.props.buttonColor}
            />
            </div>
        )
    }
}

export default BannerWithImage;
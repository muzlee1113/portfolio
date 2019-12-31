import React, { Component } from "react";
import ImageZoom from 'react-medium-image-zoom'
import { HelpBlock } from "react-bootstrap";

// const omit = (obj, omitKey) =>
// 	Object.keys(obj).reduce((result, key) => {
// 		if (key !== omitKey) {
// 			result[key] = obj[key];
// 		}
// 		return result;
// 	}, {});

const loadingStyles = {
    display: "block",
    width:"100%",
    position: "absolute",
    top: "50%",
    left: "50%",
	// filter: "blur(4px)",
	// transition: "opacity ease-in 1000ms",
	// clipPath: "inset(0)"
};

const loadDoneStyles = {
    display: "none",
}



export default class ProgressiveImage extends Component {
	constructor(props) {
		super(props);
		this.state = { highResImageLoaded: false };
	}
	render() {

		const { highResImageLoaded } = this.state;
		return (
			<div style={{display: "block", position: "relative"}}>
				<ImageZoom
                    image={{
                        src: this.props.src,
                        alt: '',
                        className: 'masonry-image',
                        onLoad:() => {
                            this.setState({ highResImageLoaded: true },()=>{
                                console.log(this.props.src+" done")
                            });

                        }
                    }}
				/>
                <div uk-spinner="ratio: 1"
                    style={
                        highResImageLoaded?
                        (loadDoneStyles):(loadingStyles)
                    }
                
                ></div>

				{/* <img
					{...filteredProps}
                    className={this.props.className}
                    style={
                        highResImageLoaded?
                        (overlayStylesDone):(overlayStyles)
                    }
					
					src={process.env.PUBLIC_URL + overlaySrc}
				/> */}
			</div>
		);
	}
}
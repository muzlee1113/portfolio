import React, { Component } from "react";
import ImageZoom from 'react-medium-image-zoom'
import { HelpBlock } from "react-bootstrap";

const omit = (obj, omitKey) =>
	Object.keys(obj).reduce((result, key) => {
		if (key !== omitKey) {
			result[key] = obj[key];
		}
		return result;
	}, {});

const overlayStyles = {
    display: "block",
    width:"100%",
    position: "absolute",
    top: "0%",
    left: "0%",
	filter: "blur(4px)",
	transition: "opacity ease-in 1000ms",
	clipPath: "inset(0)"
};

const overlayStylesDone = {
    display: "block",
    top: "0%",
    left: "0%",
    width:"100%",
    position: "absolute",
    opacity: "0"
}



export default class ProgressiveImage extends Component {
	constructor(props) {
		super(props);
		this.state = { highResImageLoaded: false };
	}
	render() {
        const { overlaySrc } = this.props;
        console.log(overlaySrc)

		const { highResImageLoaded } = this.state;
		let filteredProps = omit(this.props, "overlaySrc");
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
					{...filteredProps}
					
					ref={img => {
						this.highResImage = img;
					}}
				/>
                {/* <div uk-spinner="ratio: 3"
                    style={
                        highResImageLoaded?
                        (overlayStylesDone):(overlayStyles)
                    }
                
                ></div> */}

				<img
					{...filteredProps}
                    className={this.props.className}
                    style={
                        highResImageLoaded?
                        (overlayStylesDone):(overlayStyles)
                    }
					
					src={process.env.PUBLIC_URL + overlaySrc}
				/>
			</div>
		);
	}
}
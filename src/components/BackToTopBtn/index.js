import React, { Component } from "react";
import './style.css'
import { Button } from 'react-bootstrap';

/** React components for scrolling back to the top of the page **/


class BackToTopBtn extends Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render() {
        return <Button variant="outline-dark" title='Back to top' className='scroll'
            onClick={() => { this.scrollToTop(); }}><i className="fas fa-caret-up arrow-up"></i></Button>;
    }
}

export default BackToTopBtn
import React, { Component } from "react";
import { Link } from "react-router-dom";


class Hamburger extends Component {
    render() {
        return (
            <nav>
            <ul id="menu">
                <div className="font">
                    <ul>
                        <li>
                            <Link
                                to="/"
                                onClick={this.props.collapse}


                            ><span className="mr-2 align-text-top" uk-icon="pencil"></span>DESIGN</Link>
                        </li>
                        <li>
                            <Link
                                to="/code"
                                onClick={this.props.collapse}

                            ><span className="mr-2 align-text-top" uk-icon="code"></span>CODE</Link>
                        </li>
                        <li>
                        <Link
                                to="/play"
                                onClick={this.props.collapse}

                            ><span className="mr-2 align-text-top" uk-icon="happy"></span>PLAY</Link>
                        
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={this.props.collapse}

                            ><span className="mr-2 align-text-top" uk-icon="hashtag"></span>ABOUT</Link>
                        </li>
                    </ul>
                </div>
            </ul>
        </nav>
       )
    }
}


export default Hamburger;



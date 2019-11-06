import React, { Component } from "react";
import { Button } from 'react-bootstrap';

/** React components for scrolling back to the top of the page **/


class ProjectPagination extends Component {
    
    render() {
        return <div className="project_pagination_wrapper">
            <div className="project_pagination">
                <a href={this.props.prevUrl?(this.props.prevUrl):('/')} className="left-pagination"><span className="align-middle mr-2" href="" uk-icon="triangle-left"></span>{this.props.prevName?(this.props.prevName):('Back To Home')}</a>
                <a href={this.props.nextUrl} className="right-pagination">{this.props.nextName}<span className="align-middle ml-2" href="" uk-icon="triangle-right"></span></a>
            </div>
        </div>
    }
}

export default ProjectPagination


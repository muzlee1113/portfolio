import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import projects from './projects.json'
/** React components for scrolling back to the top of the page **/


class ProjectPagination extends Component {
    
    // render() {
    //     const {pagination} = this.props
    //     return <div className="project_pagination_wrapper">
    //         <div className="project_pagination">
    //             <a href={pagination.prev['url']?(pagination.prev['url']):('/')} className="left-pagination"><span className="align-middle mr-2" href="" uk-icon="triangle-left"></span>{pagination.prev['name']?(pagination.prev['name']):('Back To Home')}</a>
    //             <a href={pagination.next['url']?(pagination.next['url']):("/")} className="right-pagination">{pagination.next['name']?(pagination.next['name']):('Back To Home')}<span className="align-middle ml-2" href="" uk-icon="triangle-right"></span></a>
    //         </div>
    //     </div>
    // }
    render() {
        const {pagination} = this.props
        return <div className="project_pagination_wrapper">
            <div className="project_pagination">
                <a href={(pagination-1)>-1?(projects[(pagination-1)].url):('/')} className="left-pagination"><span className="align-middle mr-2" href="" uk-icon="triangle-left"></span>{(pagination-1)>-1?(projects[(pagination-1)].name):('Back To Home')}</a>
                <a href={(pagination+1)<projects.length?(projects[(pagination+1)].url):("/")} className="right-pagination">{(pagination+1)<projects.length?(projects[(pagination+1)].name):('Back To Home')}<span className="align-middle ml-2" href="" uk-icon="triangle-right"></span></a>
            </div>
        </div>
    }

}

export default ProjectPagination


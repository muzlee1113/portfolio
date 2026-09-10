import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { getPrevNextProject } from './projectNav'
/** React components for scrolling back to the top of the page **/


class ProjectContentNav extends Component {

    render() {
        const {pagination, contents} = this.props
        const {prev, next} = getPrevNextProject(pagination)
        return <div className="scrollby left_bar_wrapper">

        <ul
        data-uk-scrollspy-nav="closest: li; scroll: true; offset:60">
            <div>
                <a href={prev?prev.url:('/')} className="project_brief_content contentnav_link">
                    <span uk-icon="icon:triangle-left"></span>{prev?('prev project'):('home')}
                </a>
            </div>
            <br/>

            {contents.map((item)=><li className="uk-l project_brief_content"><a className="contentnav_link" href={item.id}>{item.name}</a></li>)}
            <br/>
            <div>
                <a href={next?next.url:('/')} className="project_brief_content contentnav_link">{next?('next project'):('home')}
                    <span uk-icon="icon:triangle-right"></span>
                </a>
            </div>
        </ul>


    </div>
    }
}

export default ProjectContentNav


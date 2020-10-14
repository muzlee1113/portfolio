import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import projects from './projects.json'
/** React components for scrolling back to the top of the page **/


class ProjectContentNav extends Component {
    
    render() {
        const {pagination, contents} = this.props
        return <div className="scrollby left_bar_wrapper">
                              
        <ul  
        data-uk-scrollspy-nav="closest: li; scroll: true; offset:60">
            <div><a href={(pagination-1)>-1?(projects[(pagination-1)].url):('/')} className="project_brief_content"><span uk-icon="icon:triangle-left"></span>{(pagination-1)>-1?('prev project'):('home')}</a></div>
            <br/>
            
            {contents.map((item)=><li className="uk-l project_brief_content"><a href={item.id}>{item.name}</a></li>)}
            <br/>
            <div><a href={(pagination+1)<projects.length?(projects[(pagination+1)].url):('/')} className="project_brief_content">{(pagination+1)<projects.length?('next project'):('home')}<span uk-icon="icon:triangle-right"></span></a></div>
        </ul>                             
        
    
    </div>  
    }
}

export default ProjectContentNav


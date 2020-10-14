import React, { Component } from "react";
import './style.css'
import { Button } from 'react-bootstrap';
import projects from '../projects.json'

/** React components for scrolling back to the top of the page **/





class BackToTopBtn extends Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0,
            content: false
        };
    }

    toggleContent=()=>{
        this.setState({
            content: !this.state.content
        })
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
        const {pagination, contents} = this.props
        return (<>
        {this.state.content?(<>
        
        
        <div className="content">
        <ul data-uk-scrollspy-nav="closest: li; scroll: true; offset:60">
        <p className="project_brief_title">Table of Contents</p>
        {contents.map((item)=><li className="uk-l project_brief_content"><a href={item.id}>{item.name}</a></li>)}
        

        </ul>

        <hr/>
        <div className="pagination">
        <a href={(pagination-1)>-1?(projects[(pagination-1)].url):('/')} className="project_brief_content"><span uk-icon="icon:triangle-left"></span>{(pagination-1)>-1?('prev project'):('home')}</a>
            <a href={(pagination+1)<projects.length?(projects[(pagination+1)].url):("/")} className="project_brief_content">{(pagination+1)<projects.length?('next project'):('home')}<span uk-icon="icon:triangle-right"></span></a>
        </div>
       
        
        </div>
        <Button variant="outline-secondary" className='scroll'
            onClick={() => { 
                this.toggleContent()
                // this.scrollToTop(); 
            }}><span uk-icon="icon: close"></span></Button>
        
        </>):(<>
            <Button variant="outline-secondary" className='scroll'
            onClick={() => { 
                this.toggleContent()
                // this.scrollToTop(); 
            }}><span uk-icon="icon: list"></span></Button>
        
        </>)}
        
        

        </>)
        
    }
}

export default BackToTopBtn
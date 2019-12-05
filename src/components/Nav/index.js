import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";



class Nav extends Component {
    state={
        collapse: true
    }

    hamburgerHandler = (e)=>{
        // e.preventDefault()
        this.setState({
            collapse: !this.state.collapse
        })
        console.log("click hamburger")
    }
    render(){
        return (
    
    this.state.collapse?(
        <>
        <header>
            <div className="navigation-items">
                <NavLink to="/" exact><img id="logo" src={process.env.PUBLIC_URL + '/images/lywLogo.png'}/></NavLink>
                <div className="nav_link_container">
        
                    <NavLink 
                    // id="ptfpage" 
                    activeClassName="link active_link"
                    className="nav_link"
                    to="/" 
                    exact><span className="mr-2 align-text-top" uk-icon="pencil"></span>Design</NavLink>
                    <NavLink 
                    // id="ptfpage" 
                    activeClassName="link active_link"
                    className="nav_link"
                    to="/code" 
                    exact><span className="mr-2 align-text-top" uk-icon="code"></span>Code</NavLink>
                     <NavLink 
                    // id="aboutpage" 
                    activeClassName="link active_link"
                    className="nav_link"
                    to="/about" exact><span className="mr-2 align-text-top" uk-icon="happy"></span>About</NavLink>
                </div>
                <div onClick={this.hamburgerHandler} className="hamburger"><span uk-icon="icon: menu; ratio: 1.6"></span></div>
            </div>
            
        </header>
        </>):
        (<>
        <header>
        
            <div className="navigation-items">
                <NavLink to="/" exact><img id="logo" src={process.env.PUBLIC_URL + '/images/lywLogo.png'}/></NavLink>
                <div onClick={this.hamburgerHandler} className="hamburger"><span uk-icon="icon: menu; ratio: 1.6"></span></div>
            </div>
            
        </header>
        <Hamburger collapse={this.hamburgerHandler} logout={this.logoutHandler}/>
         
        </>)
       
        )}
}

export default Nav;


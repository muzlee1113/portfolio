import React, { Component } from 'react';
import { NavLink } from "react-router-dom";



function Nav() {
    return (<>
        <header>
            <NavLink to="/" exact><img id="logo" src={process.env.PUBLIC_URL + '/images/lywLogo.png'}/></NavLink>
                <div className="topnav" id="myTopnav">
                    <NavLink 
                    // id="aboutpage" 
                    activeClassName="link active_link"
                    className="link"
                    to="/about" exact>About</NavLink>
                    <NavLink 
                    // id="ptfpage" 
                    activeClassName="link active_link"
                    className="link"
                    to="/play" 
                    exact>Play</NavLink>
                    <NavLink 
                    // id="ptfpage" 
                    activeClassName="link active_link"
                    className="link"
                    to="/code" 
                    exact>Code</NavLink>
                    <NavLink 
                    // id="ptfpage" 
                    activeClassName="link active_link"
                    className="link"
                    to="/" 
                    exact>Design</NavLink>
                </div>
        </header>
        </>)
}

export default Nav;


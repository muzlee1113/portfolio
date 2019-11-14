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
                    className="nav_link"
                    to="/about" exact><span className="mr-2 align-text-top" uk-icon="happy"></span>About</NavLink>
                    {/* <NavLink 
                    // id="ptfpage" 
                    activeClassName="link active_link"
                    className="nav_link"
                    to="/play" 
                    exact><span className="mr-2 align-text-top" uk-icon="game"></span>Play</NavLink> */}
                    <NavLink 
                    // id="ptfpage" 
                    activeClassName="link active_link"
                    className="nav_link"
                    to="/code" 
                    exact><span className="mr-2 align-text-top" uk-icon="code"></span>Code</NavLink>
                    <NavLink 
                    // id="ptfpage" 
                    activeClassName="link active_link"
                    className="nav_link"
                    to="/" 
                    exact><span className="mr-2 align-text-top" uk-icon="pencil"></span>Design</NavLink>
                </div>
        </header>
        </>)
}

export default Nav;


import React, { Component } from 'react';
import { NavLink } from "react-router-dom";



function Nav() {
    return (<>
        <header>
            <NavLink to="/" exact><img id="logo" src={process.env.PUBLIC_URL + '/images/lywLogo.png'}/></NavLink>
                <div className="topnav" id="myTopnav">
                    <a 
                    className="link"
                    id="resume" 
                    href="https://drive.google.com/file/d/1As4-SrNYvTY9cL-v37R0IOLrn9pBt2rm/view">Résumé</a>
                    <NavLink 
                    // id="aboutpage" 
                    activeClassName="link active_link"
                    className="link"
                    to="/about" exact>About</NavLink>
                    <NavLink 
                    // id="ptfpage" 
                    activeClassName="link active_link"
                    className="link"
                    to="/" 
                    exact>Work</NavLink>
                </div>
        </header>
        </>)
}

export default Nav;


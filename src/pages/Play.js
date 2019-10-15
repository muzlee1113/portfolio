import React, {Component} from "react";
import '../index.css';
import PlayPanel from "../components/PlayPanel"
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"



class Play extends Component {
    render(){
        return (
            <>
            <ScrollToTopOnMount />
            <main>
            <section className="leading">
                <h1>Other things I do for fun<span style={{"color": "#9D2721"}}>.</span></h1>
                <h3>All these little pieces made up of me.</h3>
            </section>
                <div className="divider"></div>
                <PlayPanel />
            </main>
            </>)
    }}


export default Play;

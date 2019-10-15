import React, {Component} from "react";
import '../index.css';
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"




class Researcher extends Component {
    render(){
        return (
            <>
            <ScrollToTopOnMount />
            <main>
            <section className="leading">
                <h1>I was a social science researcher<span style={{"color": "#9D2721"}}>.</span></h1>
                <h3>I was enthusiastic about unearthing what were beneath a phenomenon.</h3>
                <p>I became a social science researcher in graduate school, focusing on communication, social media, media education.</p>
            </section>
                <div className="divider"></div>
                <p>some works</p>
            </main>
            </>)
    }}


export default Researcher;

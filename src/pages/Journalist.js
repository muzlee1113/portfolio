import React, {Component} from "react";
import '../index.css';
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"




class Journalist extends Component {
    render(){
        return (
            <>
            <ScrollToTopOnMount />
            <main>
            <section className="leading">
                <h1>I was an journalist<span style={{"color": "#9D2721"}}>.</span></h1>
                <h3>Since then building empathy with others and making changes by storytelling have become my life-long pursuit.</h3>
                <p>I was trained as journalist and TV director in my undergraduate.</p>
            </section>
                <div className="divider"></div>
                <p>some works</p>
            </main>
            </>)
    }}


export default Journalist;


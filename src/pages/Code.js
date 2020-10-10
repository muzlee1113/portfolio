import React, {Component} from "react";
import '../index.css';
import LeadingForWork from "../components/LeadingForWork"
import DeveloperPanel from "../components/DeveloperPanel"
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"




class Code extends Component {
    render(){
        return (
            <>
            <ScrollToTopOnMount />
            <main>
            <section className="leading">
          
                <h1>Coding is fun<span style={{"color": "#9D2721"}}>. 🤖</span></h1>
                <h3>It brought me pure pleasure of making.</h3>
            </section>
                <div className="divider"></div>
                <DeveloperPanel />
            </main>
            </>)
    }}


export default Code;

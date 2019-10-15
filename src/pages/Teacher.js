import React, {Component} from "react";
import '../index.css';
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"




class Teacher extends Component {
    render(){
        return (
            <>
            <ScrollToTopOnMount /> 
            <main>
            <section className="leading">
                <h1>I was an teacher<span style={{"color": "#9D2721"}}>.</span></h1>
                <h3>I solved the students’ problems and taught them how to solve problems. </h3>
                <p>I worked as an ESL teacher and instructional designer for two years in the biggest provider of private educational services in China. I spent every weekend and holiday with my students in the past two years and taught more than 200 middle school students. Here are pictures of the class and the posters created by my students.</p>
            </section>
                <div className="divider"></div>
                <p>some works</p>
            </main>
            </>)
    }}


export default Teacher;


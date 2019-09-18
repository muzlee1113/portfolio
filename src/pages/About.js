import React from "react";
import '../index.css';


function About() {

    return (<>
        <main className="about_content">
            <section className="leading">
                <p className="leading-bigtext">About<span className="leading-bigtext" style={{"color": "#9D2721"}}>.</span></p>
                <p className="leading-text">Something more about me.</p>
            </section>
            <section className="text">
                <div className="textcontainer">
                    <p><b>Hi, I'm Yuwen</b>, a user-focused Designer and Front-End Developer motivated to integrate technologies and design thinking to solve problems and improve user’s experience. I'm now a student of Human Centered Design & Engineering (HCDE) Program at the University of Washington, Seattle. I was professionally trained in the Full-stack Web Development Boot Camp at Univerisity of Minnesota, learning HTML/CSS, React, Javascript, Node.js, MySQL, MongoDB, etc.</p>
                    <br/>
                    <p>I enjoy leveraging my academic background in Social Science, knowledge in human-centered design, and skills in programming to implement the user’s needs and wants, translate research insights into user-friendly product features. </p>
                    <br/>
                    <p>I was passionate about approaching challenges of the real world from the angles of both a designer and a developer, so as to speak for the users, drive cross-functional collaboration and create desirable, feasible, and viable products that can help people thrive in a digital environment.</p>
                </div>
            </section>
        </main>
    </>)
}


export default About;

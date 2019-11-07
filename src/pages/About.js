import React from "react";
import '../index.css';
import { NavLink } from "react-router-dom";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"



function About() {

    return (<>
    <ScrollToTopOnMount />
        <main className="leading">
            {/* <section className="about_wrapper">
                <h1 className="leading-bigtext">Something more about me<span className="leading-bigtext" style={{ "color": "#9D2721" }}>.</span></h1>
                <h3 className="leading-text"></h3>
                <div className="textcontainer">
                    <p><b>Hi, I'm Yuwen.</b> If you found your tongue twisted, just say ‘yuan’. It’s pretty close 😝. </p>
                    <p>I’m now a student at the University of Washitong (Go Hustkies 🐾 !), </p>
                    <p>studying human-centered design and engineering 🎨 📐 💻 📱.</p>
                    <p>Before HCDE, I worked in education industry for 3 years as an <NavLink className="text_link" to="/teacher" exact>instructional designer</NavLink> 👩‍🏫 .</p>
                    <p>Last year, I obtained a full-stack web development certificate at the University of Minnesota 👩‍💻.</p>
                    <p>Even before that, I completed <NavLink className="text_link" to="/researcher" exact>MA (Communication, Media & Information Literacy)</NavLink> 👩‍🎓</p>
                    <p>and BA (English Language and Literature) at Communication University of China 🇨🇳 .</p>
                    <p>I had a minor in <NavLink className="text_link" to="/journalist" exact>TV directing</NavLink> 🎬.</p>
                    <p>I’m a night owl 🦉 and dog person 🐶. </p>
                    <p>When I’m not sitting in front of my computer screen, sketching or coding, I’m probably at the gym 🏋️‍, in the kitchen 👩‍🍳 or on a trip ✈️.</p>
                </div>
            </section> */}
            <section className="about_wrapper">
                <h1 className="leading-bigtext">Something more about me<span className="leading-bigtext" style={{ "color": "#9D2721" }}>.</span></h1>
                <h3 className="leading-text"></h3>
                <div className="textcontainer">
                    <p><b>Hi, I'm Yuwen.</b> If you found your tongue twisted, just say ‘you win’. It’s pretty close 😝. </p>
                    <p>I’m now a student at the University of Washington (Go Huskies 🐾 !), </p>
                    <p>studying human-centered design and engineering 🎨 📐 💻 📱.</p>
                    <p>Before HCDE, I worked in education industry for 3 years as a product & instructional designer 👩‍🏫 .</p>
                    <p>Last year, I obtained a full-stack web development certificate at the University of Minnesota 👩‍💻.</p>
                    <p>Even before that, I completed MA (Communication, Media & Information Literacy) 👩‍🎓</p>
                    <p>and BA (English Language and Literature) at Communication University of China 🇨🇳 .</p>
                    <p>I had a minor in TV directing 🎬.</p>
                    <p>I’m a night owl 🦉 and a dog person 🐶. </p>
                    <p>When I’m not sitting in front of my computer screen, sketching or coding, I’m probably at the gym 🏋️‍, in the kitchen 👩‍🍳 or on a trip ✈️.</p>
                    <p>Feel free to drop me a message on <a href="https://www.linkedin.com/in/yuwen-li-176a43105/">LinkedIn</a> or by <a href="mailto:liyuwen@uw.com"></a>Email ✉️.</p>
                    <p>And let's grab coffee ☕️!</p>
                </div>
            </section>
        </main>
    </>)
}


export default About;

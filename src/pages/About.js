import React from "react";
import { Row, Col } from "react-bootstrap";
import "../index.css";
import { NavLink } from "react-router-dom";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

function About() {
  return (
    <>
      <ScrollToTopOnMount />
      <main className='leading'>
        <section className='about_wrapper'>
          <h1 className='leading-bigtext'>
            Something more about me
            <span className='leading-bigtext' style={{ color: "#9D2721" }}>
              .
            </span>{" "}
            😃
          </h1>
          <h3 className='leading-text'>Nice to meet you.</h3>
          <Row>
            <Col md={3} sm={12}>
              <img
                className='project_illustration'
                src={process.env.PUBLIC_URL + "/images/me.png"}
                alt=' '
              />
            </Col>
            <Col md={9} sm={12}>
              <div className='textcontainer'>
                <p>
                  <b>Hi, I'm Yuwen.</b> If you found your tongue twisted, just
                  say ‘you win’. It’s pretty close 😝.{" "}
                </p>
                <p>
                  I’m now a UX designer at Tableau working on agentic analytics;
                  previously tools for data preparation, modeling & governance.
                </p>
                <p>
                  I graduated from the Human Centered Design & Engineering
                  program
                </p>
                <p>at the University of Washington (Go dawg 🐕 !!)</p>
                <p>
                  Before HCDE, I worked in education industry for 3 years as a
                  product & instructional designer 👩‍🏫 .
                </p>
                <p>
                  Even before that, I obtained a web development certificate at
                  the University of Minnesota 👩‍💻
                </p>
                <p>
                  (with which I made the decision that I regret till now: to
                  code this portfolio from scatch 😂)
                </p>
                <p>
                  I completed MA (Communication, Media & Information Literacy)
                  👩‍🎓
                </p>
                <p>
                  and BA (English Language and Literature) at Communication
                  University of China 🇨🇳 .
                </p>
                <p>I had a minor in TV directing & Interactive Media 🎬.</p>
                <p>I’m a night owl 🦉 and a dog person</p>
                <p>
                  (see my dog{" "}
                  <a href='https://www.instagram.com/doggo.argo/'>
                    Argo's instagram
                  </a>
                  , more interesting than my work, I promise).{" "}
                </p>
                <p>When I’m not sketching or coding on my laptop,</p>
                <p>
                  I’m probably at the gym 🏋️‍, in front of my easle 🎨, or on a
                  hike ⛰.
                </p>
                <p>
                  Feel free to drop me a message on{" "}
                  <a href='https://www.linkedin.com/in/yuwen-li-176a43105/'>
                    LinkedIn
                  </a>{" "}
                  or by <a href='mailto:muzlee1113@gmail.com'>Email</a> ✉️.
                </p>
                <p>And let's grab coffee ☕️ !</p>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
}

export default About;

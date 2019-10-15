import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"



function LightUp() {

    return (<>
        <ScrollToTopOnMount />
        <div className="project_container">
            <section className="project_head">
                <h1>Light Up</h1>
                <h3>A user-friendly lighting system of a standard hotel room that offer guests home-like experience.</h3>
                <div className="project_info">June 23, 2018 (1 day), Workshop Project</div>
            </section>
            <section className="project_body">
                <h2>INTRO</h2>
                <p>The lighting system of a hotel room is sometimes confusing and inconvenient: complicated control panel, perplexing matching between lights and switches, inaccessible switches in darkness, etc. In a UX workshop, my team tried to figure out a way to redesign the system an improve the experience.</p>
                <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/LightUp/intro.jpg"} />
            </section>
            <section className="project_body">
                <h2>BACKGROUND</h2>
                <h5>Redesign Hotel Room Light Control System</h5>
                <ul>
                    <li >Hotel Type: A typical business hotel</li>
                    <li >Guests: Business travelers, tour couples, individual tourists</li>
                </ul>
            </section>
            <section className="project_body">
                <h2>SECONDARY RESEARCH</h2>
                <h5>Classify the artifacts</h5>
                <p>The typical layout and lighting system of a business hotel room is as follow.</p>
                <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/LightUp/layout.png"} />
                <ul>
                    <p>There are 8 different lights in the room. The lights fall into 2 kinds:</p>
                    <li ><b>Ambient Lighting</b>: welcome light, central light, bathroom light</li>
                    <li ><b>Task Lighting</b>: work lamp, floor lamp, bed lamp, mirror light, cabinet light</li>
                </ul>
                <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/LightUp/light_switches.png"} />
            </section>
            <section className="project_body">
                <h2>USER RESEARCH</h2>
                <h5>What makes light system of your hotel room annoying?</h5>
                <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/LightUp/problem_space.png"} />

                <p>Based on research, the problem space can be located as follow:</p>
                <h6>① Unclear on/off condition</h6>
                <li >There are more than two central light switches in the room, one set near the door, one near the bed, connected in a parallel circuit. In this case, the control is complex and confusing sometimes.</li>
                <h6>② Inaccessible controls</h6>
                <li>Individual switches are located near the lights. Guests have to approach them and control them separately;</li>
                <li>It is hard to reach out for the switches in darkness.</li>
                <h6>③ Unclear matching between lights and controls</h6>
                <li >There are too many switches or button on the panels, which results in a steep learning curve for the guests.</li>
            </section>
            <section className="project_body">
                <h2>THE SOLUTION</h2>
                <h5>How might we make light control an intuitive and foolproof experience?</h5>
                <h6>Problematic Experience</h6>
                <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/LightUp/storyboard.png"} />
                <h6>Improved Experience</h6>
                <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/LightUp/storyboard_improved.png"} />
                <div className="divider"></div>
                <ul>
                <li class="p-list">The Knob</li>
                <p>In order to reduce the learning curve, we found a way to cut down the number of switches, inspired by radio/climate control knob on cars.</p>
                <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/LightUp/knob_intro.jpg"} />
                <p>The knob can either be controlled by pressing or turning. It turns continuously: clockwise scales up, counterclockwise scales down, with a feeling of detents to produce discrete selections. A backlit will be activated when the user touches the knob or the panel.</p>
                <img alt='' className="project_illustration_extrasmall" src={process.env.PUBLIC_URL + "/images/LightUp/knob.png"} />
                <p>There are two knobs in the room: one at the entrance and one beside the bed. The settings of the two knobs are slightly different:</p>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6} lg={8}>
                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/LightUp/knob_scales.gif"} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                        <p className="project_caption" style={{"margin":"0.5em", "marginTop": "1em"}}><b>At the Entrance</b></p>
                        <p className="project_caption" style={{"margin":"0.5em"}}>Press on: All Lights On</p>
                        <p className="project_caption" style={{"margin":"0.5em"}}>Press off: All Lights Off</p>
                        
                        <p className="project_caption" style={{"margin":"0.5em", "marginTop": "1em"}}><b>Beside the Beds</b></p>
                        <p className="project_caption" style={{"margin":"0.5em"}}>Press on: Navigational Lights On</p>
                        <p className="project_caption" style={{"margin":"0.5em"}}>Press off: All Lights Off</p>
                        
                        <p className="project_caption" style={{"margin":"0.5em", "marginTop": "1em"}}><b>Different Scales</b></p>
                        <p className="project_caption" style={{"margin":"0.5em"}}>Scale 1: Navigational Lights On</p>
                        <p className="project_caption" style={{"margin":"0.5em"}}>Scale 2: Navigational Lights On + Lamps Dim Lights</p>
                        <p className="project_caption" style={{"margin":"0.5em"}}>Scale 3: Navigational Lights On + Lamps Bright Lights</p>
                        <p className="project_caption" style={{"margin":"0.5em"}}>Scale 4: Navigational Lights On + Lamps Bright Lights + Welcome Light On + Central Light On</p>
                        </Col>
                    </Row>
                </Container>
                <div className="divider"></div>
                
                <li class="p-list">The Welcome Light</li>
                <p>The welcome light will be lit when a guest swiped the keycard and will turn off when the keycard is inserted into the power wall slot</p>
                <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/LightUp/welcome_light.png"} />
                <div className="divider"></div>
                
                <li class="p-list">The Navigational Light</li>
                <p>Anti-stumble nightlight was added under the bed and at the edge of the wall to lead the guest in darkness.</p>
                <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/LightUp/navigational_light.jpg"} />

                <div className="divider"></div>
                <li class="p-list">Individual Touch Switches</li>
                <p>Each of the lamps and mirror light can be controlled individually by touch switches beside. To better indicate the on/off condition, a light ring will show up when the light is on.</p>
                <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/LightUp/individual_light.png"} />
                <p className="project_info">* The demands of the knob is prioritized, i.e., once the guest press the knob to turn off all the light, then all lights will turn off including lamps and bathroom lights.</p>
                </ul>
            </section>
        
            <section className="project_body">
                <h2>TAKEAWAYS</h2>
                <h6>Put myself in users' shoes</h6>
                <p>When I played a role as a customer, dragging a suitcase, trying to open the light in a hotel room, and getting up from the bed and trying to open a dim light in pitch-dark, I found that empathy asked one to feeling with others, to experience and, therefore, understand what others experienced.</p>
            </section>
            
        </div>
        <BackToTopBtn />
        </>)
}


export default LightUp;



import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'

const contents = [
    {
        id: "#overview",
        name: "Project Overview"

    },
    {
        id: "#intro",
        name: "Problem"

    },
    {
        id: "#demo",
        name: "Solution"
    },
    {
        id: "#research",
        name: "Research & Synthesize"

    },
    {
        id: "#design",
        name: "Ideate & Design"

    },
    {
        id: "#deliver",
        name: "Final Solution"

    },
    {
        id: "#todo",
        name: "To dos"

    },

    {
        id: "#take",
        name: "Takeaways"

    },
]

const prev = {
    url: "/work/Weather",
    name: "Weather"
}

const next = {
    url: "",
    name: ""
}


function Specs() {

    return (<>
        <ScrollToTopOnMount />
        <div className="project_head_container">
            <section className="project_head">
                <h1>Specs</h1>
                <h3>A figma plugin that help UX/UI designers specify and communicate their design.</h3>
                <div className="project_info">January 2020 (1 day), Individual Project (Still in progress)</div>
            </section>
        </div>
       
        <div className="project_overview_container" id="overview">
            <Row>
                <Col sm={12} md={6}>
                    <div className="project_overview_title">Background</div>
                    <div className="project_overview_content"> This is a "design + coding" challenge I gave to myself to solve a problem that exists in design-dev communication, which is a field that I have been passionate about. I did it to practice using UCD process to solve real-life problem.</div>

                </Col>
                <Col></Col>
                <Col sm={4} md={2}>

                    <div className="project_overview_title">My Role</div>
                    <div className="project_overview_content">Research</div>
                    <div className="project_overview_content">Interaction Design</div>
                    <div className="project_overview_content">Prototyping</div>
                    <div className="project_overview_content">Develope</div>
                </Col>
                <Col sm={4} md={3}>

                    <div className="project_overview_title">Team</div>
                    <div className="project_overview_content">Only Me</div>
                </Col>

            </Row>
        </div>






            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">

                            {/* <div className="project_brief_container">
                                <div className="project_brief_title">Background</div>
                                <div className="project_brief_content">This is a individual project I did in a UX Boot Camp.</div>
                            </div> */}
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;top: #scrollstart"
                            // style={{position: "fixed", right: "2vw", bottom: "5vh"}}
                            >
                                <ul className="unset-Sticky" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                                    <div><a href={prev['url'] ? (prev['url']) : ('/')} className="project_brief_content"><span uk-icon="icon:triangle-left"></span>{prev['url'] ? ('prev project') : ('Home')}</a></div>
                                    <br />

                                    {contents.map((item) => <li className="uk-l project_brief_content"><a href={item.id}>{item.name}</a></li>)}
                                    <br />
                                    <div><a href={next['url'] ? (next['url']) : ('/')} className="project_brief_content">{next['url'] ? ('next project') : ('Home')}<span uk-icon="icon:triangle-right"></span></a></div>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>
                        <div className="project_container">
                            <section className="project_body" id="intro">
                                <div id="scrollstart"></div>

                                <h2>Problem</h2>
                                <h5>UX/UI Designers have a hard time communicating with developers</h5>
                                <p>The other day, my friend, a UX Designer, complained to me that</p>
                                <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                        <p className="project_quote_text">I’ve been having a hard time communicating design specs with engineering team utilizing Figma, but I don't have any coding background.</p>
                                    </div>

                                </div>
                                <p>I was very suprised since she made beautiful interactive mockups on Figma. This conversation reminded me again of what I witnessed when I was worked as a UX intern in a design studio: my design colleagues kept running back and forth, getting feedback from the development team and adding things that they had neglected or editing things that didn't work. </p>

                                <p>As a designer know how to code, I also experienced some muddles leaving comments or annotations on my prototypes, explaining details of interations and creating different states of a icon button with carefully worded label beside. </p>
                                <ImageZoom
                                    image={{
                                        src: '/images/Specs/problem.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <div className="project_caption text-center">This is the Figma page of <a className="text_link" href="https://github.com/dabreegster/abstreet/">A/B Street</a>, a game that I'm working on as UX designer.</div>
                                
                                <p>Even if designers work with advanced prototyping tool such as Figma, which offers detailed specifications and even codes, designers still feel it a struggle to deliver their design to developers.</p>
                                <p>Therefore, I was very interested in the following design question:</p>
                                <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                        <p className="project_quote_text">How can I deliver a tool that helps UX/UI designers better communicate their design to the development team on Figma?</p>
                                    </div>

                                </div>
                                
                            </section>
                        </div>

                        <section className="project_body" id="demo">
                            <h2>Solution</h2>
                            <h5>Demo Video</h5>
                            <p>I designed and developed a Figma Plugin that helps designers to deliver specified prototypes with guided notes to developers. Here is a demo video of a implemented feature (the button design specification).</p>
                            <div style={{ display: 'relative', padding: "20px 0 20px" }} className="d-flex justify-content-center">
                                <iframe style={{ width: '100%', minHeight: '540px' }} src="https://www.youtube.com/embed/nQ9lpMrf1zk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </section>

                        <div className="project_container" id="research">

                            <section className="project_body">
                                <h2>Research & Synthesis</h2>
                                <h5>What are the obstacles in design-to-dev communication?</h5>
                                {/* <h6>User Journey Map</h6> */}
                                <h6>Key Problems</h6>
                                <p>Based on my observations and previous talks with different UX/UI designers, I realized the following obstacles that make the communication hard:</p>
                                <li>When designing, designers neglect important details that creates gaps on their design. Therefore, developers either fill in the blank with their imagination (which is likely to result in more conflicts) or repeatedly ask for specifications.</li>
                                <li>When communicating, designers are not able to use engineering language to explain their thoughts or understand questions raised with these jargons and terms.</li>
                                <h6>Opportunity Areas</h6>
                                <p>Therefore, I found these two opportunity areas</p>
                                <li>Helping designers specifying their design</li>
                                <li>Helping designers delivering their design in engineering language</li>
                                <h6>Design Requirements</h6>
                                <p>To better fit into the existing design flow with ease, I defined that the final design should be: </p>

                                <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                        <p className="project_quote_text"><b>Simple</b> & <b>Guided</b></p>
                                    </div>

                                </div>
                            </section>


                            <section className="project_body" id="design">
                                <h2>Ideate & Design</h2>
                                <h5>Start from small problems</h5>
                                <h6>Scoping</h6>
                                <p>I scoped my design according to the requirements and decided to focus on <b>simple scenrios</b> when designers are designing and later delivering very simple components/pages with basic UI elements such as buttons, inputs and result lists. Also, I decided to a <b>Figma plugin</b> which has lower entry and can fit into design flow seamlessly.</p>
                                
                               
                                <h6>Sketching</h6>
                                <p>I sketched potential feature concepts and how user interact with the product:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/Specs/sketch.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <p>I decided to help designers specify their design with:</p>
                                <li>① A checklist of easy-to-forget details</li>
                                <li>② A need-to-be-specified list of different component states with engineering language label and designer language decription</li>
                                <li>③ A design-to-dev notes with fill-in-the-blank questions</li>
                                <li>④ Auto renaming of all the components in 'component/states' format so that designers can <a href="https://www.youtube.com/watch?v=IHEh9HFBtFU">swap</a> among the states easily on Figma.</li>
                                <h6>User Flows</h6>
                                <p>Then, I defined the ideal userflows based on the sketch as guides for my prototypes.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/Specs/userflow.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />

                                <h6>Prototyping and Concept Validation</h6>
                                <p>I developed low fidelity prototypes and share it with potential users, UX/UI Designers for feedback and suggestions.</p>


                                <Container>
                        <Row>
                         
                            <Col xs={4}>
                                <div className="project_square_illustration_container">
                                <ImageZoom
                                    image={{
                                        src: '/images/Specs/button.gif',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                 </div>
                                
     
                                <div className="project_caption text-center">Button Specification</div>                        
                            </Col>
                            

                            <Col xs={4}> 
                                <div className="project_square_illustration_container">                                     
                                <ImageZoom
                                    image={{
                                        src: '/images/Specs/input-unspecified.gif',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                    
                                </div> 
                                <div className="project_caption text-center">Input Specification</div>  
                            </Col>
                            <Col xs={4}> 
                                <div className="project_square_illustration_container">                                     
                                <ImageZoom
                                    image={{
                                        src: '/images/Specs/input-specified.gif',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                    
                                </div> 
                                <div className="project_caption text-center">Search/form Input Specification</div>  
                            </Col>
                          

                          
                        </Row>
                    </Container>
                            <p>However, I find it really hard to create interactive prototypes to test the design and interations in real scenarios. Therefore, I decided to develop real HTML/Javascript prototypes for user testing and iteration.</p>
                            </section>




                            <section className="project_body" id="deliver">
                                <h2>Final Solution</h2>
                                <h5></h5>
                                
                            </section>
                           
                            <section className="project_body" id="todo">
                                <h2>To Dos</h2>
                                
                            </section>


                        </div>

                    </Col>

                </Row>


            </div>
            <ProjectPagination prev={prev} next={next} />
            <BackToTopBtn contents={contents} prev={prev} next={next} />
        </>)
}


export default Specs;

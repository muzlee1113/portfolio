

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
    url: "/work/outbreak",
    name: "Data Viz of National Enteric Outbreaks"
}

const next = {
    url: "/work/nightkick",
    name: "Nightkick"
}


function Specs() {

    return (<>
        <ScrollToTopOnMount />
        <div className="project_head_container">
            <section className="project_head">
                <h1>Specs</h1>
                <h3>A Figma plugin that helps UX/UI designers specify their designs and translate them into engineering language.</h3>
                <div className="project_info">January 2020 (1 day), Individual Project (Still in progress)</div>
            </section>
        </div>
        <div className="project_separator_transparent">
            <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/Specs/mockup.png"} />
        </div>
       
        <div className="project_overview_container" id="overview">
            <Row>
                <Col sm={12} md={6}>
                    <div className="project_overview_title">Background</div>
                    <div className="project_overview_content"> This is a "design + coding" challenge I gave to myself to solve a problem that exists in design-dev communication, which is a field that I have been passionate about. I did it to practice using UCD process to solve a real-life problem.</div>

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
                        <div className="scrollby left_bar_wrapper">
                              
                              <ul  
                              data-uk-scrollspy-nav="closest: li; scroll: true; offset:60">
                                  <div><a href={prev['url']?(prev['url']):('/')} className="project_brief_content"><span uk-icon="icon:triangle-left"></span>{prev['url']?('prev project'):('home')}</a></div>
                                  <br/>
                                  
                                  {contents.map((item)=><li className="uk-l project_brief_content"><a href={item.id}>{item.name}</a></li>)}
                                  <br/>
                                  <div><a href={next['url']?(next['url']):('/')} className="project_brief_content">{next['url']?('next project'):('home')}<span uk-icon="icon:triangle-right"></span></a></div>
                              </ul>                             
                              
                          
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

                                        <p className="project_quote_text">I’ve been having a hard time communicating design specs with the engineering team utilizing Figma, but I don't have any coding background.</p>
                                    </div>

                                </div>
                                <p>I was very surprised since she made beautiful interactive mockups on Figma. This conversation reminded me again of what I witnessed when I was working as a UX intern in a design studio: my design colleagues kept running back and forth, getting feedback from the development team and adding things that they had neglected or editing things that didn't work. </p>

                                <p>As a designer who knows how to code, I also experienced some muddles leaving comments or annotations on my prototypes, explaining details of interactions and creating different states of an icon button with a carefully worded label beside:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/Specs/problem.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <div className="project_caption text-center">This is the Figma page of <a className="text_link" href="https://github.com/dabreegster/abstreet/">A/B Street</a>, a game that I'm working on as an UX designer.</div>
                                
                                <p>Even if designers work with advanced prototyping tools such as Figma, which offers detailed specifications and even codes, they still feel it like a struggle to deliver their designs to developers.</p>
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
                            <p><a className="text_link" href="https://www.figma.com/c/plugin/801332951684837051/Specs">👉 Play with it on Figma</a></p>
                            <p>I designed and developed a Figma Plugin that helps designers to deliver specified prototypes with guided notes to developers. Here is a demo video of an implemented feature (the button design specification).</p>
                            <div style={{ display: 'relative', padding: "20px 0 20px" }} className="d-flex justify-content-center">
                                <iframe style={{ width: '100%', minHeight: '540px' }} src="https://www.youtube.com/embed/Jj4vYHkfZvs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </section>

                        <div className="project_container" id="research">

                            <section className="project_body">
                                <h2>Research & Synthesis</h2>
                                <h5>What are the obstacles in design-to-dev communication?</h5>
                                {/* <h6>User Journey Map</h6> */}
                                <h6>Key Problems</h6>
                                <p>Based on my observations and previous talks with different UX/UI designers, I realized the following obstacles that make the communication hard:</p>
                                <li>When designing, designers neglect important details that create gaps in their designs. Therefore, developers either fill in the blank with their imagination (which is likely to result in more conflicts) or repeatedly ask for specifications.</li>
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
                                <p>I scoped my design according to the requirements and decided to focus on <b>simple scenarios</b> when designers are designing and later delivering very simple components/pages with basic UI elements such as buttons, inputs and result lists. Also, I decided to create a <b>Figma plugin</b> which has lower entry and can fit into one's design flow seamlessly.</p>
                                
                               
                                <h6>Sketching</h6>
                                <p>I sketched potential feature concepts and how users are going to interact with the product:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/Specs/sketch.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <p>I decided to help designers specify their design with:</p>
                                <li>① A checklist of easy-to-forget details</li>
                                <li>② A need-to-be-specified list of different component states with labels in engineering language and decriptions in designer language</li>
                                <li>③ A design-to-dev notes in a fill-in-the-blank format</li>
                                <li>④ Auto renaming all the components in 'component/states' format so that designers can <a className="text_link" href="https://www.youtube.com/watch?v=IHEh9HFBtFU">swap</a> among the states easily on Figma.</li>
                                <h6>User Flows</h6>
                                <p>Then, I defined the ideal user flows of both the designers and developers based on the sketch and used it as guide for my prototypes.</p>
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
                            <p>However, I found it really hard to create interactive prototypes to test the design and interactions in real scenarios. Therefore, I decided to develop real HTML/Javascript prototypes for user testing and iteration.</p>
                            </section>




                            <section className="project_body" id="deliver">
                                <h2>Final Design</h2>
                                <h5>How I solved the problems</h5>
                                <p>Here is the hi-fi prototypes of the plugin interface and also the various new frames and components added to the page after using the plugin.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/Specs/hi-fi.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                 <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                       
                                        <p className="project_quote_text">With the help of specs, designers can consider all design aspects thoroughly and communicate their ideas to engineers easily and accurately to achieve better implementation of their designs. Eventually, it will improve the efficiency of the product development process and the quality of the final deliverables.</p>
                                    </div>

                                </div>
                               
                            </section>
                           
                            <section className="project_body" id="todo">
                                <h2>To Dos</h2>

                                <h6>Usability Testing</h6>
                                <p>More usability studies are needed to improve the interface and user interactions</p>
                                <h6>Extreme Cases Definitions and Design</h6>
                                <p>There are some cases that users might not follow the ideal user flow. For example, they might select multiple components or select nothing. These extreme cases should be identified through ideation and testing and alternate user flows and notifications should be specified.</p>
                                <h6>More Components, More Features</h6>
                                <p>My next step is to ideate and prototype data components such as table, list and carousel. Moreover, I'm going to interview more designers to discover more components that designers ran into trouble when specifying or communicating and continue to add new components to the plugin.</p>
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

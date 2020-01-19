import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'



function QuickHire() {

    return (
        <>
        <ScrollToTopOnMount />
            <div className="project_head_container">
                <section className="project_head">
                    <h1>Quick Hire</h1>
                    <h3>A web application that helps recruiters find the right candidates fast</h3>
                    <div className="project_info">December to January 2019 (25 days), Individual Project</div>
                </section>
            </div>
            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/QuickHire/qh_mockup.png"} />
            </div>
            <div className="project_overview_container" id="overview">
                {/* <Container> */}
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="project_overview_title">Background</div>
                            <div className="project_overview_content">This is a design challenge I ran into in the last-round interview with Dell. I finished the design in winter break and presented my process and final design onsite. Even though I did not win the offer, I still learned a lot from the process and interview.</div>
                            
                        </Col>
                        <Col></Col>
                        <Col sm={4} md={2}>
                        
                            <div className="project_overview_title">My Role</div>
                            <div className="project_overview_content">User Research</div>
                            <div className="project_overview_content">Product Design</div>
                            <div className="project_overview_content">Interaction Design</div>
                            <div className="project_overview_content">Visual Design</div>
                            <div className="project_overview_content">Prototyping</div>
                            <div className="project_overview_content">Usability Testing</div>
                        </Col>
                        <Col sm={4} md={3}>
                        
                            <div className="project_overview_title">Team</div>
                            <div className="project_overview_content">Only Me</div>
                        </Col>

                    </Row>
                {/* </Container> */}
            </div>
          <div className="project_overview_container">
                <div className="project_overview_title">Design Process</div>
                <div className="project_overview_content">Since I had limited time for the project, different steps overlapped with each other.</div>
                <ImageZoom
                        image={{
                            src: '/images/QuickHire/process.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />

                
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
                                <ul className="unset-Sticky" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80"
                                // className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon"
                                >
                                    <li className="uk-l project_brief_content"><a href="#overview">Project Overview</a></li>

                                    <li className="uk-l project_brief_content"><a href="#list-item-0">Problem</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-1">Demo Video</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-2">User Research</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-3">Key Insights</a></li>
                                    <li className="uk-l project_brief_content"><a href="#ideate">Ideation</a></li>
                                    <li className="uk-l project_brief_content"><a href="#design">Design & Evaluation</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-5">Final Design</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-6">Takeaways</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>
                    <div className="project_container">
                    <section className="project_body" id="list-item-0">
                    <div id="scrollstart"></div>

                    <h2>Problem</h2>
                    <p>The original challenge depicted the problem as follow:</p>
                    <div className="project_quote">

                    <div className="project_separator_inner_wrapper_small">
                    <p>Recruiters at Criterion Technologies are expected to manage an enormous number of candidates (1000+) for a large number of job openings (40+) at any given time. The Criterion UX Team has received feedback that our recruiters struggle to track all the moving parts and fear that talented candidates may be getting lost in the flood. You have been assigned to design a user interface the Talent Acquisition Recruiting team can use to track and manage candidates throughout the recruitment process.</p>


                    </div>
                    </div>
                    <p>User research team has conducted initial research and found the following problems and user needs:</p>
                    <ImageZoom
                        image={{
                            src: '/images/QuickHire/init_research.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />

                    <p>So the initial design question I raised was:</p>
                    <div className="project_quote">
                        <div className="project_separator_inner_wrapper_small">

                        <p className="project_quote_text">How might we help recruiters to track and manage job requisitions, candidates, and their daily activities?</p>
                        </div>

                    </div>
                </section>
            </div>

           
            <div className="project_container" id="list-item-2">

                <section className="project_body">
                    <h2>User Research & Synthesize</h2>
                    <h5>Why and how do recruiters keep track of job requisitions, candidates?</h5>
                    <h6>Research Questions</h6>
                    <ul>
                        <li>Why do recruiters need to keep an eye on all the flying parts</li>
                        <li>How do recruiters keep updated on all the information including job reqs and candidates?</li>
                        <li>How do manage and prioritize their daily tasks every day?</li>
                    </ul>
                   
                 
                
                    <h6>Interview</h6>
                    <p> I interviewed 6 recruiters to gather qualitative data of recruiters' goals, needs, feelings and problems in their daily work. Links to <a className="text_link" href="https://docs.google.com/document/d/1TiGvbUB4Vj8RAMKdIE2QH9XXeX6hRNZs9dcwrEV8ut0/edit?usp=sharing">questions</a>.</p>

                    
                   
    
                    <h6>Key Insights</h6>
                    <li className="p-list">Reponsibility & User Workflow</li>
                    <p>Recruiters are responsible for finding the <span style={{color: "#63A6F7"}}>right</span> candidates <span style={{color: "#63A6F7"}}>fast</span></p>
                   
                    <ImageZoom
                        image={{
                            src: '/images/QuickHire/workflow.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                    <div className="project_caption">Hiring process is a collaborative workflow. Recruiter is the gatekeeper, coordinator, and support of the process and also public touchpoint.</div>
                    <li className="p-list">Inforamtion Management</li>
                    <p>Recruiters need to keep an eyes on job requisitions and candidates because of their responsibility and they normally manage in the following ways</p>
                    <ImageZoom
                        image={{
                            src: '/images/QuickHire/information.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                    <p>So I reframed the design question to be:</p>
                    <div className="project_quote">
                        <div className="project_separator_inner_wrapper_small">

                        <p className="project_quote_text">How might we help recruiters to find the right candidates fast?</p>
                        </div>

                    </div>
                    <div className="reflect_box">
                        <p><b>Reflections</b></p>
                        <p>My user research didn't help to scope my design but actually enlarged the focus. As a result, I had a hard time to specify every aspects. I should have focused on one or two tasks such as prioritizing daily activities.</p>
                    </div>

                </section>

    
                <section className="project_body" id="ideate">
                    <h2>Ideate</h2>
                    <h5></h5>
                    <h6>Information Architecture</h6>
                    <p>Based on initial research (it includes a very detailed requirements of information), I summarised the following information hierarchy.</p>
                    <ImageZoom
                        image={{
                            src: '/images/QuickHire/IA.png',
                            alt: '',
                            className: 'project_illustration_medium'
                        }}

                    />
                    <h6>Storyboard</h6>
                    <p>Then, I drew a storyboard to memorize the pain-points and requirements.</p>
                    <ImageZoom
                        image={{
                            src: '/images/QuickHire/lena.png',
                            alt: '',
                            className: 'project_illustration_medium'
                        }}

                    />
                     <h6>Concept Sketches</h6>
                     <p>I kept sketching in between the interviews and ask the next participant for advice and specify design such as what information is needed for prioritizing tasks related to job requisitions.</p>
                    
                </section>
               


               
                    </div>
                    
                    </Col>

            </Row>

                
            </div>
            <ProjectPagination prevUrl="/work/materialbank"  prevName="Material Bank" nextUrl="/work/weather" nextName="Weather"/>

            <BackToTopBtn />
        </>)
}




export default QuickHire;

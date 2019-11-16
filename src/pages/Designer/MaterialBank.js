import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import LazyLoad from 'react-lazyload';
import ImageModal from '../../components/ImageModal'
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'



function MaterialBank() {

    return (
        <>
            <ScrollToTopOnMount />
            <div className="project_head_container">
                <section id="list-item-0" className="project_head">
                    <h1>Material Bank</h1>
                    <h3>A website that helps designers find the materials they need, learn CMF and get inspired.</h3>
                    <div className="project_info">August 2019 to September 2019, Work-In-Progress</div>
                </section>
            </div>
            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/MaterialBank/Mockup_sp.png"} />
            </div>

            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">

                            <div className="project_brief_container">
                                <div className="project_brief_title">Client</div>
                                <div className="project_brief_content">Material Bank</div>
                                <div className="project_brief_title">Business Goal</div>
                                <div className="project_brief_content">Redesign the website to attract designers and design students on board</div>
                                <div className="project_brief_title">My Role</div>
                                <div className="project_brief_content">User Research & UX Designer</div>


                            </div>
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;">
                                <ul data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">

                                    <li className="uk-l project_brief_content"><a href="#list-item-1">User Research & Insight</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-2">Information Findability</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-3">Information Understandability</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-4">To Dos</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>
                        

                        <div className="project_container">
                        <LazyLoad height={200} offset={100} once>

                            <section className="project_body" id="list-item-1">
                                <h2>User Research</h2>
                                <h5>How do designers work with materials?</h5>
                                <p>The client provides service to two very specific groups of people: designers, especially industrial designers, and design students. Even though we were sure about who are the users, their identities still could not provide a comprehensive picture of how and why they interact with materials. Thus, I decided to conduct interviews and usability testing on the old website to answer these questions.</p>
                                <h6>Personas: why and how people interact with materials</h6>
                                <p>After 6 interviews with industrial designers and design students, I finally grouped users into <b>three personas</b> according to their different goals, needs and behaviors.</p>
                                    
                                <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/persona1.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/persona2.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/persona3.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                    
                
                                <h6>Usability Testing: what I learned from the past</h6>
                                <p>After the interview, we asked the participants to try on the current webpage of the material bank. They were asked to explore the website and also repeat some activities they had mentioned in the interview. From this <b>usability testing</b>, we have a clearer view of the problems of the old websites, and what the users expect, think and feel when they were using the tool.</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/usabilitytesting.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                   
                                <h6>Affinity Diagram: locate problems and opportunities</h6>
                                <p>To combine what we learned from the interviews and the testing, I used an affinity diagram to group the pain points and problems, and abstract them into five design questions. </p>
                                <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/affinitydiagram.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                   
                                <p>Then, I divided those questions into two sets: problems of <b>information findability</b> and problems of <b>information understandability.</b></p>
                            </section>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100} once>

                            <section className="project_body" id="list-item-2">
                                <h2>Design for Information Findability</h2>
                                <h5>How might we help the users to find materials they need or interested in?</h5>
                                <p>Based on the research, the Makers felt it hard to find materials they need because they didn't know what they want, and it is hard to choose one from thousands of research results. For the Roamers, the problem was either that they couldn't find the resources or that even if they found one, they seldom find anything interesting or enlightening, because it is hard to make connections between the materials and their design. Thus, Material Bank should do the following jobs:</p>
                               <Row>
                                   <Col lg={6} md={12}>
                                   <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/JTBD1.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                   
                                     
                                    <div className="project_caption mt-5">
                                        <ul>
                                            <li><small>Facilitate users to articulate and clarify their needs</small> </li>
                                            <li><small>Provide accessible resources and information about materials</small></li>
                                            <li><small>Guide them narrow down options</small></li>
                                        </ul>
                                    </div>
                                   </Col>
                                   <Col lg={6} md={12}>
                                   <ImageZoom
                                            image={{
                                            src: '/images/MaterialBank/JTBD2.png',
                                            alt: '',
                                            className: 'project_illustration'
                                            }}
                                        
                                        />
                                        <div className="project_caption mt-5">
                                        <ul>
                                            <li><small>Provide accessible resources and information about materials</small> </li>
                                            <li><small>Connect materials with users' interests and fields</small> </li>
                                        </ul>
                                    </div>
                                
                                   </Col>
                               </Row>
                               <p>After brainstorming and feasibility evaluation, we finally included the following features to solve the problem:</p>
                               <ul>
                               <ImageZoom
                                            image={{
                                            src: '/images/MaterialBank/sketch1.png',
                                            alt: '',
                                            className: 'project_illustration'
                                            }}
                                        
                                        />
                                <li>An <b>infinite and personalized scroll</b> of materials</li>  
                                <li><b>Recommend related materials</b> at the bottom of a detailed view</li>
                                <li><b>Category list</b> at hand</li>
                                <li>More accessible <b>filters</b></li>
                                <li>Save to <b>'selection'</b> for comparison</li>  
                                <li><b>Customized comparison</b> of selection</li> 
                                   
                               </ul>
                                    <ImageZoom
                                            image={{
                                            src: '/images/MaterialBank/accessibilityall.png',
                                            alt: '',
                                            className: 'project_illustration'
                                            }}
                                        
                                        />
                                         <ImageZoom
                                            image={{
                                            src: '/images/MaterialBank/accessibilityall2.png',
                                            alt: '',
                                            className: 'project_illustration'
                                            }}
                                        
                                        />
                                 
                                {/* <LazyLoad height={200} offset={100} once>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/MaterialBank/accessibility2.png"} />
                                </LazyLoad> */}
                            </section>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100} once>
                            <section className="project_body" id="list-item-3">
                                <h2>Design for Information Understandability</h2>
                                <h5>How might we help the users understand and use the information of materials?</h5>
                                <p>There are at least two layers of information for a material: a brief introduction and a detailed view. They play different roles. </p>
                                <h6>Layer 1: A brief introduction</h6>
                                <ul>
                                    <li>The abstract</li>
                                    <li>Attract users to drill in</li>
                                    <li>Brief</li>
                                    <li>Contextualized and customized: provide the right information the users want to know right here right now.</li>
                                </ul>
                                <h6>Layer 2: An in-depth breakdowns</h6>
                                <ul>
                                    <li>In-depth</li>
                                    <li>With multidimensional data</li>
                                    <li>Answer what it is and how to use it</li>
                                </ul>
                               <p>Thus the new design should address the following questions:</p>
                        
                                <h6>How might we provide users with contextualized and customized information on the cards?</h6>
                                <p><b>The contextual card:</b> render information on the cards according to what they are searching and filtering now.</p>
                                <p>When consider what contextual and personal information we know about the users, the anwser is what they're searching, filtering and their interest. Thus, </p>
                                
                                <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/sketch2.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                  <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/card.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                  
                                <h6>How might we put materials into contexts so that users can know how to make use of them?</h6>
                                <p>The old website provides photos of use cases but it is not pointed out. So this piece of useful information mixed with other images. Thus, I separated them from the other photos and annotated the picture.</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/usecase.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                  
                                <h6>How might we visualize multidimensional data to enable better understanding?</h6>
                                <p>I ran out of time when I tried to further explore the topic of visualizing multidimensional data, so I started a side project after my internship and shared it with my colleagues in SIID. [This part is still in progress]</p>
                            </section>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100} once>
                            <section className="project_body" id="list-item-4">
                                <h2>To Dos</h2>
                                <h6>Website as a part of the service ecology</h6>
                                <p>When I talked with my clients about the goal of Material Back. They introduced to me a service roadmap that envisioned how their solutions build an ecology that includes professionals, students, universities, material providers. </p>
                                <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/roadmap.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                  
                                <p>The talk inspired me to think about the role of the website in the whole service system: it is a panel of its complex database, a touchpoint of the user journey map, a portal to other parts of the service. Thus, besides improving the information findability and usability of the website, <b>how might we better incorporate it into the larger service ecology as a touchpoint and a portal?</b></p>
                                <p>What I added on is a simple feature in the detailed view:</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/MaterialBank/physicalMB.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                  
                                 
                                <p>If given enough time, I would love to explore more on this design question.</p>
                                
                
                            </section>
                            </LazyLoad>
                        </div>
                    </Col>
                </Row>


            </div>
            <ProjectPagination prevUrl="/work/IoT" prevName="An IoT-based City Infrastructure Management Tool" nextUrl="/work/readwithme" nextName="ReadwithMe"/>

            <BackToTopBtn />
     
        </>)
}


export default MaterialBank;

import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import ImageModal from '../../components/ImageModal'
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
        id: "#research",
        name: "Research"

    },
    {
        id: "#syn",
        name: "Synthesize"

    },
    {
        id: "#ideate",
        name: "Ideate"

    },
    {
        id: "#design",
        name: "Design"

    },
    {
        id: "#deliver",
        name: "Final Design"

    },
    {
        id: "#todo",
        name: "To Dos"

    },
]

const prev = {
    url: "/work/specs",
    name: "Specs"
}

const next = {
    url: "/work/weather",
    name: "Weather"
}


function MaterialBank() {

    return (
        <>
            <ScrollToTopOnMount />
            <div className="project_head_container">
                <section id="list-item-0" className="project_head">
                    <h1>Material Bank</h1>
                    <h3>A website that helps industrial designers search and navigate materials to find the right one and get inspired.</h3>
                    <div className="project_info">August - September 2019, work project.</div>
                </section>
            </div>
            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/MaterialBank/Mockup_sp.png"} />
            </div>
            <div className="project_overview_container" id="overview">
                {/* <Container> */}
                <Row>
                    <Col sm={12} md={6}>
                        <div className="project_overview_title">Background</div>
                        <div className="project_overview_content">We were commissioned by Material Back, a local material library to redesign their website to attract designers and design students on board.</div>

                    </Col>
                    <Col sm={4} md={3}>

                        <div className="project_overview_title">My Role</div>
                        <div className="project_overview_content">User Research</div>
                        <div className="project_overview_content">Usability Testing</div>
                        <div className="project_overview_content">Product Design</div>
                        <div className="project_overview_content">Prototyping</div>
                    </Col>
                    <Col sm={4} md={3}>

                        <div className="project_overview_title">Team</div>
                        <div className="project_overview_content">One Product Manager</div>
                        <div className="project_overview_content">One UX Designer</div>
                    </Col>

                </Row>
                {/* </Container> */}
            </div>

            <div className="project_overview_container">
                <div className="project_overview_title">Design Process</div>


                <Row>
                    <Col xs={4} md={2}>
                        {/* <div className="project_overview_title">Design Process</div> */}


                        <img src={process.env.PUBLIC_URL + "/images/leftStep.png"} />
                        <div className="project_overview_content py-1"><b>Research</b></div>
                        <div className="project_overview_content">User Interview</div>
                        <div className="project_overview_content">Usability Testing</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />
                        <div className="project_overview_content py-1"><b>Synthesize</b></div>
                        <div className="project_overview_content">Personas</div>
                        <div className="project_overview_content">User Flow</div>
                        <div className="project_overview_content">Affinity Diagram</div>
                        <div className="project_overview_content">User Stories</div>

                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />

                        <div className="project_overview_content py-1"><b>Ideate</b></div>
                        <div className="project_overview_content">Brainstormimg</div>
                        <div className="project_overview_content">Sketching</div>
                        <div className="project_overview_content">Job to be done</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />
                        <div className="project_overview_content py-1"><b>Design</b></div>
                        <div className="project_overview_content">Site Map</div>
                        <div className="project_overview_content">Information architecture</div>
                        <div className="project_overview_content">Wireframing</div>
                        <div className="project_overview_content">Hi-fi prototyping</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />

                        <div className="project_overview_content py-1"><b>Evaluate</b></div>
                        <div className="project_overview_content">Design Critiques</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/rightStep.png"} />

                        <div className="project_overview_content py-1"><b>Deliver</b></div>
                        <div className="project_overview_content">Hi-fi prototypes</div>
                        <div className="project_overview_content">Design specs</div>

                    </Col>
                </Row>
            </div>


            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;">
                            <ul className="unset-Sticky" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                                <div><a href={prev['url']?(prev['url']):('/')} className="project_brief_content"><span uk-icon="icon:triangle-left"></span>{prev['url']?('prev project'):('Home')}</a></div>
                                <br/>
                                
                                {contents.map((item)=><li className="uk-l project_brief_content"><a href={item.id}>{item.name}</a></li>)}
                                <br/>
                                <div><a href={next['url']?(next['url']):('/')} className="project_brief_content">{next['url']?('next project'):('Home')}<span uk-icon="icon:triangle-right"></span></a></div>
                                </ul> 
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>


                        <div className="project_container">
                            <section className="project_body" id="intro">
                                <h2>Problem</h2>
                                <h5>New industrial designer are having a hard time learning and looking for materials</h5>
                                <p>Knowledge about materials is crucial for the success of industrial designers. However, design students and young designers who do not have enough experience often find it difficult to have a good command of the knowledge. Once a design work gets to the point of implement, they often encounter a huge gap from their ideal design to the feasible product and spend a lot of time browsing and searching for proper materials. Therefore, to redesign the Material Bank website as a solution to the problem, we asked:</p>


                                <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                        <p className="project_quote_text">How might we help new industrial designers to learn and search for materials?</p>
                                    </div>

                                </div>



                            </section>
                            <section className="project_body" id="research">
                                <h2>User Research</h2>
                                <h5>How do designers work with materials?</h5>
                                <h6>Interview</h6>
                                <p>The client provides service to two very specific groups of people: designers, especially industrial designers, and design students. Even though we were sure about who are the users, their identities still could not provide a comprehensive picture of how and why they interact with materials. Thus, I decided to conduct user interviews to answer these questions.</p>
                                <Container>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            {/* <div className="project_overview_title">Design Process</div> */}
                                            <div className="project_overview_content py-1"><b>Methods</b></div>
                                            <div className="project_overview_content">Interview</div>

                                        </Col>
                                        <Col xs={12} md={8}>
                                            <div className="project_overview_content py-1"><b>Participants</b></div>
                                            <div className="project_overview_content">4 professional industrial designers</div>
                                            <div className="project_overview_content">2 students of industrial design</div>

                                        </Col>
                                    </Row>
                                </Container>

                                <h6>Usability Testing</h6>
                                <p>In order to diagnose problems of the existing website, after the interview, we asked the participants to try on the current webpage of the material bank. They were asked to explore the website and also repeat some activities they had mentioned in the interview. From this <b>usability testing</b>, we have a clearer view of the problems of the old websites, and what the users expect, think and feel when they were using the tool.</p>

                            </section>
                            <section className="project_body" id="syn">
                                <h2>Synthesize</h2>
                                <h5>From research to design</h5>
                                <h6>1. Personas & User Flows</h6>
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


                                <h6>2. Usability Problems</h6>
                                <p>We found and prioritized the following severe usability problems on the exisiting website:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/MaterialBank/usabilitytesting.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <h6>3. Affinity Diagram</h6>
                                <p>To combine what we learned from the interviews and the testing, I used an affinity diagram to group the pain points and problems, and abstract them into five design questions. </p>
                                <ImageZoom
                                    image={{
                                        src: '/images/MaterialBank/affinitydiagram.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <p>The problems all fall into two categories: </p>
                                <li>Information Findability Problems</li>
                                <li>Information Usability Problems</li>
                                <h6>4. User Stories & Site Map </h6>
                                <p>To keep track of whether we fulfill user needs and solve the spotted problems, I collected all user needs into one backlog and asked the product manager to prioritize user needs.</p>

                                <p>Then, I organized brainstorm sessions for features to meet user needs. After brainstorming I collected backlogs of user stories and features for the PM to prioritize and later assign to different sprints and scrums. Also, I delivered an ideal site map that assigned features into different sections of the website.</p>
                                <p></p>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <ImageZoom
                                            image={{
                                                src: '/images/MaterialBank/user_story.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                        <div className="project_caption text-center">User Need & User Story Backlogs</div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <ImageZoom
                                            image={{
                                                src: '/images/MaterialBank/site_map.png',
                                                alt: '',
                                                className: 'project_illustration_medium'
                                            }}

                                        />
                                        <div className="project_caption text-center">Site Map</div>
                                    </Col>
                                </Row>



                                <br />

                                <p>After summarising all the needs and problems from top down, I decided to start from improving the search and filter features which is key to improving information <b>findability</b>. So I specify the design question to be:</p>
                                <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                        <p className="project_quote_text">How might we help the users to find materials they need or interested in?</p>
                                    </div>

                                </div>

                            </section>

                            <section className="project_body" id="ideate">
                                <h2>Ideate</h2>
                                <h5>Job to be done</h5>
                                <p>Based on the research, the Makers felt it hard to find materials they need because they didn't know what they want, and it is hard to choose one from thousands of research results. For the Roamers, the problem was either that they couldn't find the resources or that even if they found one, they seldom find anything interesting or enlightening, because it is hard to make connections between the materials and their design. Thus, Material Bank should do the following jobs:</p>
                                <p></p>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <div className=""><p><b>What MB can do to help the Makers find what they need</b></p></div>

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
                                        <div className=""><p><b>What MB can do to help the Roamers find what they are interested in</b></p></div>

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
                            </section>
                            <section className="project_body" id="design">
                                <h2>Design</h2>
                                <h5>Concept Sketching</h5>
                                <p>After brainstorming and feasibility evaluation, we finally included the following features to solve the problem:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/MaterialBank/sketch1.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/MaterialBank/sketch2.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/MaterialBank/sketch3.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />

                                <li>① An <b>infinite and personalized scroll</b> of materials that better appeal to designers</li>
                                <li>② <b>Recommend related materials</b> at the bottom of a detailed view to increase interest</li>
                                <li>③ More accessible <b>filters</b> that help designers narrow down their search</li>
                                <li>④ Save to <b>'selection'</b> feature that support comparisons</li>
                                <li>⑤ <b>Recommended search</b> that help users form query</li>
                                <li>⑥ <b>Category list</b> that allow easy navigation</li>

                                <li>⑦ <b>Contextual search result card</b> that renders information according to what are searched and filtered.</li>
                            </section>
                            <section className="project_body" id="deliver">
                                    <h2>Final Design</h2>
                                    <h5>How I solved the problem</h5>
                                    <p>Since we used K7 library for front end development, I developed hi-fi prototypes according to components in the library.</p>
                                    <ImageZoom
                                        image={{
                                            src: '/images/MaterialBank/materialpage.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />
                                    <ImageZoom
                                        image={{
                                            src: '/images/MaterialBank/comparisonpage.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />

                                    <ImageZoom
                                        image={{
                                            src: '/images/MaterialBank/materialdetail1.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />
                                    <ImageZoom
                                        image={{
                                            src: '/images/MaterialBank/materialdetail2.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />
                                    <ImageZoom
                                        image={{
                                            src: '/images/MaterialBank/advancefilters.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />
                                    <ImageZoom
                                        image={{
                                            src: '/images/MaterialBank/advancefilters2.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />

                                


                            </section>
                            <section className="project_body" id="todo">
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
                                <h6>Visualize multidimensional data</h6>
                                <p>I ran out of time when I tried to further explore the topic of visualizing the different attributes of materials. I would love to explore this challenge later.</p>
                
                            </section>

                        </div>
                    </Col>
                </Row>
            </div>
            {/* <div className="project_separator" id="" style={{zIndex: "1000"}}>

                    <div className="project_separator_inner_wrapper" >
                        <div className="project_separator_inner_wrapper_small">
                            <h5>Design Question #2</h5>  
                            <p className="project_quote_text">How might we help the users understand and use the information of materials?</p>
                        </div>
                            
                    </div>
                </div>
            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}></Col>
                    <Col md={12} lg={9}> 
                        <div className="project_container">
                        <section className="project_body" id="ideate2">
                                <h2>Ideate</h2>
                                <h5>Information architecture</h5>
                                <p>There are at least two layers of information for a material: a brief introduction and a detailed view. They play different roles. </p>
                                <h6>Layer 1: A brief of the material on the list</h6>
                                <ul>
                                    <li>The abstract</li>
                                    <li>Attract users to drill in</li>
                                    <li>Brief</li>
                                    <li>Contextualized and customized: provide the right information the users want to know right here right now.</li>
                                </ul>
                                <h6>Layer 2: A detailed view of the material after clicking down</h6>
                                <ul>
                                    <li>In-depth</li>
                                    <li>With multi-dimensional data</li>
                                    <li>Answer what it is and how to use it</li>
                                </ul>
                                <h6>Specify Design Questions</h6>
                               <p>Thus the new design should address the following questions:</p>
                               <ul>
                                   <li>How might we provide users with contextualized and customized information on the cards?</li>
                                   <li>How might we put materials into contexts so that users can know how to make use of them?</li>
                                   <li>How might we visualize multi-dimensional data to enable better understanding?</li>
                               </ul>
                               </section>
                               <section className="project_body" id="design2">
                                <h2>Design</h2>
                                <h5>Improve information usability</h5>
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
                                <p>I ran out of time when I tried to further explore the topic of visualizing multi-dimensional data, so I started a side project after my internship and shared it with my colleagues in SIID. This part is still in progress</p>
                            </section> */}

            {/* </div>
                    </Col>
                </Row>
            </div> */}





            <ProjectPagination prev={prev} next={next} />
            <BackToTopBtn contents={contents} prev={prev} next={next} />

        </>)
}


export default MaterialBank;

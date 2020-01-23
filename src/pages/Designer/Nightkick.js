import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import ImageModal from '../../components/ImageModal'
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'

const contents=[
    {
        id:"#overview",
        name:"Project Overview"

    },
    {
        id:"#intro",
        name:"Problem"

    },
    {
        id:"#demo",
        name:"Solution"
    },
    {
        id:"#research",
        name:"Research"

    },
    {
        id:"#syn",
        name:"Synthesize"

    },
    {
        id:"#ideate",
        name:"Ideate"

    },
    {
        id:"#design",
        name:"Design"

    },
    {
        id:"#evaluate",
        name:"Evaluate & Iterate"

    },
    {
        id:"#hifi",
        name:"Visual Design & Specs"

    },
    {
        id:"#deliver",
        name:"Final Design"

    },
    {
        id:"#concern",
        name:"Concerns"

    },
    {
        id:"#todos",
        name:"To Dos"

    },
    {
        id:"#take",
        name:"Takeaways"

    },
    {
        id:"#present",
        name:"Bonus!"

    },
]

const prev = {
    url: "/work/specs",
    name: "Specs"
}

const next = {
    url: "/work/materialbank",
    name: "Material Bank"
}


class Nightkick extends React.Component {
    state = {
        modalShow: false,
        modalDirection: false,
        research: false,
        synthesize: false,
        // setModalShow:false,
        url: "",

    }

    toggleHiddenContent = (part)=>{
        this.setState({
            [part]: !this.state[part]
        })
    }
    triggerModel = (url, direction) => {

        this.setState({
            url: url,
        }, () => {
            this.setState({
                modalShow: true,
                modalDirection: direction,
            })
        })
    }

    render(){

        return (
            <>
                <ScrollToTopOnMount />
                <div className="project_head_container">
                    <section id="list-item-0" className="project_head">
                        <h1>Nightkick</h1>
                        <h3>A mobile app and modular wearable to help people feel safer when walking alone after dark.</h3>
                        <div className="project_info">September - December 2019, school project</div>
                    </section>
                </div>
                <div className="project_separator_transparent">
                    <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/nightkick/mockup.png"} />
                </div>
                <div className="project_overview_container" id="overview">
                    {/* <Container> */}
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="project_overview_title">Background</div>
                                <div className="project_overview_content">In Autumn 2019, we built Nightkick, a modular wearable with mobile app that helps people feel safer when walking alone after dark as a group project for the User Centered Design course at the University of Washington.</div>
                                
                                
                            </Col>
                            <Col sm={12} md={3}>
                                <div className="project_overview_title">Key Learnings</div>
                                <div className="project_overview_content">Complete UX design process</div>
                                <div className="project_overview_content">Teamwork</div>
                                <div className="project_overview_content">Design Documentation</div>
                                <div className="project_overview_content">Design Communication</div>
                            </Col>
                            <Col sm={4} md={2}>
                            
                                <div className="project_overview_title">My Role</div>
                                <div className="project_overview_content">User Research</div>
                                <div className="project_overview_content">Usability Testing</div>
                                <div className="project_overview_content">Product Design</div>
                                <div className="project_overview_content">Interaction Design</div>
                                <div className="project_overview_content">Visual Design</div>
                                <div className="project_overview_content">Prototyping</div>
                            </Col>
                            <Col sm={4} md={2}>
                            
                                <div className="project_overview_title">Teammates</div>
                                <div className="project_overview_content">Bridgett Zayas</div>
                                <div className="project_overview_content">Devin Ajimine</div>
                                <div className="project_overview_content">Nora Carr</div>
                            </Col>
    
                        </Row>
                    {/* </Container> */}
                </div>
    
                <div className="project_overview_container">
                    <div className="project_overview_title">Design Process</div>
        
    
                    <Row>
                            <Col xs={4} md={2}>
                        {/* <div className="project_overview_title">Design Process</div> */}
                                
                                
                                <img  src={process.env.PUBLIC_URL + "/images/leftStep.png"}/>
                                <div className="project_overview_content py-1"><b>Research</b></div>
                                <div className="project_overview_content">Survey</div>
                                <div className="project_overview_content">Competitive analysis</div>
                                <div className="project_overview_content">Social listening</div>
                                <div className="project_overview_content">Interview</div>
                                <div className="project_overview_content">Draw the experience</div>
                                <div className="project_overview_content">Video diaries</div>
                           
    
                            </Col>
                            <Col  xs={4} md={2}>
                            <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
                                <div className="project_overview_content py-1"><b>Synthesize</b></div>
                                <div className="project_overview_content">Affinity diagram</div>
                                <div className="project_overview_content">Personas</div>
                                <div className="project_overview_content">User flows</div>
                                <div className="project_overview_content">Usage scenarios</div>
    
                            </Col>
                            <Col xs={4} md={2}>
                            <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
    
                                <div className="project_overview_content py-1"><b>Ideate</b></div>
                                <div className="project_overview_content">Brainstormimg</div>
                                <div className="project_overview_content">Sketching</div>
                            </Col>
                            <Col xs={4} md={2}>
                            <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
                                <div className="project_overview_content py-1"><b>Design</b></div>
                                <div className="project_overview_content">Paper prototyping</div>
                                <div className="project_overview_content">Wireframing</div>
                                <div className="project_overview_content">Lo-fi prototyping</div>
                                <div className="project_overview_content">Me-fi prototyping</div>

                                <div className="project_overview_content">Visual Design</div>
                                <div className="project_overview_content">Hi-fi prototyping</div>
                                <div className="project_overview_content">Video prototyping</div>
                                <div className="project_overview_content">3D Modeling</div>
                            </Col>
                            <Col  xs={4} md={2}>
                            <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
    
                                <div className="project_overview_content py-1"><b>Evaluate</b></div>
                                <div className="project_overview_content">Usability testing</div>
                               
    
                            </Col>
                            <Col xs={4} md={2}>
                            <img  src={process.env.PUBLIC_URL + "/images/rightStep.png"}/>
    
                                <div className="project_overview_content py-1"><b>Deliver</b></div>
                                <div className="project_overview_content">Hi-fi prototypes</div>
                                <div className="project_overview_content">Video prototype</div>
                                <div className="project_overview_content">Design handbook</div>

    
                            </Col>
                        </Row>
                </div>
               
    
                <div className="project_overall_container">
                    <Row>
                        <Col md={12} lg={3}>
                            <div className="left_bar_wrapper">
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;top: #scrollstart">
                              
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
                                    <h5>Walking alone after dark is a scary experience</h5>
                                    <p>Many people who work or live in the Greater Seattle Area walk as part of their commute to and from work, school, and nightlife activities. Due to decreased hours of daylight in the winter, much of this commuting is done in the dark. However, being alone in a public place when it is dark outside can provoke anxiety for many people. Previously published research demonstrates that a significant number of people are afraid to walk alone at night near their places of residence.</p>
                                    
                                
                                   
                                    <ImageZoom
                                        image={{
                                        src: '/images/nightkick/intro-graphs.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}
                                    
                                    />
                                    <p>Even in University District, students feel nervous when walking through some areas around campus that are notorious for high criminal rate. Feeling unsafe has stopped people from commuting by public transportation and hanging out with friends after dark. Therefore, as a group we asked:</p>
                                    
                                </section>
                                <section className="project_body" id="">
                                        
                                        <div className="project_quote">
                                            <div className="project_quote_wrapper">
                                            <p className="project_quote_text">How can we help commuters feel safer when walking alone after dark?</p>
                                            </div>
                                        </div>
                                 </section>
                                 <section className="project_body" id="demo">
                                    <h2>Solution</h2>
                                    <h5>Demo Video</h5>
                                    
                                        <div style={{display:'relative',padding:"20px 0 20px"}} className="d-flex justify-content-center">
                                        <iframe style={{width:'100%',minHeight:'540px'}}  src="https://www.youtube.com/embed/GHMqMzMxpWU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </section>
                                
    
                                <section className="project_body" id="research">
                                    <h2>Research</h2>
                                    <h5>How do people walk after dark?</h5>
                                    <h6>Research Questions</h6>
                                    <ul>
                                        <li>What does a typical walk home look like?</li>
                                        <li>What are things/tools/methods people use to help themselves feel safer when walking alone after dark?</li>
                                        <li>What are people’s biggest concerns/fears when they walk home alone at night?</li>
                                    </ul>
                                    
                                    <h6>Methods</h6>
                                    <Container style={{padding: "30px 0 30px"}}>
                                            <Row>
                                                            
                                                <Col xs={6}>
                                           
                                                <p>For learning the market and the big picture</p>
    
                                                <ul className="">
                                                    {/* <li><b>For learning the market and the big picture</b></li> */}
                                                    <li>Competitive Analysis</li>
                                                    <li>Social listening</li>
                                                    <li>Survey</li>
                                                </ul>
    
                                                
    
                                                </Col>
                                                <Col xs={6}>
                                                <p>For learning user behaviors and patterns</p>
    
                                                <ul className="">
                                                    <li>Video diary</li>
                                                    <li>Draw the Experience</li>
                                                    <li>Interview</li>
                                                </ul>
                                            
                                                </Col>
                                                
                                            </Row>
                                    </Container>   
                                    <ImageZoom
                                        image={{
                                        src: '/images/nightkick/process-Image.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}/>
                                    <h6>My Responsibility</h6>
                                    <li className="p-list">Interview Questions</li>
                                      <p>I crafted <a className="text_link" href="https://docs.google.com/document/u/3/d/10GNB17x5bil41jrfX---k993r8L7j-Ryjpe-_X73gF4/edit?usp=sharing">interview questions</a> to probe the goal, process, feelings of people's daily commutes, what tools/methods people adopt or want to feel safer.</p> 
                                      <li className="p-list">Passive Observation Method</li>
                                     <p>I eventually chose video diary since it has the least influence on the participants while reveals to us as many clues and details of the participants’ emotions as possible. I then drafted the <a className="text_link" href="https://docs.google.com/document/d/1HoD-fcEsiY-5p6EdLRqwugta3pMzVOn8o5NzBhJU-nY/edit">instructions</a> for participants</p>
                                      
                                     {this.state.research?
                                     (<>
                                        {/* HIDDEN CONTENT 👇 */}
                                        <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("research")}>Hide Research Details</button>
                                        </div>
                                        <h6>Survey</h6>
                                        <p className="project_info">2 rounds, 43 and 34 responses. To get a big picture of what a typical commute looks like, as well as discover what tools commuters use to help themselves feel safer. Links to <a className="text_link" href="https://www.surveymonkey.com/r/YSP2NHY">survey1</a> & <a className="text_link" href="https://docs.google.com/forms/d/e/1FAIpQLSeqgzFVjsaIKsUXMP_KP9omzDy289nGPQyYrf4MyfEyFCTqGQ/viewform?usp=sf_link">survey2</a>.</p>
                                        <p>Our surveys were distributed electronically to classmates and colleagues who walk as part of their commute, and was disseminated to members of the University of Washington community through various Slack channels. After conducting our initial survey, we revised the questions based on the answers we received, in order to gather more relevant data from our second round.</p> 
                                        <h6>Competitive Analysis & Social Listening</h6>
                                        <p className="project_info">6 apps, 13 other tools and services. To explore what tools were already on the market to help people feel safer during their commutes. Links to <a className="text_link" href="https://docs.google.com/spreadsheets/d/1PV81rw0zDMw4o135dyyf1dSGn4ebHfVbq8U8H4zLZBE/edit?usp=sharing">report</a>.</p>
                                        <p>We conducted a competitive analysis through social listening on Apple App Store, Google Play Store, and Reddit for 6 apps including Life360, Noonlight, LifeLine Response, Circle of 6, and BSafe. We also looked at popular tools people use to feel safer when commuting, such as pepper spray, FaceTime, and ride-sharing.</p> 
                                        <h6>Interview</h6>
                                        <p className="project_info">8 participants. To gather qualitative data of people’s goals, needs, feelings and problems during their commutes. Links to <a className="text_link" href="https://docs.google.com/document/u/3/d/10GNB17x5bil41jrfX---k993r8L7j-Ryjpe-_X73gF4/edit?usp=sharing">questions</a>.</p>
                                        <p>Utilizing insights gained from the survey results, we held 30-minute interviews with 8 friends and colleagues in the Seattle area who walk as part of their commute. In order to create a useful and effective design solution, We sought out in-depth perspectives on what their commuting experiences felt like, and what habits they had created to address any relevant concerns.</p> 
                                        <h6>Draw Your Experience</h6>
                                        <p className="project_info">7 participants. To gauge processes and emotions experienced during a commute. Link to <a className="text_link" href="https://drive.google.com/file/d/1I8xugVeIqRcB9PoVq1aTaaacsYZ7O8dt/view">template</a>.</p>
                                        <p>For the draw your experience component, we provided participants with a blank sheet of paper and asked them to draw their usual route home, with annotations included. As they drew and explained their thought processes, the researchers helped participants expand on those habits, and facilitated the conversation around why they took certain actions.</p> 
                                        <h6>Video Diary</h6>
                                        <p className="project_info">5 participants. To observe participants’ behaviors and reactions without our presence. Link to <a className="text_link" href="https://docs.google.com/document/d/1HoD-fcEsiY-5p6EdLRqwugta3pMzVOn8o5NzBhJU-nY/edit">instructions</a> and <a className="text_link" href="https://docs.google.com/document/d/1lGv-m_2FgMajtEdVBymghY-kfdOA9I5fDZmOe6jpB9A/edit">insights</a>.</p>
                                        <p>We gave participants survey instructions with guidelines on how to film and what to comment on during the process. Then, we asked people to take videos on their way home.</p> 
                                       


                                        <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("research")}>Hide Research Details</button>
                                        </div>
                                    </>)
                                    :(<>
                                         <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("research")}>See All Research Details</button>
                                        </div>
                                    </>)}                     
                                
                                   
                               
                                </section>
                                <section className="project_body" id="syn">
                                    <h2>Synthesize</h2>
                                    
                                    <h5>Key Findings & Insights</h5>
                                    <p>After collecting our data, we conducted a group brainstorming session to: organize our data, gain insights from our findings, identify who are potential users would be, create personas, and define usage scenarios and design principles to guide our design process.</p>


                                    
                                    <Container className="">
                                        <Row>
                                                        
                                            <Col xs={4}>
                                            <div className="project_square_illustration_container">
                                                        <ImageZoom
                                                        image={{
                                                        src: '/images/nightkick/affinitydiagram.jpg',
                                                        alt: '',
                                                        className: 'project_square_illustration'
                                                        }}
                                                    
                                                    />
                                            
                                            </div>
                                            <div className="project_caption text-center">Affinity Diagram</div>

                                            </Col>
                                            <Col xs={4}>
                                                <div className="project_square_illustration_container">
                                            <ImageZoom
                                                image={{
                                                src: '/images/nightkick/persona.png',
                                                alt: '',
                                                className: 'project_square_illustration'
                                                }}
                                            
                                            />
                                            </div>
                                            <div className="project_caption text-center">4 Personas</div>

                                            </Col>
                                            <Col xs={4}>
                                            <div className="project_square_illustration_container">
                                            <ImageZoom
                                                image={{
                                                src: '/images/nightkick/user_flow.png',
                                                alt: '',
                                                className: 'project_square_illustration'
                                                }}
                                            
                                            />
                                            </div>
                                            <div className="project_caption text-center">2 User Flows</div>

                                            </Col>
                                        </Row>
                                    </Container>
                                    <h6>Key Insights</h6>


                                    <Container style={{padding: "30px 0 30px"}}>
                                            <Row>
                                                            
                                                <Col xs={5}>
                                        
                                                <li>People feel more comfortable when they know more about the route</li>
                                                    
                                                

                                                </Col>
                                                <Col xs={7}>
                                                <div style={{ borderLeft: "solid #f8f8f8", paddingLeft: '30px'}}>
                                                    <p className="project_info">“I was told that people bought and sold drugs there and the houses were sketchy. but actually I felt okay...... I was familiar with it so I was ok.”</p>
                                                </div>

                                                </Col>
                                                        
                                                            
                                            </Row>
                                            <Row>
                                                            
                                                <Col xs={5}>
                                                <li>People want to be ‘visible’</li>
                                                </Col>
                                                <Col xs={7}>
                                                {/* <div className="project_quote"> */}
                                                    {/* <div className="project_quote_wrapper"> */}
                                                    <div style={{ borderLeft: "solid #f8f8f8", paddingLeft: '30px'}}>
                                                    <p className="project_info">“There is more visibility during the day, more people around, generally feels safer than walking in the dark.” </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Col xs={5}>
                                                        
                                                <li>People 'rate' the situations before they reach out for help</li>
                                                    

                                                </Col>
                                                <Col xs={7}>
                                                <div style={{ borderLeft: "solid #f8f8f8", paddingLeft: '30px'}}>
                                                    <p className="project_info">“Husky nightwalk is available. I haven't used it yet though. I haven't felt unsafe enough to use it.”</p>
                                                </div>
                                                

                                                </Col>
                                            </Row>
                                    </Container>   
                                    <h6>Design Principles</h6>
                                    <p>We defined that the final solution should help users:</p>
                                    <ul>
                                        <li>Be aware of their surroundings</li>
                                        <li>Be visible to others</li>
                                        <li>Be hands-free</li>
                                    </ul>



                                    {this.state.synthesize?
                                     (<>
                                        {/* HIDDEN CONTENT 👇 */}
                                        <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("synthesize")}>Hide Syntheses</button>
                                        </div>
                                        <h6>Affinity Diagram</h6>
                                        <p>We went through all the scripts and data together and use affinity diagram to group and synthesize insights.</p>
                                    <ImageZoom
                                        image={{
                                        src: '/images/nightkick/affinitydiagram.jpg',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}/>
                                  
                                    <h6>Personas</h6>
                                    <p>Based off of our research, we created four personas:</p>
                                    <ImageZoom
                                        image={{
                                        src: '/images/nightkick/personas.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}/>
                                    <div className="project_caption text-center">See all persona images <a className="text_link" href="https://drive.google.com/drive/u/3/folders/1Moc3vOhBKP02AETgTiBQ9fsqM4ArpKCB">here</a></div>
                                    <p>We decided to design for a primary persona in order to provide ourselves with more constraints and narrow our possible design solutions. We chose the <b>Proactive Walker</b> as our primary persona, as they would be willing to use a device or devices as part of their walking commute.</p>

                                    <h6>Two User Flows</h6>
                                    <p>We also found two different user flows in two scenarios: new route and familiar route.</p>
                                    <ImageZoom
                                        image={{
                                        src: '/images/nightkick/user_flow.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}/>

                                        <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("synthesize")}>Hide Syntheses</button>
                                        </div>
                                    </>)
                                    :(<>
                                         <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("synthesize")}>See Syntheses</button>
                                        </div>
                                    </>)}     
                                </section>
                                <section className="project_body" id="ideate">
                                    <h2>Ideate</h2>
                                    <h5>Brainstorm</h5>
                                    <p>After synthesizing, we met as a group to brainstorm a lot of ideas using 'crazy 8s' method, then presented and discussed these ideas.</p>
                                    <ImageZoom
                                        image={{
                                        src: '/images/nightkick/sketches.png',
                                        alt: '',
                                        className: 'project_illustration_small'
                                        }}/>
                                    <div className="project_caption text-center">We did 2 rounds of 8-by-8 sketches</div>
                                    <p>We then compared each idea, using the criteria of strengths, weaknesses, feasibility, and originality. Finally, we narrowed them down into the three solutions that showed the most promise.</p>
                                    <Container className="">
                                        <Row>
                                                        
                                            <Col xs={4}>
                                            <div className="project_square_illustration_container">
                                                        <ImageZoom
                                                        image={{
                                                        src: '/images/nightkick/maze.png',
                                                        alt: '',
                                                        className: 'project_square_illustration'
                                                        }}
                                                    
                                                    />
                                            
                                            </div>
                                            <div className="project_caption text-center">A Community-Driven Routing App</div>

                                            </Col>
                                            <Col xs={4}>
                                                <div className="project_square_illustration_container">
                                            <ImageZoom
                                                image={{
                                                src: '/images/nightkick/keychain.png',
                                                alt: '',
                                                className: 'project_square_illustration'
                                                }}
                                            
                                            />
                                            </div>
                                            <div className="project_caption text-center">Safety Keychain</div>

                                            </Col>
                                            <Col xs={4}>
                                            <div className="project_square_illustration_container">
                                            <ImageZoom
                                                image={{
                                                src: '/images/nightkick/glasses.png',
                                                alt: '',
                                                className: 'project_square_illustration'
                                                }}
                                            
                                            />
                                            </div>
                                            <div className="project_caption text-center">AR Safty Glasses</div>
                                            
                                            </Col>
                                        </Row>
                                    </Container>
                                   

                                </section>
                                 <section className="project_body" id="design">
                                    <h2>Design</h2>
                                    <h5>From Low to Medium Fidelity</h5>
                                    
                                    <h6>Lo-fidelity Prototypes & Concept Validation</h6>
                                    
                                    
                                    <p>We started with paper protypes to test the three ideas we have and how people are going to interact with them.</p>
                                    <Container>
                                        <Row>
                                        <Col xs={5}>
                                            <ImageZoom
                                            image={{
                                            src: '/images/nightkick/lo-fi_wearable.png',
                                            alt: '',
                                            className: 'project_illustration'
                                            }}
                                            
                                            /></Col>
                                        <Col xs={7}>
                                        <ImageZoom
                                            image={{
                                            src: '/images/nightkick/prototype_process.gif',
                                            alt: '',
                                            className: 'project_illustration'
                                            }}
                                            
                                            />
                                           </Col>
                                        </Row>
                                    </Container>
                                    <div className="project_caption text-center">Paper prototypes and how we tested the three ideas</div>
                                    <p>After paper prototyping and reprioritizing these three concepts based on our personas and design principles, we settled on combining a <b>Community-Driven App with a Wearable Device.</b> </p>
                                    <ImageZoom
                                            image={{
                                            src: '/images/nightkick/concept_validation.png',
                                            alt: '',
                                            className: 'project_illustration'
                                            }}
                                            
                                    />
                                   
                                   <h6>Medium-fidelity Prototypes</h6>
                                    
                                    <p>Our medium-fidelity prototypes were to</p>
                                    <ul>
                                        <ol>1. test different features different features in usage scenarios</ol>
                                        <ol>2. explore variations of interactions</ol>
                                        <ol>3. test the interactions between the wearable and the app</ol>
                                    </ul>
                                    <li className="p-list">The Wearable</li>
                                    <p>In paper prototyping, we found that it was very hard to reach the clip-on on backpack and use it. Therefore, we shifted to a badge-like wearble with a clip at the back.</p>
                                    <p>We developed interactive medium-fidelity prototypes and put many features on the wearable to test how users are going to use it in different scenarios and which are the most desirable feature.</p>
                                    <ImageZoom
                                            image={{
                                            src: '/images/nightkick/me-fi_wearable.png',
                                            alt: '',
                                            className: 'project_illustration_medium'
                                            }}
                                            
                                    />
                                    <li className="p-list">The App</li>
                                    <p>We started with defining the key features on the app: login & signup, an onboarding manual, a contact setting for the device and a route builder with different filters.</p>
                                    <ImageZoom
                                            image={{
                                            src: '/images/nightkick/app_features.jpg',
                                            alt: '',
                                            className: 'project_illustration_medium'
                                            }}
                                            
                                    />
                                    <p>Then, I used Figma to work on the wireframes and conducted internal test on key interactions. Since the interactions are highly scenario-based, so we went directly to interactive prototypes so as to test the different features in usage scenarios with users.</p>
                                    <Container>
                                        <Row>
                                        <Col xs={6}>
                                        <ImageZoom
                                            image={{
                                            src: '/images/nightkick/wireframe.png',
                                            alt: '',
                                            className: 'project_illustration'
                                    }}/>
                                        </Col>
                                        <Col xs={6}>
                                        <ImageZoom
                                            image={{
                                            src: '/images/nightkick/me-fi_app.png',
                                            alt: '',
                                            className: 'project_illustration'
                                    }}/>
                                        </Col>
                                        </Row>
                                        
                                    </Container>
                                   
                                    
                                </section>
                                <section className="project_body" id="evaluate">
                                    <h2>Evaluate</h2>
                                    <h5>Usability Testing</h5>
                                    <p>We invited 3 participants to test Nightkick in 3 scenarios: a first-time user, commuters on a new route, and commuters on a familiar route. (Link to <a className="text_link" href="https://docs.google.com/document/d/1YPTgu-1kTpLU6OkzMlRnDkPBQQSHqWZz74nX7tHUCe0/edit?usp=sharing">the full report</a>)</p>
                                    <Container>
                                        <Row>
                                            <Col xs={4}>
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/nightkick/test1.gif',
                                                    alt: '',
                                                    className: 'project_illustration_medium'
                                                }}/>
                                                  <div className="project_caption text-center">First-time user onboarding</div>
                                            </Col>
                                            <Col xs={4}>
                                            <ImageZoom
                                                    image={{
                                                    src: '/images/nightkick/test2.gif',
                                                    alt: '',
                                                    className: 'project_illustration_medium'
                                                }}/>
                                                 <div className="project_caption text-center">Commuters on a new route</div>
                                            </Col>
                                            <Col xs={4}>
                                            <ImageZoom
                                                    image={{
                                                    src: '/images/nightkick/test3.gif',
                                                    alt: '',
                                                    className: 'project_illustration_medium'
                                                }}/>
                                                <div className="project_caption text-center">Commuters on a familiar route</div>
                                            </Col>
                                        </Row>
                                    </Container>
                                  
                                    <p>We color-coded the issues we found into different types and prioritized them according to the severity. Then, we ideated solutions to the problems.</p>
                                    <h6>Key Findings & Iterations</h6>
                                   <li className="p-list"><b>People are looking for a panic button.</b></li>
                                   <div style={{ borderLeft: "solid #f8f8f8", paddingLeft: '30px'}}>
                                        <p className="project_info">“I didn't think it is such a big deal, I will just run. I don't want to bother the police if actually nothing serious happens.”</p>
                                    </div>
                                    
                                    <p>Users did not use the call 911 button, and sometimes the flashlight and the siren on the wearable when they felt unsafe. They felt these features were too extreme for panic moments and were useless for dangerous situations. So in the final design, we got rid of all the safety-gear features and focused on <b>non-emergency</b> scenarios.</p>
                                    <ImageZoom
                                        image={{
                                        src: '/images/nightkick/delete_features.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}/>
                                     <div className="project_caption">  We focused on non-emergency scenarios and got rid of call-911 button, flashlight and siren; we also improved the ways of response after users notify contacts</div>
                                    
                                    <li className="p-list"><b>More features are needed to help people know more about new surroundings.</b></li>
                                    <div style={{ borderLeft: "solid #f8f8f8", paddingLeft: '30px'}}>
                                        <p className="project_info">“More likely that I would use it when I'm alone in a new city.”</p>
                                    </div>
                                    <p>People are less prepared for new route and want to know more about the surroundings. So we decided to include a heatmap feature that display the popularity of nightkick wearers around a route to help people learn about the surroundings and get prepared.</p>
                                    <ImageZoom
                                        image={{
                                        src: '/images/nightkick/heatmap.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}/>
                                    <div className="project_caption text-center">  The original heat map idea we generated after testing.</div>

                                           
                                    <li className="p-list"><b>Uncertain usage scenario and consequences of the 'notify' button</b></li>
                                    <div style={{ borderLeft: "solid #f8f8f8", paddingLeft: '30px'}}>
                                        <p className="project_info">“I just want to notify my friends like sending a pin over. But I don't think it is useful to send them a message that <b>I'm in danger</b>. That would just give them a heart attack.”</p>
                                    </div>
                                    <p>Users thought the 'notify' button was meant to be used only when they are in danger and was not sure what message will be sent to their contacts. Also, they thought it was useless in emergency. Since we decided to focused on non-emergency situations, I improved the onboarding manual to educate users about when and how to use the notify feature. In setting, users are asked to choose whether they want to use button on the wearable to notify a specific contact and they can customize the notification messages.</p>
                                     <Container>
                                        <Row>
                                            <Col xs={2}></Col>

                                            <Col xs={3}>
                                            <ImageZoom
                                                    image={{
                                                    src: '/images/nightkick/onboard.gif',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                }}/>
                                               
                                            </Col>
                                            <Col xs={1}></Col>

                                            <Col xs={6}>
                                            <ImageZoom
                                                    image={{
                                                    src: '/images/nightkick/custom_notify.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                }}/>
                                              
                                            </Col>
                                    
                                            
                                            {/* <Col xs={2}></Col> */}
                                        </Row>
                                    </Container>
                                    <div className="project_caption text-center">  Left: the manual. Right: custom notify message</div>
                                    <li className="p-list"><b>Unclear end of location sharing</b></li>
                                    <div style={{ borderLeft: "solid #f8f8f8", paddingLeft: '30px'}}>
                                        <p className="project_info">“I expect that the app will stop sharing my location and send out an auto-notification to my friend that I arrived.”</p>
                                    </div>
                                    <p>Whether location sharing is on or off is unclear to the users. Therefore, in final design, I added an indicator of sharing on the app. Also, Nightkick will automatically stop sharing when GPS finds that users arrive at their indicated location.</p>
                                    {/* solution */}
                                    
                                    <ImageZoom
                                                    image={{
                                                    src: '/images/nightkick/sharing.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                }}/>
                                    <div className="project_caption text-center">  Clearer state of location sharing. <a className="text_link" onClick={() => this.triggerModel("/images/nightkick/exit.gif", true)}>Click here to watch the interaction.</a></div>

                                 
                                 
                                    <li className="p-list"><b>People wear Nightkick in different ways</b></li>
                                    
                                    <p>Some users clip Nightkick to their clothes, some to their pocket and others to the backpack stripes. So I searched and ideated potential ways to wear it and sketch different modules that allow users to wear it as watch, necklace, badge, clip-on, buckle, or attach it to phonecase.</p>
                                    <ImageZoom
                                                    image={{
                                                    src: '/images/nightkick/sketch_modules.png',
                                                    alt: '',
                                                    className: 'project_illustration_medium'
                                                }}/>
                                    <div className="project_caption text-center">Sketches of Modular Design</div>
                                    
                                    
                                    
                                   

                                </section>
                                <section className="project_body" id="hifi">
                                    <h2>Visual Design</h2>
                                    <h5>Visual Design and Specification</h5>
                                    <h6>Moodboard & Visual System</h6>
                                    <p>I was responsible for the visual system of Nightkick. I created a moodboard and managed the final visual design system. We decided to use dark mode to better fit the usage scenario. (Icons credited to Material Design).</p>
                                    <Container>
                                        <Row>
                                            <Col xs={5}>
                                            <ImageZoom
                                                image={{
                                                src: '/images/nightkick/moodboard.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}/>
                                            </Col>
                                            <Col xs={7}>
                                            <ImageZoom
                                                image={{
                                                src: '/images/nightkick/designsystem.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}/>
                                            </Col>
                                        </Row>
                                    </Container>
                                   
                                    <h6>App Specifications</h6>
                                    <p>After that I worked with another team member to develope hi-fi prototypes applying the visual system and specifying interactions</p>
                                    <ImageZoom
                                                image={{
                                                src: '/images/nightkick/taskflow-hi-fi.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}/>
                                    <div className="project_caption text-center">User Task Flow</div>
                                    <ImageZoom
                                                image={{
                                                src: '/images/nightkick/specs.png',
                                                alt: '',
                                                className: 'project_illustration'
                                        }}/>
                                    <div className="project_caption">Design Specifications (view engineering details, visual design rationale and other design specifications in our <a className="text_link" href="https://drive.google.com/file/d/1F-PqgyP1GGQTS37YrUgyLODn_4SuA9tW/view?usp=sharing">design solution handbook</a>).</div>
                                    
                                     <h6>Wearable 3D modeling</h6>
                                     <p>I also made 3D model made with Fusion 360 to show the size, texture, and shape of the wearable.</p>
                                    <ImageZoom
                                                image={{
                                                src: '/images/nightkick/3dmodeling.png',
                                                alt: '',
                                                className: 'project_illustration'
                                    }}/>
                               
                                    
                                </section>
                                <section className="project_body" id="deliver">
                                <h2>Final Design</h2>
                                <h5>How did we solve the problems</h5>
                                <h6>Key Features</h6>
                                    <ImageZoom
                                        image={{
                                        src: '/images/nightkick/key_features.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}/>
                                  
                                   
                                    <h6>Hi-fi Prototypes of the App</h6>
                                    <div style={{display:'relative',padding:"20px 0 20px"}} className="d-flex justify-content-center">
                                    <iframe style={{border: "none", width: "100%", height:"600px"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWIV685BOxE1xbpfIrscxKw%2FTater-Trots%3Fnode-id%3D328%253A25941%26scaling%3Dscale-down" allowfullscreen></iframe>
                                     </div>
                                     <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                       
                                        <p className="project_quote_text">We got a lot of positive feedback in the final showcase. People liked how we keep the product simple but useful. Some even told us that they would love to buy one for their night commute :).</p>
                                    </div>

                                </div>    
                                       
                                </section>
                                <section className="project_body" id="concern">
                                <h2>Concerns</h2>
                                <h6>Privacy issues</h6>
                                <p>Utilizing location sharing as a feature causes vulnerability for users. In order to keep users' locations secure, we decided to use a “Heat Map” rather than share other users’ exact locations with each other.</p>
                                <h6>Unintentional usage</h6>
                                <p>Individuals with malicious intent could use the Heat Map to find uncrowded areas, and then hassle the few people taking that route. They could also wear the Nightkick to pretend they are good-intentioned members of the community, and gain the trust of others.</p>
                                <h6>The complexity of solution and algorithm</h6>
                                <p>There is a lot of complexity in the algorithm, as it uses location data to produce the Heat Map and suggest routes.</p>
                                <h6>Bootstrapping problem</h6>
                                <p>When the Nightkick is first launched, there will not be enough data to display realtime crowdedness. A possible solution is seeding data according to survey or observation.</p>
                            </section>
                            <section className="project_body" id="todos">
                                <h2>To-dos</h2>
                                <p>We received a lot of feedback after the final showcase and we would love to work on the following problems and potential features</p>
                                <ImageZoom
                                        image={{
                                        src: '/images/nightkick/feedback.jpg',
                                        alt: '',
                                        className: 'project_illustration_medium'
                                }}/>
                                <br/>
                                <li>The view of the contacts who receive notifications.</li>
                                <li>Reflect uncomfortable zone on map in addition to crowdedness</li>
                                <li>Electronic and mechanical design of the wearable</li>
                                <li>Design campaigns that evoke public awareness and build a community of Nightkick wearers.</li>
                            </section>
                            <section className="project_body" id="take">
                                <h2>Takeaways</h2>
                                <h6>Test early and often</h6>
                                <p>Our first versions were slightly too high-fidelity, and thus some of the responses we received from usability testing focused more on appearance and less on function. This was not our intended goal for the usability testing phase.</p>
                                <h6>K.I.S.S.</h6>
                                <p>Keep it Simple. With limited time and resources, we relied on this mantra to keep us moving forward on feasible features and directions.</p>
                                <h6>Dissolve Conflicts with personas and design principles</h6>
                                <p>Our research and personas were important foundations and guides, especially when we had disagreements or personal preferences to debate.</p>
                                <h6>Design ethics</h6>
                                <p>Many considerations came up during our design process. For example, our research found that many people felt unsafe by people who appeared to be experiencing homelessness. Even though trying to address this would fit within our design question, we decided that the risk of unintentional consequences from stereotypes were very high if we chose this path.</p>
                            </section>
                            <section className="project_body" id="present">
                                <h2>Bonus</h2>
                                <h5>The Final Presentation 😝</h5>

                                <div style={{display:'relative',padding:"20px 0 20px"}} className="d-flex justify-content-center">
                                        <iframe style={{width:'100%',minHeight:'540px'}}  src="https://www.youtube.com/embed/PBKgMAdzla0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </section>
                               
                            </div>
                           
                        </Col>
                    </Row>
                </div>
    
    
                
                                
    
                <ProjectPagination prev={prev} next={next}/>
                <ImageModal
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
                url={this.state.url}
                direction={this.state.modalDirection}
                />
                <BackToTopBtn contents={contents} prev={prev} next={next}/>
                
            </>)
    }
    
    
}


export default Nightkick;

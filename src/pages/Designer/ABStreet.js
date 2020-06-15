import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'
import unknown from "react-reveal/wrap";

const contents = [
    {
        id: "#overview",
        name: "Project Overview"

    },
    {
        id: "#intro",
        name: "Intro"

    },
    {
        id: "#demo",
        name: "Demo"
    },
    {
        id: "#research",
        name: "Research"

    },
    {
        id: "#design",
        name: "Ideate & Design"

    },
    {
        id: "#evaluate",
        name: "Evaluate & Iterate"

    },
    {
        id: "#deliver",
        name: "Deliver"

    },
    {
        id: "#todo",
        name: "To dos"

    }
]

const prev = {
    url: "/work/photome",
    name: "PhotoMe"
}

const next = {
    url: "/work/specs",
    name: "Specs"
}


function ABStreet() {

    return (<>
        <ScrollToTopOnMount />
        <div className="project_head_container">
            <section className="project_head">
            <ButtonToolbar>
                    <OverlayTrigger
                        key="right"
                        placement="right"
                        overlay={
                            <Tooltip id="right">
                                Download The Game.
                    </Tooltip>
                        }
                    >
                        <a href="https://github.com/dabreegster/abstreet" className="hi_a"><h1>A/B Street<i className="fas fa-link ml-2"></i></h1></a>
                    </OverlayTrigger>
                </ButtonToolbar>
                <h3>A traffic simulation game exploring how small changes to roads affect cyclists, transit users, pedestrians, and drivers.</h3>
                <div className="project_info">November 2019 - Now, Passion Project</div>
            </section>
        </div>
        {/* <div className="project_separator_transparent">
            <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/outbreak/cover.png"} />
        </div> */}
       
        <div className="project_overview_container" id="overview">
            <Row>
                <Col sm={12} md={5}>
                    <div className="project_overview_title">Background</div>
                    <div className="project_overview_content">Ever been on a bus stuck in traffic, wondering why there are cars parked on the road instead of a bus lane? A/B Street is a game exploring how small changes to a city affect the movement of drivers, cyclists, transit users, and pedestrians.</div>
                </Col>
                <Col sm={4} md={5}>

                    <div className="project_overview_title">My Contributions</div>
                    <div className="project_overview_content">· Organized usability testings and cognitive walkthroughs to identify usability problems</div>
                    <div className="project_overview_content">· Iteratively improved game UI and interactions via rapid protyping and testing</div>
                </Col>
                <Col sm={4} md={2}>

                    <div className="project_overview_title">Teammate</div>
                    <div className="project_overview_content"><a className="text_link" href="https://github.com/dabreegster">Dustin Carlino</a></div>
                </Col>

            </Row>
        </div>






            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="scrollby left_bar_wrapper">
                              
                              <ul  
                              data-uk-scrollspy-nav="closest: li; scroll: true;">
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
                                <h2>Intro</h2>
                                <h5>Do you believe in the power of gaming?</h5>
                                <p>In November 2019, I was looking for chances to test my interaction design skills in some real-world projects. When I was browsing <a href="https://democracylab.org">DemocracyLab</a>, A/B Street caught my eyes. I’ve long been interested in persuasive design and gamification. “Game for changes” plus design for complex game UI sounded so fascinated that I sent a message to Dustin as long as I read through the project intro. Since then, I’ve been working as a UX designer for the game. What I learned from this experience is way more than what I expected.</p>
                            </section>
                        </div>

                      
                        <div className="project_container" id="problem">

                            <section className="project_body">
                                <h2>Problem</h2>
                                <h5>How might we leverage a better game UI for more accessibility?</h5>
                                <p>At the point when I joined the project, Dustin has already built up a complex game with complete simulations of traffic in Seattle where players can make changes to roads and intersections or take various challenges for traffic improvement. However, the interactions of the game highly depended on hotkeys and the interface was clustered with information and data visualization. </p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/problem.png',
                                        alt: '',
                                        className: 'project_illustration_small'
                                    }}

                                />
                                <p>However, the interactions of the game highly depended on hotkeys and the interface was clustered with information and data visualization. Therefore, I first synthesized the key user flows by observing how the game should be played and identified usability problems with cognitive walkthroughs.</p>
                            </section>


                            <section className="project_body" id="design">
                                <h2>Synthesize</h2>
                                <h5>How should the game</h5>
                                <p>We started with exploring the different ways to visualize the variables in database and looking for patterns in our exploratory analyses. As a result, we found out four different patterns that could be included in the final storytelling: time, states, settings and etiology. We also discovered outliners that we wanted to also showcase in our final design.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/sketch.jpg',
                                        alt: '',
                                        className: 'project_illustration_small'
                                    }}
                                />
                                
                                
                               
                            </section>
                            <section className="project_body" id="evaluate">
                                <h2>Evaluate & Iterate</h2>
                                <h5>How we evaluated and improved the design</h5>
                                <h6>Usability testing</h6>
                                <p>We conducted two rounds of formal task-based usability testings on first the Tableau prototypes and second the website with seven participants representing the general population. The data we collected including: </p>
                                <ul>
                                    <li>Overall understanding of dashboards </li>
                                    <li>Task completion</li>
                                    <li>Understanding of the trends</li>
                                    <li>Interaction with the data viz</li>
                                    <li>Overall learnings</li> 
                                    <li>Issues</li> 
                                </ul>
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/testing.png',
                                        alt: '',
                                        className: 'project_illustration_small'
                                    }}
                                />
                                <div className="project_caption text-center">We were testing the prototypes with a user</div>

                                <p>We gathered and synthesized all findings in an google spreadsheet, and worked together to identify highest severity usability issues to iterate on.</p>
                                <h6>Findings & iterations</h6>
                                <li className="p-list"><b>Simplify and streamline the visualizations</b></li>
                                <p>In testing we found that participants were confused with the complicated visualizations such as parallel coordinates and were inclined to scan through the visualizations and interact only when they found something interesting. Therefore, in the final design, we decided to:</p>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <p>1. Show patterns straightforwards</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/outbreak/simple1.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}
                                        />
                                        <div className="project_caption">Display monthly patterns  outbreaks directly without additional interaction.</div>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <p>2. Replace complicated plots with accessible plots</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/outbreak/simple2.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}
                                        />
                                        <div className="project_caption">Show food and water related data instead of etiology and simply the encoding.</div>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <p>3. Keep only information intrigues the users</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/outbreak/simple3.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}
                                        />
                                        <div className="project_caption">Take out information that users don't care about.</div>
                                    </Col>
                                </Row>
                                
                               

                               
                                
                                <li className="p-list"><b>Enhanced interactions to facilitate exploration (details on demand)</b></li>

                                   
                                <p>In the usability testing, participants found some graphs on the hovering popups were either incomplete or too complicated. Also, some visualizations were too overwhelming showing different information and affordances of interactions. Therefore, we improved the detailed graphs and displayed them only on demand.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/detail1.png',
                                        alt: '',
                                        className: 'project_illustration_small'
                                    }}
                                />
                                <div className="project_caption text-center">Change complicated tree map to simple bar chart.</div>
                                
                                <li className="p-list"><b>Better storytelling with better web design, labels, annotations, and legends</b></li>
                                <p>Participants mentioned in the usability testing that the website was more informative than narrative. Therefore, we added more avisible legends, comments with more detailed explanations and used section titles, subtitles and instructions to provide them with better context</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/storytelling.png',
                                        alt: '',
                                        className: 'project_illustration_medium'
                                    }}
                                />
                                <div className="project_caption text-center">The various techniques to improve storytelling.</div>

                            </section>

                            <section className="project_body" id="deliver">
                                <h2>Deliver</h2>
                                <h5>How we visualize the data patterns in a storytelling way</h5>
                                <h6>1. Outbreak distribution by months or seasons</h6>
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/time.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/time2.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                                <h6>2. Outbreak distribution by states</h6>
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/geo.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                                <h6>3. Outbreak distribution by settings</h6>

                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/setting.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/setting2.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />

                                <h6>4. Outbreak distribution by food & water agents</h6>
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/food.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                                <h6>5. Extreme outbreak stories</h6>
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/story.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                                 <ImageZoom
                                    image={{
                                        src: '/images/outbreak/story2.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                                
                                <p>Here is a presentation of our final website.</p>
                                <div style={{ display: 'relative', padding: "20px 0 20px" }} className="d-flex justify-content-center">
                                <iframe style={{width: '100%', minHeight: '540px'}} src="https://www.youtube.com/embed/ArjJ7yLy3fQ" frameborder="0" allow="accelerometer; encrypted-media;" allowfullscreen></iframe>
                                
                                </div>
                            
                            </section>
                           
                            <section className="project_body" id="todo">
                                <h2>To Dos</h2>
                                <h6>UX writing</h6>
                                <p>Since we were not public health professionals, we needed to spend time understanding all the variables and translate them into daily English. We think it would be helpful if we could employ a UX Content Strategist for consistent and concise messaging for the website.</p>
                                <h6>Wider range of usability testings</h6>
                                <p>Even though we conducted two rounds of testings, we still think that more testings are needed to evaluate some of the final designs. Seting up a booth on public places such as grocery stores or park might be a great way to reach the general population.</p>
                                <h6>Explore different data visualization tools</h6>
                                <p>We would love to explore different tools for more complex interactions and visualizations so as to facilitate more effective storytelling.</p>
                            </section>


                        </div>

                    </Col>

                </Row>


            </div>
            <ProjectPagination prev={prev} next={next} />
            <BackToTopBtn contents={contents} prev={prev} next={next} />
        </>)
}


export default ABStreet;

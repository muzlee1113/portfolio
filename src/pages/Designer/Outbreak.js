

import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
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


function Outbreak() {

    return (<>
        <ScrollToTopOnMount />
        <div className="project_head_container">
            <section className="project_head">
                <h1>Data Visualizations of National Enteric Outbreaks</h1>
                <h3>Explore and learn the patterns of reported enteric disease outbreaks in the US from 2009-2017.</h3>
                <div className="project_info">January-March 2020 (10 weeks), School Project</div>
            </section>
        </div>
        <div className="project_separator_transparent">
            <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/outbreak/cover.png"} />
        </div>
       
        <div className="project_overview_container" id="overview">
            <Row>
                <Col sm={12} md={6}>
                    <div className="project_overview_title">Background</div>
                    <div className="project_overview_content">In Winter quarter 2019-2020, we  created an interactive data visualization webpage that allows the general population to explore and learn about the history of enteric illness outbreaks in the U.S.</div>

                </Col>
                <Col></Col>
                <Col sm={4} md={2}>

                    <div className="project_overview_title">My Role</div>
                    <div className="project_overview_content">Research</div>
                    <div className="project_overview_content">Data Visualization</div>
                    <div className="project_overview_content">Web Development</div>
                </Col>
                <Col sm={4} md={3}>

                    <div className="project_overview_title">Team</div>
                    <div className="project_overview_content">Kathleen Parsons</div>
                    <div className="project_overview_content">Qiming (Chris) Zheng</div>
                    <div className="project_overview_content">Xuan (Karen) Song</div>


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
                                <h2>Intro</h2>
                                <h5>Why we were intersted in visualizing epidemic data</h5>
                                <p>2020 was doomed to be a special year. The COVID-19 outbreak swept over the world. People are more aware of the threats coming from contagious diseases and how outbreaks could be easily sparked and spread to every corner of the world. Since a growing number of people are curious about epidemics, we explored <a href="https://www.cdc.gov/nors/index.html">the National Outbreak Reporting System (NORS)</a> within the Centers for Disease Control and Prevention (CDC) and decided to visualize data of enteric outbreaks and reveal some important patterns of their spread. </p>
                            </section>
                        </div>

                        <section className="project_body" id="demo">
                            <h2>Final Website</h2>
                            <h5>Demo Video</h5>
                            <p><a className="text_link" href="https://wash-yo-hands.now.sh/">👉 Play with the visualizations on our website</a></p>
                            <div style={{ display: 'relative', padding: "20px 0 20px" }} className="d-flex justify-content-center">
                            <iframe style={{width: '100%', minHeight: '540px'}} src="https://www.youtube.com/embed/2tvCuXQ60oQ?rel=0&autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media;" allowfullscreen></iframe>
                            </div>
                        </section>

                        <div className="project_container" id="research">

                            <section className="project_body">
                                <h2>Research</h2>
                                <h5>Who we were designing for</h5>
                                <p>We started with defining the audience/user of the data visualizations and came up with the following persona.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/outbreak/persona.png',
                                        alt: '',
                                        className: 'project_illustration_small'
                                    }}

                                />
                                <p>After exploring similar data visualizations and interviewing potential users, we decided to take a <b>storytelling approach</b> rather than exploratory approach in our data visualizations. Therefore, the design was going to display the patterns we found in the data set in a visual and interactive way.</p>
                            </section>


                            <section className="project_body" id="design">
                                <h2>Ideate & Design</h2>
                                <h5>How we explored the database and wove the story</h5>
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
                                <h5>How we evaluate and improve the design</h5>
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


export default Outbreak;

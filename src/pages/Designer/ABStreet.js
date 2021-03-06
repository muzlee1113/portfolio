import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'
import ProjectContentNav from '../../components/ProjectContentNav'

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
        id: "#approach",
        name: "Approach"
    },
    {
        id: "#solution",
        name: "Solution"

    },
    {
        id: "#design",
        name: "Interaction Design"

    },
    {
        id: "#viz",
        name: "Visual Design"

    },
    {
        id: "#todo",
        name: "To dos"

    }
]






function ABStreet(props) {
    const pagination = props.pagination

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
        <div className="project_separator_transparent">
            <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/abstreet/cover.png"} />
        </div>
        <div className="project_overview_container" id="overview">
            <Row>
                <Col sm={12} md={5}>
                    <div className="project_overview_title">Background</div>
                    <div className="project_overview_content">Ever been on a bus stuck in traffic, wondering why there are cars parked on the road instead of a bus lane? A/B Street is a game exploring how small changes to a city affect the movement of drivers, cyclists, transit users, and pedestrians.</div>
                </Col>
                <Col sm={4} md={5}>

                    <div className="project_overview_title">My Contributions</div>
                    <div className="project_overview_content">· Organized usability testings and cognitive walkthroughs to identify usability problems</div>
                    <div className="project_overview_content">· Iteratively improved game UIs and interactions via rapid protyping and testing</div>
                    <div className="project_overview_content">· Offered consultancy on design strategies</div>
                </Col>
                <Col sm={4} md={2}>

                    <div className="project_overview_title">Teammate</div>
                    <div className="project_overview_content"><a className="text_link" target="_blank" href="https://github.com/dabreegster">Dustin Carlino</a></div>
                </Col>

            </Row>
        </div>






            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <ProjectContentNav contents={contents} pagination={pagination}/>
                    </Col>
                    <Col md={12} lg={9}>
                        <div className="project_container">
                            <section className="project_body" id="intro">
                                <div id="scrollstart"></div>
                                <h2>Intro</h2>
                                <h5>Game for changes</h5>
                                <p>In November 2019, I was looking for chances to practice my interaction design skills in some real-world projects. When I was browsing <a href="https://democracylab.org">DemocracyLab</a>, A/B Street caught my eyes. I’ve long been interested in persuasive design and gamification. “Game for changes” plus design for complex game UI sounded so fascinated that I sent a message to Dustin, the founder & developer of the game, as long as I finished reading the project brief. Since then, I’ve been working as a UX designer for the game. </p>
                       
                                <p>At the point when I joined the project, Dustin has already built up a complex game with complete simulations of traffic in Seattle where players can make changes to roads and intersections or take various challenges about traffic improvements.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/problem.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <p>However, the interactions of the game were highly depended on hotkeys and the interface was clustered with information and data visualization. To attract not only civil engineering and GIS enthusiasts but the general public as well, <b>a clearer and more intuitive game interface</b> was needed.</p>
                            </section>


                            <section className="project_body" id="approach">
                                <h2>Approach</h2>
                                <h5>How I started and planned out the design</h5>
                                <p>The whole process consists of multiple design sprints:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/approach.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                                <div className="project_caption">Before started, I diagramed the basic tasks and flows of the game and the purposes of each task after discussing with the founder. With this in mind, in each sprint, I conducted in-group cognitive walkthroughs to identify the key usability problems and design questions for a specific task. Then, we ideated solutions for each question one by one as a group and I prototyped the solutions after the brainstorming. After the design was implemented, I conducted usability testing with the target audience or another walkthrough to validate and adjust the design along the way.</div>
                            </section>
                            <section className="project_body" id="research">
                                <h2>Research & Ideate</h2>
                                <h5>Game Design & Player Flow</h5>
                                <p>Game UI design is different from normal UI since the goals of players’ actions are devised by game mechanisms and the tasks and flows are defined by rules. However, similar to normal UI design, a good UI makes it fast and easy for the players to learn what is available, perform the tasks, and pick up the flows.</p>
                                <p>Here is the key player flow we mapped out for the game, the problems players have when completing each task, and the proposed solutions for the problems:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/brainstorm.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                            </section>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="project_separator" id="solution">

                <div className="project_separator_inner_wrapper" >
                    <h2>Solution</h2>
                    <Row>
                        <Col xs={3}>
                            <div className="project_caption text-center">Locate and zoom in to a problem</div>
                            <ImageZoom
                                image={{
                                    src: '/images/abstreet/locate.gif',
                                    alt: '',
                                    className: 'project_illustration'
                                }}

                            />
                            
                            <div className="project_quote_sm">
                                <div className="project_quote_sm_wrapper">
                                    <div className="project_quote_sm_text">Oh! There is a huge delay at this intersection."</div>
                                </div>
                            </div>

                           
                            
                        </Col>


                        <Col xs={3}>
                            <div className="project_caption text-center">Analyze the causes</div>

                            <ImageZoom
                                image={{
                                    src: '/images/abstreet/analyze.gif',
                                    alt: '',
                                    className: 'project_illustration'
                                }}

                            />

                            <div className="project_quote_sm">
                                <div className="project_quote_sm_wrapper">
                                    <div className="project_quote_sm_text">"Emmm, seems like a lot of cars are rushing into the intersection from this direction."</div>
                                </div>
                            </div>
                           
                        </Col>
                        <Col xs={3}>
                            <div className="project_caption text-center">Edit the map to fix the problem</div>

                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/edit.gif',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />

                            <div className="project_quote_sm">
                                <div className="project_quote_sm_wrapper">
                                    <div className="project_quote_sm_text">"Let's change the traffic signal to increase the time for this direction."</div>
                                </div>
                            </div>
                           
                        </Col>
                        <Col xs={3}>
                            <div className="project_caption text-center">Test the solution in simulation</div>

                            <ImageZoom
                                image={{
                                    src: '/images/abstreet/validate.gif',
                                    alt: '',
                                    className: 'project_illustration'
                                }}

                            />

                            <div className="project_quote_sm">
                                <div className="project_quote_sm_wrapper">
                                    <div className="project_quote_sm_text">"Things seem to get little better. What else should I do?"</div>
                                </div>
                            </div>
                            
                        </Col>



                    </Row>
                </div>
            </div>
            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <ProjectContentNav contents={contents} pagination={pagination}/>
                    </Col>
                    <Col md={12} lg={9}>
                            <section className="project_body" id="design">
                                <h2>Design</h2>                   
                                <h5>How to support player flow with better Game UIs</h5>
                                <h6>1. Locate and zoom in to a problem</h6>
                                <p>On the one hand, players need to locate problematic areas on the map. On the other hand, they need to locate problematic periods of time in certain areas. Therefore, a better way to navigate on map and time is important. Also, players focus on different problems in different challenges. A better way to display game goals and check current performance against the goals is also very helpful for players to discover problems.</p>
                                <p className="p-list">#1 Map Navigation</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/minimap.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                             
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/overlays.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <div className="project_separator">
                                    
                                    <div className="project_separator_inner_wrapper" >
                                        <div className="project_separator_title">💡 Reflection</div>
                                        <p>Some of the colors apply here are not accessible to people with visual impairment. More work need to be done to improve the accessibility</p>
                                    </div>
                                </div>
                                
                                <p className="p-list">#2 Time Navigation</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/timedisplay.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />

                                <p className="p-list">#3 Goals and Current Status</p>

                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/meter.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />


                                <p className="p-list">#4 Data Dashboard</p>

                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/datadashboard_1.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/datadashboard_1_1.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                 <ImageZoom
                                    image={{
                                        src: '/images/abstreet/datadashboard_2.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />

                                
                                <h6>2. Analyze the causes</h6>
                                <p>When analyzing the cause of a problem, for example, a traffic jam at an intersection, the players want data related to the intersection and areas around, and also data of the people and vehicles around. They can click down to see details of the intersection and other infrastructure, or follow a pedestrian or a car.</p>

                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/infopanel_1.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/infopanel_2.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/infopanel_3.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                               
                                

                                <h6>4. Edit the map to fix the problem</h6>
                                <p>Once players figure out how to solve the problems, they can start editing the lanes or the intersections to fix the problems. </p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/edit_1.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/edit_2.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                             
                                <div style={{margin: "0 auto 0", display: "flex", flexDirection:"row", alignItems: "flex-end"}}>
                                    <div>
                                        <ImageZoom
                                            image={{
                                                src: '/images/abstreet/edit_3.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                    </div>
                                    <div>
                                        
                                    <ImageZoom
                                        image={{
                                            src: '/images/abstreet/edit_3.gif',
                                            alt: '',
                                            className: 'project_illustration_medium'
                                        }}

                                    />
                                     </div>
                                </div>
                                
                                

                                <h6>5. Test the solution in simulation</h6>
                                <p>After players editing something, how the edits are going to affect the areas, and how they are going to affect the score. Also, by knowing this they can learn and form their own strategy. Short-term feedback and long-term feedback are both important for these purposes.</p>
                                <p>For short-term feedback, a preview mode for intersection editing is provided. Players can add random agents to the map or run similar scenarios as the time they paused to test the concept without applying the edits to the real map and time.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/preview.gif',
                                        alt: '',
                                        className: 'project_illustration_medium'
                                    }}

                                />
                                <div className="project_caption">Use preview mode to quickly validate some edits. Here I found that the two intersections' traffic signals were not synced after preview so I adjusted my edits and validated that reordering the phases would improve the traffic.</div>
                                <p>For longer-term feedback, they can observe agents and see how their scores and other meters change after resume the simulation. Players are able to easily resume from the time when they pause for the editing or from the very start to get a real accurate 24-hour simulation.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/resume.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                

                                <h6>6. Version Control & Resume</h6>
                                <p>After edits, players want to quickly  Since the ultimate goal of the game is to promote changes in traffic infrastructure. We encourage to players to test on various assumptions and propose different edits. Therefore, it is important to help them learn from trial and error and manage different versions of the edits.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/version.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                            <section className="project_body" id="viz">
                                <h2>Visual Design</h2>
                                <h5>Explore the Style of the Game</h5>
                                <p>To improve the storytelling and make the game more appealing, I also explored the visual design of game starting screen and game script characters.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/startscreem.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/abstreet/character.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                            </section>
                                



                            </section>
                            <section className="project_body" id="todo">
                                <h2>To Do</h2>
                                <ul>
                                    <li className="p">Set up feedback channel and do more testing with players</li>
                                    <li className="p">Explore more ways to give more in-time feedback to help players validate edits and learn</li>
                                    <li className="p">Improve the learnability of the game with better help document and contextual hints & guidances</li>
                                    <li className="p">Experiment with bringing in sounds to improve experience</li>
                                    <li className="p">Work with game designers to improve game mechanisms, rules and storytelling.</li>
                                    <li className="p">Focus more on improving and visual of the game</li>
                                </ul>
                        </section>
                    </Col>

                </Row>


            </div>
            <ProjectPagination pagination={pagination} />
            <BackToTopBtn contents={contents} pagination={pagination} />
        </>)
}


export default ABStreet;

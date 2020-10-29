import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import ImageModal from '../../components/ImageModal'
import BackToTopBtn from "../../components/BackToTopBtn"
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
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
        name: "Problem"

    },
    {
        id: "#solution",
        name: "Solution"

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
        id: "#evaluate",
        name: "Evaluate"

    },
    {
        id: "#deliver",
        name: "Final Design"

    },
    {
        id: "#impact",
        name: "Impact"

    },
    {
        id: "#todo",
        name: "To dos"

    },
    {
        id: "#take",
        name: "Takeaways"

    },
    {
        id: "#relate",
        name: "Related Work"

    },
]

// const pagination = 1


class IoTBest extends React.Component {

    state = {
        modalShow: false,
        hide: true,
        hide2: true,
        hide3: true,
        hide4: true,
        // setModalShow:false,
        url: "",

    }

    toggleHiddenContent = (id) => {
        this.setState({
            [id]: !this.state[id]
        })
    }

    triggerModel = (url) => {

        this.setState({
            url: url,
        }, () => {
            this.setState({
                modalShow: true
            })
        })
    }
    render() {
        const pagination = this.props.pagination


        return (<>
            <ScrollToTopOnMount />


            <div className="project_head_container">

                <section className="project_head">
                    <h1>Smart City Street Light Management Tool</h1>
                    <h3>A tool that helps lighting infrastructure administrators to control smart street lights energy-efficiently, accurately and easily on different occasions.</h3>
                    <div className="project_info">Work project. The full project lasted more than 3 months (May - July 2019) and shipped in September</div>
                </section>

            </div>


            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/IoT/headImg.png"} />
            </div>

            <div className="project_overview_container" id="overview">
                {/* <Container> */}
                <Row>
                    <Col sm={12} md={5}>
                        <div className="project_overview_title">Background</div>
                        <div className="project_overview_content">The team that I interned on was commissioned by a smart device manufacturer to redesign a web-based smart city infrastructure management tool. This is a case study of one of the features that I designed specifically for lighting infrastructure administrators to control various smart street lights.</div>

                    </Col>
                    {/* <Col></Col> */}
                    <Col sm={4} md={5}>
                        
                        <div className="project_overview_title">My Contributions</div>
                        <div className="project_overview_content">· Planed and conducted <b>quick user research</b> and turned insights into <b>user scenarios</b> for design.</div>
                        <div className="project_overview_content">· Defined <b>design goals</b> and specified <b>user flows</b> for each of the use cases.</div>
                        <div className="project_overview_content">· Developed different <b>variations</b> of wireframes and interactive prototypes for <b>validation</b>.</div>                         
                        {/* <div className="project_overview_content">User Research</div>
                        <div className="project_overview_content">Product Design</div>
                        <div className="project_overview_content">Interaction Design</div>
                        <div className="project_overview_content">Prototyping</div>
                        <div className="project_overview_content">Usability Testing</div> */}
                    </Col>
                    <Col sm={4} md={2}>

                        <div className="project_overview_title">Teammates</div>
                        <div className="project_overview_content">1 × Product Manager</div>
                        <div className="project_overview_content">2 × Visual Designers</div>
                        <div className="project_overview_content">4 × Developers</div>
                    </Col>

                </Row>
                {/* </Container> */}
            </div>
            <div className="project_overview_container">
                <div className="project_overview_title">Design Process</div>


                <Row>
                    <Col xs={4} md={2}>


                        <img src={process.env.PUBLIC_URL + "/images/leftStep.png"} />
                        <div className="project_overview_content py-1"><b>Research</b></div>
                        <div className="project_overview_content">Contextual inquiry</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />
                        <div className="project_overview_content py-1"><b>Synthesize</b></div>
                        <div className="project_overview_content">User flow</div>
                        <div className="project_overview_content">Problem space</div>

                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />

                        <div className="project_overview_content py-1"><b>Ideate</b></div>
                        <div className="project_overview_content">Brainstorming</div>
                        <div className="project_overview_content">Sketching</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />
                        <div className="project_overview_content py-1"><b>Design</b></div>
                        <div className="project_overview_content">Wireframing</div>
                        <div className="project_overview_content">Interaction design</div>
                        <div className="project_overview_content">Hi-fi prototyping</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />

                        <div className="project_overview_content py-1"><b>Evaluate</b></div>
                        <div className="project_overview_content">Usability testing</div>
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
                        <ProjectContentNav contents={contents} pagination={pagination}/>
                    </Col>

                    <Col md={12} lg={9}>
                        <section className="project_body" id="intro">
                            <div id="scrollstart"></div>
                            <h2>Problem</h2>
                            <h5>Complex tools were used to control street lights</h5>
                            <p>Here is the existing management tool for the administrators to control the highway lighting system. The problems of the tool are obvious:</p>
                            <ImageZoom
                                image={{
                                    src: '/images/IoT/existingtool.gif',
                                    alt: '',
                                    className: 'project_illustration'
                                }}

                            />
                            <div className="project_caption  text-center">Here is a <a className="text_link" href="https://www.figma.com/proto/31wTxeoPe74AqBg83CWTB3/Highway-Light-Management-Tool?node-id=4%3A25&scaling=min-zoom">Interactive interface</a> I recreated with the screenshots. It took 7 clicks to get to a light!</div>
                            <br />
                            <p>So the initial design question I raised was simple:</p>
                            <div className="project_quote">
                                <div className="project_separator_inner_wrapper_small">

                                    <p className="project_quote_text">How might we make the street light control process easier for lighting infrastructure administrators?</p>
                                </div>

                            </div>

                        </section>
                    </Col>
                </Row>
            </div>
            <div className="project_separator" id="solution">

                <div className="project_separator_inner_wrapper" >
                    <h2>Solution</h2>
                    <h5>Final Design</h5>
                            <Row>
                                <Col xs={4}>
                                        
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/final_default_plan.gif',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                


                                    <div className="project_caption text-center">Smart Default Lighting Plan</div>
                                </Col>
                                <Col xs={4}>
                                    
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/final_special_plan.gif',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                  


                                    <div className="project_caption text-center">Preset Special Lighting Plan</div>
                                </Col>


                                <Col xs={4}>
                                   
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/final_emergency_control.gif',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />

                                    
                                    <div className="project_caption text-center">Emergency Control of Devices</div>
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
                            <section className="project_body" id="research">
                                <h2>Research</h2>
                                <h5>Why and how did administrators of lighting infrastructure control the street lights?</h5>
                                <h6>Research Questions</h6>
                                <p></p>
                                <li>How do administrators of city street lighting system work?</li>
                                <li>What are the purposes for controling the lights?</li>
                                <li>What problems do they have in the process?</li>

                                <h6>Research Methods</h6>
                                {/* <p>To understand the purposes of controlling the street lights and an administrator's typical workflows, I conducted contextual inquires with three administrators of the street lighting system. They walked me through their daily work at their office and answered my questions.</p> */}
                                <img className="project_illustration_extrasmall" src={process.env.PUBLIC_URL + "/images/IoT/contextual_inquiry.png"} />
                                <Container>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            {/* <div className="project_overview_title">Design Process</div> */}
                                            <div className="project_overview_content py-1"><b>Method</b></div>
                                            <div className="project_overview_content">Contextual Inquiry</div>

                                        </Col>
                                        <Col xs={12} md={6}>
                                            <div className="project_overview_content py-1"><b>Participants</b></div>
                                            <div className="project_overview_content">2 Administrators of highway light infrastructure</div>
                                            <div className="project_overview_content">1 Manager of street lighting at an office park.</div>

                                        </Col>
                                        <Col xs={12} md={3}>
                                            <div className="project_overview_content py-1"><b>Interview Questions</b></div>
                                            <div className="project_overview_content "><a href="https://docs.google.com/document/d/1-DEKGzb4zCd3_96tjkcxM2nTRz1ZywvDGmD1vPf86bc/edit?usp=sharing" className="text_link">File Link</a> (translated to English from Chinese)</div>
                                        </Col>



                                    </Row>
                                </Container>

                            </section>



                            <section className="project_body" id="syn">
                                <h2>Synthesize</h2>
                                <h5>Three Scenarios, Three Problems</h5>
                                <p>Administrators decide when the lights should turn on and off and how bright they should be based on time, days and areas. These settings are called lighting plan. There are three scenarios when administrators need to set or change the lighting plans.</p>

                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/control_lighting.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                
                            </section>


                            <section className="project_body" id="ideate">
                                <h2>Ideate</h2>
                                <h5>How might we help administrators work efficiently with the new Smart Street Lights?</h5>
                                <p>After brainstorming with the engineering team, we decided to focus on these three ideas.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/features.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />

                         

                            </section>
                            <section className="project_body" id="design">
                                <h2>Design</h2>
                                <h5>Site Map, User Flows & Wireframes</h5>

                                <p>The new light control tool was going to be incorporated with the city infrastructure management system. So I started with mapping the user flow of each scenario to see how it should talk to the bigger system and how the system can support each of the flows. I then wireframed the possible interfaces.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/user_flow.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/wireframe.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                />
                                {/* <h6>1. Smart Default Plan</h6>
                                <p>Since the most laborious part, the automation, is going to be done by the IoT system, the management tool only needs to show system status and give enough controls to the users so that they can <b>trust</b> the new system.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/daytoday.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <h6>2. Special plan setup: streamline the workflow and improve visualizations</h6>
                                <p>To set up a special work plan the users need to put in applied dates, areas and define the special working hours.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/special.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                /> */}
                                 <div className="project_separator">
                                    
                                    <div className="project_separator_inner_wrapper" >
                                        <div className="project_separator_title">Challenge #1 How to make work-hour setting more intuitive?</div>
                                        <p>A challenge I faced in wireframing the setting interface is how to make the lighting plan setting interface more intuitive and provide users with more visual feedback.</p>
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/workplan.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}


                                    />

                                <p>Finally, I decided to first combine these two ways of settings and test the features in usability testing later.</p>
                                    </div>
                                </div>
{/*                                
                                
                                <h6>3. Emergency Control</h6>
                                <p>To improve information navigation, my design allows users to look for and control device(s) on a map and from an alert.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/emergency_userflow.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/emergency_control.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                /> */}
                                <div className="project_separator">
                                    
                                    <div className="project_separator_inner_wrapper" >
                                        <div className="project_separator_title">Challenge #2 How to simplify bulk control?
                                        </div>  
                                        <p>One challenge I encountered was how to allow users to control a group of lights quickly and easily. I introduced the "selected list" and mapped the user flow.</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/bulk_workflow.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}
                                         />
                                        <div className="p-list"><div className="circle_number">1</div>Select Devices</div>
                                        <p className="project_info">I ideated four ways to select multiple devices.</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/select.gif',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                        <p className="project_info">Since administrators usually control lights by defined areas (administrative divisions), the 'selet-an-area' button is more useful for them. Moreover, multi-selection on map is the ideal way to select devices by undefined areas such as all lights at an intersection. So I decided to <b>combine these two (2 & 3)</b>.</p>

                                       
                                        <div className="p-list"><div className="circle_number">2</div>Retrieve Selected Device</div>
                                        <p className="project_info">Another thing that need to be considered was where the "selected device" button should be located. I wireframed four locations of the button and finally decided to put the button at top since it was the most straightforward version and produced no ambiguity of its scope.</p>
                                        <Row>
                                            <Col>
                                                <ImageZoom
                                                image={{
                                                    src: '/images/IoT/bulkcontrol/retrieve_button1.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                }}

                                                    />
                                            </Col>
                                            <Col>
                                                <ImageZoom
                                                        image={{
                                                            src: '/images/IoT/bulkcontrol/retrieve_button2.png',
                                                            alt: '',
                                                            className: 'project_illustration'
                                                        }}

                                                    />
                                            </Col>
                                        </Row>
                                        
                                       
                                        <div className="p-list"><div className="circle_number">3</div>Check Selected Device</div>
                                        <p className="project_info">As for how to display selected devices, I created the following wireframes.</p>
                                        <Row>
                                            <Col>
                                                <ImageZoom
                                                    image={{
                                                        src: '/images/IoT/bulkcontrol/retrieve_display1.png',
                                                        alt: '',
                                                        className: 'project_illustration'
                                                    }}

                                                />
                                            </Col>
                                            <Col>
                                                <ImageZoom
                                                    image={{
                                                        src: '/images/IoT/bulkcontrol/retrieve_display2.png',
                                                        alt: '',
                                                        className: 'project_illustration'
                                                    }}

                                                />
                                            </Col>
                                        </Row>
                                       
                                        
                                       
                                       
                                         <p className="project_info">I eventually decided to show the selected devices on a new page in a grouped table. In addition, Users can also apply advanced filters such as types, luminance so that they can further narrow down the lights they want to control.</p>
                                        <ImageZoom
                                        image={{
                                            src: '/images/IoT/bulkcontrol/retrieve_final.png',
                                            alt: '',
                                            className: 'project_illustration_medium'
                                        }}
                                        />
                                         <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/advancedFilters.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />

                                        <div className="p-list"><div className="circle_number">4</div>Control Response</div>
                                        <p className="project_info">The administrators should be careful about adjusting city infrastructure settings. They need to know whether they have changed the setting successfully or not.</p>
                                       
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/response.png',
                                                alt: '',
                                                className: 'project_illustration_medium'
                                            }}

                                        />
                                        {/* <p className="project_info">Here is the user flow once users click 'apply control':</p>
                                        <li className="project_info">Firstly, an alert will pop up once once a control was applied, asking for confirmation.</li >
                                        <li className="project_info">After confirmation, a notification will show up showing the process and the action button will gray out to avoid errors. </li>
                                        <li className="project_info">After applying the setting, a clear alert will show the number of successful settings and the indicators of error and success will show up on the selected device list to support trouble shooting. The button will then changes into 'redo' that allow users to rerun the action again to the devices that returned errors.</li>
                                        */}
                                         
                                       
{/* 

                                <p>Finally, I developed the wireframes:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/temporary.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                /> */}
                                    </div>
                                </div>
                            </section>
                            <section className="project_body" id="evaluate">
                                <h2>Evaluate</h2>
                                <h5>Usability Testing & Iterations</h5>
                                <p>After creating an interactive prototype, I conducted scenario-based usability testing with 2 administrators and cognitive walkthrough with 3 colleagues (<a href="https://docs.google.com/document/d/1Wzhgqrxo7YtJaYprwnFdA7flDMVM8VVzVDO9i_Pwb1Y/edit?usp=sharing" className="text_link">link of the usability testing tasks</a>).</p>
                                <h6>Research Questions</h6>
                                <p></p>
                                <li>Are the new categories of lighting settings learnable?</li>
                                <li>Are the new system improve the efficiency of controls in different scenarios?</li>
                                <li>Do users feel comfortable and confident when using the new tool?</li>
                                <h6>Key Findings & Iterations</h6>

                                <p><b>1. Users could not distinguish the default plan from the special plans.</b></p>
                                <p>Therefore, I enhanced the difference by separating them into two sections. Also, the visualizations and briefs of the special plans were added to help users distinguish different plans when skimming through.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/iterate_lighting_plan_dashboard.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <p></p>
                                <p><b>2. Administrators preferred typing in time</b></p>
                                <p>We found that setting by clicking the graph actually took a longer time and more clicks. Therefore, I got rid of this feature and used the bar chart only as feedback.</p>
                                {/* <p>Also, administrators would like to first set the time to turn on the lights (first day afternoon) and then the time to turn them off (next morning), so I changed the order of the inputs. </p> */}
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/iterate_lighting_plan_setting.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />

                            </section>

                            <section className="project_body" id="deliver">
                                <h2>Final Design</h2>
                                <h5>How I solved the problems</h5>
                                <p>Here is the final design and how it addressed each problem I discovered in the user research</p>
                                
                 
                                
                                <h6>Default Plan & Special Plan Setup</h6>
                                <p></p>
                                <li>IoT supported configuration of default plan</li>
                                <li>Build trust with users by giving them the on-off of automation</li>
                                <li>Set special plans in advance that override the daily plan in a defined period</li>
                                <li>Flexible work hour setting relative to daylight and custom repeated cycle</li>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/light_control_final3.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/light_control_final4.png',
                                        alt: '',
                                        className: ''
                                    }}

                                />
                                <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/final_special_plan.gif")}>click here to watch the interaction (gif of hi-fi prototypes).</Button></div>
                                <h6>Map Navigation & Emergency Control</h6>
                                <p></p>
                                <li>Quickly locate devices with map and filters</li>
                                <li>More flexible bulk controls</li>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/light_control_final1.png',
                                        alt: '',
                                        className: ''
                                    }}

                                />
                                <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/final_single_control.gif")}>click here to watch the interaction (gif of the website).</Button></div>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/light_control_final2.png',
                                        alt: '',
                                        className: ''
                                    }}

                                />
                                <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/final_bulk_control.gif")}>click here to watch the interaction (gif of the website).</Button></div>
                               
                               
                            </section>
                            <section className="project_body" id="impact">
                                <h2>Impact</h2>
                                <h5>User and Client Feedback</h5>
                                <p>In the usability studies, participants (2 administrators 3 colleagues) all completed 80% of the tasks and were satisfied with the time they spent on each task. In post-testing interviews, the administrators found the lighting plan configuration and device control process much shorter and easier compared with the old system. They also liked the flexibility of controlling devices in group.</p>
                                <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                       
                                        <p className="project_quote_text">I like the new system and would love to actually use it in my work!</p>
                                    </div>

                                </div>
                                <p>After the demo pitch, our client decided to continue working with us to further improve the products and bring it to the next stage. The new lighting control features were shipped in late September 2019 as part of the alpha product and more testings were to be conducted.</p>
                           
                               
                            </section>
                            <section id="todo" className="project_body">
                                    <h2>Next Step</h2>
                                    <p></p>
                                    <h6>Design for Behavior Change</h6>
                                    <p>I would love to dive deeper into applying nudge theory in the design if I had given more time. I have been very interested in this topic and I saw a great opportunity here to design for more efficient energy use. I proposed a possibility to show users how much energy they will save after they choose to 'auto-optimize' the default lighting plan. This feature would serve as a nudge to environmentally friendly behavior. </p>



                                </section>
                                <section id="take" className="project_body">
                                    <h2>TAKEAWAYS</h2>
                                    <h6>Ask questions and learn from everyone</h6>
                                    <p>IoT system is complex and daunting. I spent a lot of time talking with engineers and developers, asking "silly questions" to understand the purposes, functionalities, and limitations of the devices. By frequently raising questions, I not only learned every part of the system but also formed a reciprocal and supportive relationship with them, which was beneficial in cross-functional collaboration.</p>
                                    <h6>Design with limitations</h6>
                                    <p>The biggest lesson I learned from this project is to understand and get used to limitations. Just like painting, an important thing is to understand the tools at hand, the canvas, and the materials. Likewise, we should understand the system, the machine and the data so that we won't subject our design to the whim of our naive mind.</p>
                                    <h6>Make intentional decisions</h6>
                                    <p>Design specification is always about decision making and there should always be a reason behind every decision. When facing a tough choice, the limitations, design requirements, and insights from user research are always great references.</p>
                                    <h6>Work with ambiguity but always look for chances to check the assumptions</h6>
                                    <p>I made many assumptions during the ideation and design process. I kept a list of questions I had and looked for opportunities to get them answered by consulting and formal and informal usability studies.</p>
                                </section>
                                <section id="relate" className="project_body">
                                    <h2>Related Work</h2>
                                    <div><h5>Other things I did for this project</h5></div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                                        <h6>Notification Center</h6>
                                        <a className="text_link" href="/work/IoTNotification">see more</a>

                                    </div>

                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/notification.gif',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                                        <h6>Data Dashboards</h6>
                                        <a className="text_link" href="/work/IoTDashboard">see more</a>

                                    </div>
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/dashboards.gif',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />

                                </section>

                    </Col>
                </Row>
            </div>
                <ProjectPagination pagination={pagination} />
                <BackToTopBtn contents={contents} pagination={pagination} />
                <ImageModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    url={this.state.url}
                />


        </>)
        }
    
    
    }
    
    
    
    export default IoTBest;

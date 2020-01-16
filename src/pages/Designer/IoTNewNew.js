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



class IoTNewNew extends React.Component {

    state = {
        modalShow: false,
        hide: true,
        hide2: true,
        hide3: true,
        hide4: true,
        // setModalShow:false,
        url: "",

    }

    toggleHiddenContent = (id)=>{
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
        // const [setModalShow] = React.useState(false);

        return (<>
            <ScrollToTopOnMount />


            <div className="project_head_container">

                <section className="project_head">
                    <h1>An IoT-based smart city infrastructure management tool</h1>
                    <h3>A tool built for city managers to monitor, operate, and maintain the smart city infrastructure devices efficiently, intelligently and collaboratively.</h3>
                    <div className="project_info">May - July, 2019, work project, shipped in September</div>
                </section>

            </div>


            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/IoT/headImg.png"} />
            </div>

            <div className="project_overview_container" id="overview">
                {/* <Container> */}
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="project_overview_title">Background</div>
                            <div className="project_overview_content">We were commissioned by Xingyang Languang, a smart device manufacturer to redesign a web-based city infrastructure management tool. The tool was supposed to be used for managing smart devices related to city lighting, sewage, and environmental monitoring.</div>
                            
                        </Col>
                        <Col sm={4} md={3}>
                        
                            <div className="project_overview_title">My Role</div>
                            <div className="project_overview_content">Research</div>
                            <div className="project_overview_content">Product Design</div>
                            <div className="project_overview_content">Interaction Design</div>
                            <div className="project_overview_content">Prototyping</div>
                            <div className="project_overview_content">Usability Testing</div>
                        </Col>
                        <Col sm={4} md={3}>
                        
                            <div className="project_overview_title">Team</div>
                            <div className="project_overview_content">One Product Manager</div>
                            <div className="project_overview_content">Two Visual Designers</div>
                            <div className="project_overview_content">Four Developers</div>
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
                            <div className="project_overview_content">Competitive analysis</div>
                            <div className="project_overview_content">Contextual inquiry</div>                        
                        </Col>
                        <Col  xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
                            <div className="project_overview_content py-1"><b>Synthesize</b></div>
                            <div className="project_overview_content">User flow</div>
                            <div className="project_overview_content">Problem space</div>
                            <div className="project_overview_content">Reframing</div>

                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>

                            <div className="project_overview_content py-1"><b>Ideate</b></div>
                            <div className="project_overview_content">Brainstormimg</div>
                            <div className="project_overview_content">Sketching</div>
                            <div className="project_overview_content">Feasibility analysis</div>
                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
                            <div className="project_overview_content py-1"><b>Design</b></div>
                            <div className="project_overview_content">Lo-fi prototyping</div>
                            <div className="project_overview_content">Interaction design</div>
                            <div className="project_overview_content">Wireframing</div>
                            <div className="project_overview_content">Hi-fi prototyping</div>
                        </Col>
                        <Col  xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>

                            <div className="project_overview_content py-1"><b>Evaluate</b></div>
                            <div className="project_overview_content">Heuristics evaluation</div>
                            <div className="project_overview_content">Usability testing</div>
                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/rightStep.png"}/>

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


                        <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;top: #scrollstart">
                              
                                <ul className="unset-Sticky" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                                <li className="uk-l project_brief_content"><a href="#overview">Project Overview</a></li>
                                <div className="project_brief_title">Research</div>
                                    <li className="uk-l project_brief_content"><a href="#secondary">Secondary Research</a></li>
                                    <li className="uk-l project_brief_content"><a href="#contextual">User Research</a></li>
                                    <div className="project_brief_title">Q1 Ensure System Health</div>
                                    <li className="uk-l project_brief_content"><a href="#syn1">Workflow & Problems</a></li>
                                    <li className="uk-l project_brief_content"><a href="#ideate1">Ideate</a></li>
                                    <li className="uk-l project_brief_content"><a href="#notification">Design</a></li>
                                    <li className="uk-l project_brief_content"><a href="#deliver1">Final Design</a></li>
                                    {/* <li className="uk-l project_brief_content"><a href="#dashboard">Design #2 Dashboards</a></li> */}
                                    <div className="project_brief_title">Q2 Operate The System</div>
                                    <li className="uk-l project_brief_content"><a href="#syn2">Workflow & Problems</a></li>
                                    <li className="uk-l project_brief_content"><a href="#ideate2">Ideate</a></li>
                                    <li className="uk-l project_brief_content"><a href="#light">Design</a></li>
                                    <li className="uk-l project_brief_content"><a href="#usability">Usability Testing</a></li>
                                    <li className="uk-l project_brief_content"><a href="#deliver2">Final Design</a></li>
                                    <div className="project_brief_title">Conclusion</div>
                                  
                                    <li className="uk-l project_brief_content"><a href="#todo">To dos</a></li>
                                    <li className="uk-l project_brief_content"><a href="#take">Takeaways</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>
                        <div className="project_container" >
                        <section  className="project_body" id="secondary">
                        <div id="scrollstart"></div>

                                    <h2>Clarify user scope</h2>
                                    <h5>Who are city managers?</h5>
                                    <p>After analyzing the existing product, I found it unclear for whom it is specifically designed. Some features are to help administrators monitor and control infrastructure devices; others are more intended for hardware maintenance team or dev-ops to register and configure devices . All these assorted features were open to every user without differentiating their roles, needs, purposes and workflows.</p>
                                    <p>To clarify the user scope, the following questions need to be answered.</p>
                                    <ul>
                                        <li>Who might be the users?</li>
                                        <li>Are there any other stakeholders involved in this process?</li>
                                        <li>Who are our primary users?</li>
                                    </ul>
                                    <p>To try to answer these questions, I started with secondary research:</p>


                                    <Container>
                                        <Row>
                                            <Col style={{ textAlign: "center", justifyContent: "center" }} xs={4}>

                                                <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/existing_product.png"} />
                                                <p className="project_caption">Existing product analysis</p>
                                            </Col>
                                            <Col style={{ textAlign: "center" }}  xs={4}>
                                                <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/competitive_analysis.png"} />
                                                <p className="project_caption">Competitive analysis</p>
                                            </Col>
                                            <Col style={{ textAlign: "center" }} xs={4}>
                                                <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/brainstorm.png"} />
                                                <p className="project_caption">Brainstorm with PM & engineers</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <p>Finally, we came up with the following 5 key roles involved in the system and decided to focus on the administrators since they were the ones who need our tool the most to complete their jobs.</p>
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/5_roles.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />

                                </section>
                            



                                <section  className="project_body" id="contextual">
                                    <h2>User Research</h2>
                                    <h5>How do administrators work in real life?</h5>
                                    <img className="project_illustration_extrasmall" src={process.env.PUBLIC_URL + "/images/IoT/contextual_inquiry.png"} />
                                    <Container>
                                        <Row>
                                        <Col xs={12} md={3}>
                                        {/* <div className="project_overview_title">Design Process</div> */}
                                                <div className="project_overview_content py-1"><b>Methods</b></div>
                                                <div className="project_overview_content">Contextual Inquiry</div>
                                            
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <div className="project_overview_content py-1"><b>Participants</b></div>
                                                <div className="project_overview_content">2 Administrators of highway light infrastructure</div>
                                                <div className="project_overview_content">1 Manager of street lighting at an office park.</div>
                            
                                            </Col>
                                            <Col xs={12} md={3}>
                                                <div className="project_overview_content py-1"><b>Questions</b></div>
                                                <a className="text_link" href="https://docs.google.com/document/d/1-DEKGzb4zCd3_96tjkcxM2nTRz1ZywvDGmD1vPf86bc/edit?usp=sharing"><small>File link</small></a> 
                                            </Col>


                                           
                                        </Row>
                                    </Container>
                                    
                                    <h6>Key Findings</h6>
                                    <p className="project_info">* You can find other artifacts I collected from the user research <a className="text_link" href="https://drive.google.com/drive/folders/1FE6olnNHznTqqrqwLotCCaDFewWmkra1?usp=sharing">here</a>.</p>

                                    
                                    
                                        <ImageZoom
                                            image={{
                                                    src: '/images/IoT/two_workflows.png',
                                                    alt: '',
                                                    className: 'project_illustration_small'

                                            }}/>
                                           
                                    <p>I dived deep into what they actually did to complete these responsibilities in the interviews and what are their ultimate goals. Finally, I synthesized the following two workflows along with the pain points in the processes:</p> 
                                    <ul>
                                        <li>Problem-shooting Workflow</li>
                                        <li>Street Light Control Workflow</li>
                                    </ul>
                                   
                                    <p>I then worked on solving the problems in these two workflows with my design.</p>
                                                                                              
                                </section>
                        </div>

                    </Col>
                </Row>
            </div>
{/* ---------------------------------------------- #1 ----------------------------------------- */}
             <div className="project_separator" id="solution" style={{zIndex: "1000"}}>

                <div className="project_separator_inner_wrapper" >
                    <div className="project_separator_inner_wrapper_small">
                        <h5>Design Question #1</h5>  
                        <p className="project_quote_text">How might we make the problem-shooting process easier and more efficient?</p>
                    </div>
                        
                </div>
            </div>
            
            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                       
                    </Col>
                    <Col md={12} lg={9}>
                        <div className="project_container" >
                        <section  className="project_body" id="syn1">
                                    <h2>Synthesize</h2>
                                    <h5>Problem-shooting Workflow & Problem Space</h5>
                                    <p>To ensure system health, administrators are responsible for identifying and solving problems in the system. Here is the workflow and problems they faced in the process:</p>
                                    
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/ensure_system_health.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />
                                    </section>
                            
                            

                                <section  className="project_body" id="ideate1">
                                    
                                    <h2>Ideate</h2>
                                    <h5>How might we help administrators notice and react to system problem quickly and coordinate problem shooting process efficiently?</h5>
                                    <p>After delivering my findings to the PM, we decided to start with designing a proactive notification system that alerts them to abnormal data and leads them through the troubleshooting process, and dashboards that provides administrators with real-time system data and actionable insights.</p>
                                    <br/>
                                    <Container>
                                        <Row>
                                            <Col xs={1}></Col>
                                            <Col xs={4}>
                                                <div className="project_square_illustration_container">
                                                    <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/notification_ideate.png',
                                                    alt: '',
                                                    className: 'project_square_illustration'
                                                    }}
                                                
                                                    />
                                                </div>         
                                                <div className="project_caption text-center">Notification Center</div>                        
                                            </Col>
                                            <Col xs={2}></Col>

                                            <Col xs={4}> 
                                                <div className="project_square_illustration_container">                                     
                                                    <ImageZoom
                                                            image={{
                                                            src: '/images/IoT/workflow_ideate.png',
                                                            alt: '',
                                                            className: 'project_square_illustration'
                                                            }}
                                                        
                                                        />
                                                    
                                                </div> 
                                                <div className="project_caption text-center">Workflow Management Tool</div>  
                                            </Col>
                                            <Col xs={1}></Col>

                                            {/* <Col xs={4}>
                                            <div className="project_square_illustration_container">
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/dashboard_ideate.png',
                                                    alt: '',
                                                    className: 'project_square_illustration'
                                                    }}
                                                
                                                />
                                                                
                                            </div>   
                                            <div className="project_caption text-center">Dashboard</div>                      
                                            </Col> */}
                                        </Row>
                                    </Container>
                                
                                
                                </section>
                                
                                           

                                <section  className="project_body" id="notification">
                                    <h2>Design</h2>
                                    <h5>Notification Center: proactive custom alerts & workflow management</h5>
                                    <h6>User flow & wireframe</h6>
                                    <p>Based on user workflow, the new system should support the flowing user flow.</p>
                                    <ImageZoom
                                        image={{
                                        src: '/images/IoT/alert_wireframe.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}
                                    
                                    />
                                    <h6>Design Specifications</h6>
                                    <p>When wireframing, I further explored:</p>
                                        <Container>
                                            <Row>
                                                
                                                <Col xs={4}>
                                                <div className="project_square_illustration_container">
                                                    <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/alert_notification_sketch.png',
                                                    alt: '',
                                                    className: 'project_square_illustration'
                                                    }}
                                                
                                                    />
                                                
                                                </div>
                                                <div className="project_caption text-center">Defining Ways of notifications</div>

                                                </Col>
                                                <Col xs={4}>
                                                    <div className="project_square_illustration_container">
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/alert_workflow.png',
                                                    alt: '',
                                                    className: 'project_square_illustration'
                                                    }}
                                                
                                                />
                                                </div>
                                                <div className="project_caption text-center">Synthesizing and Visualizing Troubleshooting Workflows</div>

                                                </Col>
                                                <Col xs={4}>
                                                <div className="project_square_illustration_container">
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/alert_status_sketch.png',
                                                    alt: '',
                                                    className: 'project_square_illustration'
                                                    }}
                                                
                                                />
                                                </div>
                                                <div className="project_caption text-center">Defining & Visualizing 4 Alert States</div>

                                                </Col>
                                            </Row>
                                     </Container>




                                     {this.state.hide3?(<>
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide3")}>See Detailed Process</button>
                                            </div></>):(<>
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide3")}>Hide Detailed Process</button> 
                                            </div> 
                                              {/* ----------------hidden 👇---------------------- */}     
                                            
                                            <h6>Sketching Ways to Alert</h6>
                                            <p>I brainstormed different ways of notification and sorted them according to degrees of disturbance</p>
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/alert_notification_sketch.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                }}/>
                                            <p>To avoid information overload, we decided to allow users to customize the ways for different types of alerts (we later defined as 3 types) so that they can prioritize.</p>
                                            <h6>Synthesizing and visualizing trouble shooting workflow</h6>
                                            <p>I revisited the scripts of contextual inquiries and consulted the administrators again about some most frequent problem-shooting process. We ended up with three main types: device breakdown, abnormal data and citizen requests. We synthesized their workflows and classified the steps by whether they involved human interferences for automation. We finally defined the following user flow and specified the role of the system and each of the participants.</p>
                                           
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/alert_workflow.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                }}/>
                                                
                                            <p>Since for the alpha version we are not going to include workflow customization, the second question I ran into was how to display the workflow and how users can interact with it. I ideated and developed two layouts for the interface:</p>
                                            <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/workflow_display.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                            <p>Eventually, we moved on with the left flow chart since the workflow might eventually be very long and even with branches. A horizontal flowchart cannot take as many information as the vertical one.</p>
                                            <h6>Specify alert states with user flow</h6>
                                            <p>I mapped the new user flow as followed and found that the system should specify the states of the alert/task according to the step it is at in the process. Therefore, I defined 4 states of the alert/task and provide users different ways to keep track of the records.</p>
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/alert_status_sketch2.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                }}/>
                                                   
                                            
                                            {/* ----------------hidden 👆---------------------- */}
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide3")}>Hide Detailed Process</button>
                                            </div>  
                                            </>)}
                                </section>
                                <section className="project_body" id="deliver1">
                                    <h2>Deliver</h2>
                                    <h5>Hi-fidelity Prototypes</h5>    
                                    <ImageZoom
                                        image={{
                                        src: '/images/IoT/notification_center_final1.png',
                                        alt: '',
                                        className: ''
                                        }}
                                    
                                    />
                                    <ImageZoom
                                        image={{
                                        src: '/images/IoT/notification_center_final2.png',
                                        alt: '',
                                        className: ''
                                        }}
                                    
                                    />
                                    <ImageZoom
                                        image={{
                                        src: '/images/IoT/notification_center_final3.png',
                                        alt: '',
                                        className: ''
                                        }}
                                    
                                    />
                                    <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/alert.gif")}>click here to watch the interaction.</Button></div> 
                                        
                                </section>
                              
                                                                              

                            {/* ------------- */}
                        </div>

                    </Col>
                </Row>
            </div>

                       
                                
                        
{/* --------------------------------------------#2--------------------------------------------- */}

<div className="project_separator" id="solution" style={{zIndex: "1000"}}>

<div className="project_separator_inner_wrapper" >
    <div className="project_separator_inner_wrapper_small">
        <h5>Design Question #2</h5>  
        <p className="project_quote_text">How might we make the street light control process more intuitive?</p>
    </div>
        
</div>
</div>

<div className="project_overall_container">
<Row>
    <Col md={12} lg={3}></Col>
    <Col md={12} lg={9}>
  
        <section className="project_body" id="syn2">
            <h2>Synthesize</h2>
            <h5>Street Light Control Workflows & Problem Space</h5>
            <h6>Administrators were given complex tools to control devices</h6>
            <p>Here is a management tool for the administrators controlling the highway light system. The problems of the tool are obvious:</p>
            <ImageZoom
                image={{
                src: '/images/IoT/existingtool.png',
                alt: '',
                className: 'project_illustration'
                }}
                    
            />
                
    
        
            {/* <div className="frame_wrapper">
                <iframe className="project_illustration_medium" style={{border: "none"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F31wTxeoPe74AqBg83CWTB3%2FUntitled%3Fnode-id%3D4%253A25%26scaling%3Dmin-zoom" allowfullscreen></iframe>
            </div> */}
            {/* <div className="project_caption">This was a tool designed specifically for controlling highway lights. The administrator needed to go down 6 layers and many steps to control an individual light or lights on specific segments of the highway. When they walked us through, one administrator told us that they found it difficult to find the light they wanted to control, but they had gradually got used to it.</div> */}
            <h6>Different scenarios, different workflows, different purposes</h6>
            <p>According to the interviews, I found that why and how they control the the lighting system can be classified into three types which follow different workflows. However, the exiting system didn't distinguish these types, let alone supporting their different needs.</p>
            <ImageZoom
                image={{
                src: '/images/IoT/control_lighting.png',
                alt: '',
                className: 'project_illustration'
                }}
                    
            />
        </section>


        <section  className="project_body" id="ideate2">
            <h2>Ideate</h2>
            
            <h5>How might we help administrators to configure city lighting energy-efficiently and adjust lighting for special occasions easily?</h5>
           
            {/* <h6>Design Goals for Automatic Configuration of Day-to-day Plan</h6>
            <p>Since day-to-day configuration was going to be largely automatic in the new system, I set up the following design goals for my solution:</p>
            <ul>
                <li>Users can decide whether they want to automate the process or not;</li>
                <li>The interface should build trust between users and the system by explaining the automated process;</li>
                <li>Users should be allowed to set thresholds for automatic controls.</li>

            </ul>
            <h6>Design Goals for Lighting Controls on Special Occasions</h6>
            <p>Besides, I focused on designing new tools for the special plan and temporary control and set up the design goals for these two workflows:</p>
            <ul>
                <li>Users can easily learn the difference between default and special plans;</li>
                <li>Users can plan out and set a work plan in advance;</li>
                <li>Users should be allowed to override work plan for a period of time, after which the day-to-day plan should restore automatically;</li>
                <li>Users can easily specify and control devices by groups;</li>
                <li>User should be given enough visual hints about the settings to make the right decision.</li>
            </ul> */}
            <ImageZoom
                image={{
                    src: '/images/IoT/problemsolution_lightcontrol.png',
                    alt: '',
                    className: 'project_illustration'
                }}

            />

        </section>
        <section  className="project_body" id="light">
            <h2>Design</h2>
            <h5>Street Light Control System</h5>
            <h6>User flows and Wireframes</h6>
            <ImageZoom
                image={{
                    src: '/images/IoT/daytoday.png',
                    alt: '',
                    className: 'project_illustration'
                }}

            />
             <ImageZoom
                image={{
                    src: '/images/IoT/special.png',
                    alt: '',
                    className: 'project_illustration'
                }}

            />
             <ImageZoom
                image={{
                    src: '/images/IoT/temporary.png',
                    alt: '',
                    className: 'project_illustration'
                }}

            />
            
            <h6>Design Specifications</h6>
            <p>When prototyping, I further explored:</p>
                <Container>
                    <Row>
                
                        <Col xs={4}>
                        <div className="project_square_illustration_container">
                                    <ImageZoom
                                    image={{
                                    src: '/images/IoT/workplan_cover.png',
                                    alt: '',
                                    className: 'project_square_illustration'
                                    }}
                                
                                />
                        
                        </div>
                        <p className="project_caption text-center">Special Work Plan Setting</p>

                        </Col>
                     

                        <Col xs={4}>
                        <div className="project_square_illustration_container">
                        <ImageZoom
                            image={{
                            src: '/images/IoT/bulkcontrol/retrieve_buttontop.png',
                            alt: '',
                            className: 'project_square_illustration'
                            }}
                        
                        />
                        </div>
                        <p className="project_caption text-center">Bulk Control</p>

                         
                        </Col>
                       

                        {/* <Col xs={4}>
                        <div className="project_square_illustration_container">
                                    <ImageZoom
                                    image={{
                                    src: '/images/IoT/limitation.png',
                                    alt: '',
                                    className: 'project_square_illustration'
                                    }}
                                
                                />
                        
                        </div>
                        <p className="project_caption text-center">Feasibility Analysis</p>

                        </Col> */}
                       
                        
                    </Row>
                </Container>
            
                {this.state.hide4?(<>
                            <div className="hiden_content_switch_container text-center">
                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide4")}>See Detailed Exploration</button>
                            </div></>):(<>
                            <div className="hiden_content_switch_container text-center">
                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide4")}>Hide Detailed Exploration</button> 
                            </div> 
                                {/* ----------------hidden 👇---------------------- */}     
                            
                                <h6>Bulk Control Specification</h6>
                                <p>The biggest challenge in designing the this flow is to specify how users can select multiple devices, retrieve devices and get responses after controls.</p>
                                <p>To control devices in group, users need to follow this flow:</p>
                                <ImageZoom
                                        image={{
                                        src: '/images/IoT/bulkcontrol/bulkcontrol_userflow.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}
                                    
                                    />
                                <p>Therefore, I experimented with different options:</p>
                                
                                
                                <li className="p-list">Select Devices</li>
                                <p className="project_info">I developed four ways to select multiple devices. Since administrators usually control lights by areas, the 'selet-a-area' buttons and multi-selection on map were adopted for administrators to specify group of lights on map view, and the tree diagram was used on light plan set up where administrators can apply a light plan to large and multiple areas.</p>
                                <ImageZoom
                                        image={{
                                        src: '/images/IoT/bulkcontrol/select.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}
                                    
                                    />
                                


                                <li className="p-list">Retrieve Selected Device</li>
                                <p className="project_info">The questions of specifying the information retrieval process lie in where the "selected device" button should locate and where and how to diplay the selected device.</p>
                                <p className="project_info">I wireframed four locations of the button. We finally decided on the last option since it's the most straightforward version.</p>
                                <ImageZoom
                                        image={{
                                        src: '/images/IoT/bulkcontrol/retrieve_button.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}
                                    
                                    />
                                <li className="p-list">Check Selected Device</li>
                                <p className="project_info">As for how to display selected devices. I created the following wireframes. We eventually decided to jump to new page once user click view selected device to give more space for information display so that user can clearly check what are slected and control the devices. In addition, grouped table proved to be the most efficient and clear way to display the selected devices.</p>
                                <ImageZoom
                                        image={{
                                        src: '/images/IoT/bulkcontrol/retrieve_display.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}
                                    
                                    />
                                 <li className="p-list">Apply Advanced Filters</li>
                                    <p>For selecting street lights on map view, administrators can narrow down the scope by the area and road filters. However, they also need to specify types of lights. To support this, I included advanced filters in the selected device page. The problem is how to display various options and, at the same time, make sure that administrators know what are selected.</p>
                                    <ImageZoom
                                                image={{
                                                src: '/images/IoT/bulkcontrol/advancedFilters.png',
                                                alt: '',
                                                className: 'project_illustration'
                                                }}
                                            
                                            />

                                <li className="p-list">Control Response</li>
                                <p className="project_info">The administrators should be careful about adjusting city infrastructure setting. They need to know whether they have changed the setting successfully. Thus, here are two ways of feedback that I ideated.</p>

                                <ImageZoom
                                        image={{
                                        src: '/images/IoT/bulkcontrol/feedback.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}
                                    
                                    />
                                <p className="project_info">In the final wireframe, I combined and iterated from these two. </p>
                                <ImageZoom
                                        image={{
                                        src: '/images/IoT/bulkcontrol/response.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}
                                    
                                    />
                                <li className="project_info">Firstly, an alert will pop up once they apply a new setting asking for confirmation.</li > 
                                <li className="project_info">After confirmation, a alert will show up indicating the process and the action button will gray out. </li>
                                <li className="project_info">After applying the setting, a clear alert will show the number of successful settings with indicators of error and success on the selected device list to support trouble shooting. The button will then changes into 'redo' that allow users to rerun the action again.</li>
                            
                            
                            
                            {/* ----------------hidden 👆---------------------- */}
                            <div className="hiden_content_switch_container text-center">
                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide4")}>Hide Detailed Exploration</button>
                            </div>  
                            </>)}
        </section>
        <section  className="project_body" id="usability">
            <h2>Evaluate</h2>
            <h5>Usability Testing & Iterations</h5>
            <p>After creating an interactive prototype, I tested my design with the administrators and found that </p>
            <p>1. The visual hint was not strong enough to help users distinguish the day-to-day plan from special plans so I enhanced the difference by separating them into two sections.</p>
                <ImageZoom
                            image={{
                            src: '/images/IoT/iterate_lighting_plan_dashboard.png',
                            alt: '',
                            className: 'project_illustration'
                            }}
                        
                        />
             
             <p>2. Administrators would like to firstly set the time to turn on the lights (first day afternoon) and then the time to turn them off (next morning), so I changed the order of the inputs. Also, setting by clicking the graph actually took longer time and more clicks. Therefore, I got rid of this feature and used the bar chart only for displaying settings.</p>      
                <ImageZoom
                            image={{
                            src: '/images/IoT/iterate_lighting_plan_setting.png',
                            alt: '',
                            className: 'project_illustration'
                            }}
                        
                />
                                  
        </section>
        <section className="project_body" id="deliver2">
            <h2>Deliver</h2>
            <h5>Hi-fidelity Prototypes</h5>
                <ImageZoom
                image={{
                src: '/images/IoT/light_control_final1.png',
                alt: '',
                className: ''
                }}
            
            />

            <ImageZoom
                image={{
                src: '/images/IoT/light_control_final2.png',
                alt: '',
                className: ''
                }}
            
            />
                <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/bulkControl.gif")}>click here to watch the interaction (gif of the website).</Button></div>  
            <ImageZoom
                image={{
                src: '/images/IoT/light_control_final3.png',
                alt: '',
                className: ''
                }}
            
            />
        </section>
    </Col>
    </Row>
</div>
{/*                         
<div className="project_separator" id="navigation" style={{zIndex: "1000"}}>

    <div className="project_separator_inner_wrapper" >
        <h2>Final Design</h2>
        <h5>Navigation of the key pages that I worked on.</h5>
        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/final_v2.png"} />

      
    </div>
</div>                       
                             */}


                               





                    
                
            <div className="project_overall_container">
                <Container>
                    <Row>
                    <Col md={12} lg={3}>
                        </Col>
                        <Col md={12} lg={9}>
                        <section id="todo" className="project_body">
                            <h2>TO-DOS</h2>
                            <p>There are several parts I would have dived deeper into if I had given more time.</p>
                            <h6>Design for Behavior Change</h6>
                            <p>I have been very interested in this topic and I saw a great opportunity here to design for more efficient energy use. I proposed a possibility to show users how much energy they will save after they choose to 'auto optimize' the day-to-day lighting plan. This feature would serve as a nudge to environmentally friendly behavior. </p>
                            <h6>Personalized Dashboards</h6>
                            <p>Second is to design dashboard as entrance rather than data display. In testing, I realized that different users looked for different information on the dashboard. Thus, a personalized dashboard populated according to visit history plus a customizable options might be a good solution.</p>
                            <h6>Customizable Workflows</h6>
                            <p>To better meet the needs of different users, it’s better to allow them to customize and configure their workflows as reactions to different alarms.</p>

                        </section>
                        <section id="take" className="project_body">
                            <h2>TAKEAWAYS</h2>
                            <h6>Ask Questions and Learn from Everyone</h6>
                            <p>IoT system is complex and daunting. I spent a lot of time talking with engineers and developers, asking "silly questions" to understand the purposes, functionalities, and limitations of the devices. By frequently raising questions, I not only learned every part of the system but also formed a reciprocal and supportive relationship with them, which was beneficial in cross-functional collaboration.</p>
                            <h6>Design with Limitations</h6>
                            <p>The biggest lesson I learned from this project is to understand and get used to limitations in my design. Just like painting, an important thing to do is to understand your tools and materials. We should also understand the machine and data so that we won't subject our design to the whim of our naive mind.</p>
                            <h6>Make Intentional Decisions</h6>
                            <p>Design specification is always about decision making and there should always be a reason behind every decision. When facing a tough choice, limitations, design requirements and insights from user research are always great references.</p>
                            <h6>Work with ambiguity but always look for chance to check my assumptions</h6>
                            <p>There are many assumptions I made during the ideation and design process. I kept a list of questions I had and looked for opportunity to get them answered by consulting or formal and informal usability studies.</p>
                        </section>

                        </Col>
                    </Row>
                </Container>

                       
                  
            </div>


            <ProjectPagination prevUrl="/" prevName="Back to Home" nextUrl="/work/nightkick" nextName="Nightkick" />

            <BackToTopBtn />
            <ImageModal
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
                url={this.state.url}
            />


        </>)
    }


}



export default IoTNewNew;

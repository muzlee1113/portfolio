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
import LazyLoad from 'react-lazyload';
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'



class IoT extends React.Component {

    state = {
        modalShow: false,
        hide: true,
        // setModalShow:false,
        url: "",

    }

    toggleHiddenContent = ()=>{
        this.setState({
            hide: !this.state.hide
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

                    {/* <Row>
                        <Col xs={6} sm={4} md={3}>
                            <div className="project_overview_content py-1"><b>Research</b></div>
                            <div className="project_overview_content">Competitive Analysis</div>
                            <div className="project_overview_content">Contextual Inquiry</div>
                            <div className="project_overview_content">Workflow Analysis</div>
                        
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="project_overview_content py-1"><b>Design</b></div>
                            <div className="project_overview_content">Sketching</div>
                            <div className="project_overview_content">Wireframing</div>
                            <div className="project_overview_content">Rapid Prototyping</div>
                            <div className="project_overview_content">Medium-fidelity Prototyping</div>
           
                        </Col>
                        <Col xs={6} sm={4} md={3}>
                            <div className="project_overview_content py-1"><b>Evaluation</b></div>
                            <div className="project_overview_content">Usability Testing</div>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                            <div className="project_overview_content py-1"><b>Deliver</b></div>
                            <div className="project_overview_content">High-fidelity Prototyping</div>
                            <div className="project_overview_content">Design Specs</div>

                        </Col>

                    </Row> */}
      

                <Row>
                        <Col xs={4} md={2}>
                    {/* <div className="project_overview_title">Design Process</div> */}
                            <div className="project_overview_content py-1"><b>Research</b></div>
                            <div className="project_overview_content">Competitive analysis</div>
                            <div className="project_overview_content">Contextual inquiry</div>                        
                        </Col>
                        <Col  xs={4} md={2}>
                            <div className="project_overview_content py-1"><b>Sythesize</b></div>
                            <div className="project_overview_content">Workflow analysis</div>
                            <div className="project_overview_content">Problem space</div>
                            <div className="project_overview_content">Prioritization</div>
                            <div className="project_overview_content">Reframing</div>

                        </Col>
                        <Col xs={4} md={3}>
                            <div className="project_overview_content py-1"><b>Design</b></div>
                            <div className="project_overview_content">Brainstormimg & sketching</div>
                            <div className="project_overview_content">Constraint analysis</div>
                            <div className="project_overview_content">Design specifications</div>
                            <div className="project_overview_content">Prototypes</div>

                        </Col>
                        <Col  xs={4} md={2}>
                            <div className="project_overview_content py-1"><b>Usability Study</b></div>
                            <div className="project_overview_content">Usabililty testing</div>
                            <div className="project_overview_content">Heuristics evaluation</div>
                        </Col>
                        <Col xs={4} md={3}>
                            <div className="project_overview_content py-1"><b>Deliver</b></div>
                            <div className="project_overview_content">High-fidelity prototyping</div>
                            <div className="project_overview_content">Design specs</div>

                        </Col>
                    </Row>
            </div>
           

           

            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">


                        <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;"
                            // style={{position: "fixed", right: "2vw", bottom: "5vh"}}
                            >
                               <ul data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                                <li className="uk-l project_brief_content"><a href="#overview">Project Overview</a></li>
                                    <li className="uk-l project_brief_content"><a href="#research">User Research</a></li>
                                    <li className="uk-l project_brief_content"><a href="#w1">#1 Ensure System Health</a></li>
                                    <li className="uk-l project_brief_content"><a href="#w2">#2 Control the System</a></li>
                                    <li className="uk-l project_brief_content"><a href="#solution">Site Navigation</a></li>
                                    <li className="uk-l project_brief_content"><a href="#todo">To dos</a></li>
                                    <li className="uk-l project_brief_content"><a href="#take">Takeaways</a></li>

                                </ul>
                                {/* <ul data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                                <li className="uk-l project_brief_content"><a href="#list-item-1">Project Overview</a></li>
                                <div className="project_brief_title">User Research</div>
                                    <li className="uk-l project_brief_content"><a href="#secondary">Secondary Research</a></li>
                                    <li className="uk-l project_brief_content"><a href="#contextual">Contextual Inquiry</a></li>
                                    <div className="project_brief_title">#1 Ensure System Health</div>
                                    <li className="uk-l project_brief_content"><a href="#w1">Workflow Analysis</a></li>
                                    <li className="uk-l project_brief_content"><a href="#dashboard">Dashboard Design</a></li>
                                    <li className="uk-l project_brief_content"><a href="#notification">Notification Design</a></li>
                                    <div className="project_brief_title">#2 Operate The System</div>
                                    <li className="uk-l project_brief_content"><a href="#constraints"></a>Constraints</li>
                                    <li className="uk-l project_brief_content"><a href="#w2"></a>Workflow Analysis</li>
                                    <li className="uk-l project_brief_content"><a href="#paper"></a>Paper Prototype</li>
                                    <li className="uk-l project_brief_content"><a href="#usability"></a>Usability Testing</li>
                                    <li className="uk-l project_brief_content"><a href="#hifi"></a>Hi-fi Prototypes</li>
                                    <div className="project_brief_title">Final Design</div>
                                    <li className="uk-l project_brief_content"><a href="#final">Navigation Flow & Demos</a></li>
                                </ul> */}
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>

                        <div className="project_container">

                            <LazyLoad height={200} offset={100} once>

                                <section id="list-item-1" className="project_body" id="research">
                                    <h2>Clarify user scope</h2>
                                    <h5>Who are city managers?</h5>
                                    <p>After analyzing the existing product, I found it unclear for whom it is specifically designed. Some features are to help administrators monitor and control infrastructure devices; others are more intended for hardware maintenance team or dev-ops to register and configure devices . All these assorted features were open to every user without differentiating their roles, needs, purposes and workflows.</p>
                                    <p>To clarify the user scope, the following questions need to be answered.</p>
                                    <ul>
                                        <li>Who might be the users?</li>
                                        <li>Are there any other stakeholders involved in this process?</li>
                                        <li>What are their main goals?</li>
                                    </ul>
                                    <p>To try to answer these questions, I started with secondary research:</p>


                                    <Container>
                                        <Row>
                                            <Col style={{ textAlign: "center", justifyContent: "center" }} xs={4}>

                                                <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/existing_product.png"} />
                                                <p className="project_caption">Existing product analysis</p>
                                            </Col>
                                            <Col style={{ textAlign: "center" }}  xs={4}>
                                                <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/competitive_analysis.png"} />
                                                <p className="project_caption">Competitive analysis</p>
                                            </Col>
                                            <Col style={{ textAlign: "center" }} xs={4}>
                                                <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/brainstorm.png"} />
                                                <p className="project_caption">Brainstorm with PM & engineers</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <p>Finally, we came up with the following 5 key roles involved in the system and decided to focus on the administrators since they were the ones who use the tool most often.</p>
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/hypothesis.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />

                                </section>
                            </LazyLoad>




                            <LazyLoad height={200} offset={100} once>
                                <section id="list-item-1" className="project_body" id="">
                                    <h2>User Research</h2>
                                    <h5>How do administrators work in real life?</h5>
                                    <img alt='three phases of alert design' className="project_illustration_extrasmall" src={process.env.PUBLIC_URL + "/images/IoT/contextual_inquiry.png"} />
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

                                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/deliver.png"} />
                                        <p className="project_caption" style={{ "textAlign": "center" }}>I was delivering my findings to the project team.</p>
                                    <Container className="mt-5">
                                        <Row className="align-items-center py-4">
                                            <Col xs={12} md={5}>
                                            <ImageZoom
                                            image={{
                                                src: '/images/IoT/middleware.png',
                                                alt: '',
                                            }}/>
                                            </Col>
                                            <Col xs={12} md={7} className="py-2">
                                                <p>1. Administrators are coordinators of the departments</p>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center py-4">
                                            <Col xs={12} md={5}>
                                                <ImageZoom
                                                image={{
                                                    src: '/images/IoT/communication_time.png',
                                                    alt: '',
                                                }}/>
                               
                                             
                                                
                                            </Col>
                                            <Col xs={12} md={7} className="py-2">
                                                <p>2. Administrators spend an excessive amount  on communications, mostly forwarding messages and waiting on delayed responses</p>                                           
                                            </Col>
                                            </Row>
                                            <Row className="align-items-center py-4">
                                            <Col xs={12} md={5}>
                                                <ImageZoom
                                                image={{
                                                    src: '/images/IoT/two_workflows.png',
                                                    alt: '',
                                                }}/>
                                            </Col>
                                            <Col xs={12} md={7} className="py-2">
                                                <p>3. Administrators take two main responsibilities: ensure system health and control various infrastructure facilities.</p>                                            
                                            </Col>
                                           
                                        </Row>
                                        <p>I dived deep into what they actually did to complete these responsibilities in the interviews and synthesized the following two workflows, along with the pain points in the processes. I <b>reframed the design question</b> and worked on addressing the problems with my design.</p>
                                        
                                       
                                    </Container>
                                 
                                   
                                </section>
                                <section className="project_body" id="">
                                    
                                            <div className="project_quote">
                                                <div className="project_quote_wrapper">
                                                <p className="project_quote_text">How might we help city managers to monitor system operational health, manage and control smart city infrastructure devices, and coordinate cross-functional collaborations in the process?</p>
                                                </div>
                                            </div>
                                </section>
                            </LazyLoad>


                            

                                <section id="list-item-1" className="project_body" id="w1">
                                <LazyLoad height={200} offset={100} once>

                                    <h2>Workflow #1</h2>
                                    <h5>What do administrators do to ensure system health?</h5>
                                    <p>To ensure system health, administrators are responsible for identifying and solving problems in the system. Here is the workflow and problems they faced in the process:</p>
                                    
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/ensure_system_health.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />
                                     <p className="project_caption text-center">The problem shooting workflow and pain points.</p>
                                     </LazyLoad>
                                </section>
                            
                            

                                <section id="list-item-1" className="project_body" id="d1">
                                    
                                    <h2>Design Question #1</h2>
                                    <h5>How might we make the problem-shooting process easier and more efficient?</h5>
                                    <p>After delivering my findings to the PM, we decided to start with designing dashboards that provides administrators with real-time system data and actionable insights, and a proactive notification system that alerts them to abnormal data and leads them through the troubleshooting process.</p>
                                    <LazyLoad height={200} offset={100} once>

                                    <h6 className="p-ilst">1. Data Dashboards: make sense of real-time data in contexts and by comparison</h6>

                                    <p>What I did to tackle this design challenge includes: learning about available data and metrics, matching what we have with what users need by sketching and testing and prototyping.</p>
                             
                                    <li className="p-list">Posibility and Constraints</li>
                                    <p>Knowing what data are available is crucial for data visualization. I inquired of backend developers and the product manager about the available data sets from different devices. These data all come with location and timestamp.</p>
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/data_set.png',
                                            alt: '',
                                            className: 'project_illustration_small'
                                        }}

                                    />                   
                                    <p className="project_caption text-center">Data sets and metrics of 7 kinds of devices connected to the system</p>

                                    <li className="p-list">Sketching & Testing</li>
                                    <p>Then, I started sketching possible visual displays of data and found the graphs fell into three categories: snapshot, trend and comparison</p>
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/sketch_dashboard_graphs.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />
                                    <p>Later, I created a clickable testing page with my paper prototypes and Axure, and asked my colleagues from the administrative team to rank the graphs according to importance and legibility. I tested them with administrators in my company as an alternative to the real users since they shared a similar mindset.</p>  
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/graph_testing_vis.gif',
                                            alt: '',
                                            className: 'project_illustration_small'
                                        }}

                                    />
                                     <p className="project_caption" style={{textAlign:"center"}}>This is the clickable testing page I created with Axure.</p>
                                        <p>I found that people make sense of data only in <span style={{"color": "#9D2721"}}><b>comparisons</b></span> or in <span style={{"color": "#9D2721"}}><b>contexts</b></span>.</p>
                                      
                                        <li className="p-list">Prototypes</li>
                                        
                                        <p>I selected the graphs that were proven to be more legible and essential in the testing and delivered prototypes with variations: </p>
                                        <ImageZoom
                                            image={{
                                            src: '/images/IoT/street_light_dashboard.png',
                                            alt: '',
                                            className: 'project_illustration'
                                            }}
                                        
                                        />
                                         <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/street_light_dashboard_move.gif")}>Click to watch it move.</Button></div>
                                        <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/street_light_dashboard_iteration.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                       
                                        <div className="project_caption text-center" >Different variations for the Street Light Dashboard</div>
                                        
                                       
                                        
                                        
                                       

                                            {this.state.hide?(<>
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={this.toggleHiddenContent}>See More Prototypes</button>
                                            </div></>):(<>
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={this.toggleHiddenContent}>Hide More Prototypes</button>
                                            </div>
                                                
                                            
                                                <div className="hide_content">
                                                    <ImageZoom
                                                            image={{
                                                            src: '/images/IoT/homepage_dashboard.png',
                                                            alt: '',
                                                            className: 'project_illustration'
                                                            }}
                                                        
                                                        />
                                                        
                                                        <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/homepage_dashboard_move.gif")}>Click here to watch it move.</Button></div>
                                                        <ImageZoom
                                                            image={{
                                                            src: '/images/IoT/env_sensor_dashboard.png',
                                                            alt: '',
                                                            className: 'project_illustration'
                                                            }}
                                                        
                                                        />

                                                        <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/env_sensor_dashboard_move.gif")}>Click here to watch it move.</Button></div>
                                                        <ImageZoom
                                                            image={{
                                                            src: '/images/IoT/manhole_cover_dashboard.png',
                                                            alt: '',
                                                            className: 'project_illustration'
                                                            }}
                                                        
                                                        />
                                                        <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/manhole_cover_dashboard_move.gif")}>Click here to watch it move.</Button></div>
                                                        <div className="hiden_content_switch_container text-center">
                                                            <button class="uk-button uk-button-default uk-width-1-1" onClick={this.toggleHiddenContent}>Hide More Prototypes</button>
                                                        </div>
                                                       
                                                        <ImageZoom
                                                                image={{
                                                                src: '/images/IoT/color_legend_icon.png',
                                                                alt: '',
                                                                className: 'project_illustration'
                                                                }}
                                                            
                                                            />
                                                        
                                                            <p className="project_caption" style={{ "textAlign": "center" }}>To ensure the visual system is consistent across the platform on various charts, graphs and maps, I color coded different data sets and metrics. Icons credited to visual and graphic designer Shiguang Yang.</p>
                                                </div>                                 
                                            </>)}
                                            <p>These dashboards also work as entrance that allows administrators to dive into details.</p>
                                            <ImageZoom
                                                image={{
                                                src: '/images/IoT/dashboard_to_details.png',
                                                alt: '',
                                                className: 'project_illustration'
                                                }}
                                            
                                            />
                                            <div className="project_caption text-center" >Administrators can view detailed information by clicking dashboards</div>
                                           
                                           </LazyLoad>
                                           <LazyLoad height={200} offset={100} once>

                                           
                                            <h6 className="p-ilst">2. Notification Center: guide users to troubleshoot problems step by step</h6>
                                            <li className="p-list">Ideation</li>
                                            <p>Since I synthesized the problem-shooting workflow into three phases: notice, understand, act. I then came up with more focused design questions for brainstorming</p>
                                            <ImageZoom
                                                image={{
                                                src: '/images/IoT/notification_hmw.png',
                                                alt: '',
                                                className: 'project_illustration_medium'
                                                }}
                                            
                                            />
                                           
                                            
                                                <p>When specifying the design, I further explored:</p>
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
                                                        <p className="project_caption text-center">Sketched ways to alert</p>

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
                                                        <p className="project_caption text-center">Synthesized 3 troubleshooting workflows from the interviews</p>

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
                                                        <p className="project_caption text-center">Define notification status according to workflows</p>

                                                        </Col>
                                                    </Row>
                                                </Container>

                                            <div className="mt-5">
                                            <li className="p-list">Prototypes</li>
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
                                            </div>
                                            </LazyLoad>

                                            
                                       


                                </section>
                            


                                <section id="list-item-1" className="project_body" id="w2">
                                <LazyLoad height={200} offset={100} once>

                                    <h2>Workflow #2</h2>
                                    <h5>How do administrators control city lighting?</h5>
                                    <p>I was assigned to work on improving the controls of the city lighting system first. According to the interviews, I found that why and how they control the the lighting system can be classified into three types which follow different workflows:</p>
                                    <ImageZoom
                                        image={{
                                        src: '/images/IoT/control_lighting.png',
                                        alt: '',
                                        className: 'project_illustration'
                                        }}
                                            
                                    />
                                </LazyLoad>
                                </section>


                                <section id="list-item-1" className="project_body" id="d2">
                                    <h2>Design Question #2</h2>
                                    <h5>How might we make the street light control system more efficient?</h5>
                                    <LazyLoad height={200} offset={100} once>

                                    <li className="p-list">Ideation and Design</li>
                                    <p>Since the first type of controls are automated in the new system, the only need is to distinguish its setting from the others. Thus, I focused on designing new tools for the special plan and temporary control.</p>
                                    <p>I wrote down design requirements for these two workflows:</p>
                                    <ul>
                                        <li>Users can plan out and set a work plan in advance;</li>
                                        <li>Users should be allowed to override work plan for a period of time;</li>
                                        <li>The day-to-day plan will restore after that period of time;</li>
                                        <li>Users can easily specify and control devices by groups;</li>
                                        <li>User should be given enough visual hints about the settings to make the right decision</li>
                                    </ul>

                                    <p>When specifying the design, I further explored:</p>
                                    <Container>
                                                    <Row>
                                                        
                                                        <Col xs={4}>
                                                        <div className="project_square_illustration_container">
                                                                    <ImageZoom
                                                                    image={{
                                                                    src: '/images/IoT/device_limitation.png',
                                                                    alt: '',
                                                                    className: 'project_square_illustration'
                                                                    }}
                                                                
                                                                />
                                                        
                                                        </div>
                                                        <p className="project_caption text-center">Technical possibility and limitations</p>

                                                        </Col>
                                                        <Col xs={4}>
                                                            <div className="project_square_illustration_container">
                                                        <ImageZoom
                                                            image={{
                                                            src: '/images/IoT/vis_lighting_sketch.png',
                                                            alt: '',
                                                            className: 'project_square_illustration'
                                                            }}
                                                        
                                                        />
                                                        </div>
                                                        <p className="project_caption text-center">Visualization lighting plan</p>

                                                        </Col>
                                                        <Col xs={4}>
                                                        <div className="project_square_illustration_container">
                                                        <ImageZoom
                                                            image={{
                                                            src: '/images/IoT/bulk_control_sketch.png',
                                                            alt: '',
                                                            className: 'project_square_illustration'
                                                            }}
                                                        
                                                        />
                                                        </div>
                                                        <p className="project_caption text-center">Ways for bulk control</p>

                                                        </Col>
                                                    </Row>
                                                </Container>
                                                </LazyLoad>
                                                <LazyLoad height={200} offset={100} once>

                                                <li className="p-list">Usability Testing & Iteration</li>
                                                <p>After creating an interactive prototype, I tested my design with the administrators and found that </p>
                                                
                                                <ImageZoom
                                                            image={{
                                                            src: '/images/IoT/iterate_lighting_plan_dashboard.png',
                                                            alt: '',
                                                            className: 'project_illustration'
                                                            }}
                                                        
                                                        />
                                                <p>1. The visual hint is not strong enough to help users distinguish the day-to-day plan from special plans so I enhanced the difference by separating them into two sections.</p>
                                               
                                                <ImageZoom
                                                            image={{
                                                            src: '/images/IoT/iterate_lighting_plan_setting.png',
                                                            alt: '',
                                                            className: 'project_illustration'
                                                            }}
                                                        
                                                />
                                                 <p>2. Administrators would like to firstly set the time to turn on the lights (first day afternoon) and then the time to turn them off (next morning). So I changed the order of the inputs.</p>
                                                 </LazyLoad>
                                                 <LazyLoad height={200} offset={100} once>

                                                <li className="p-list">Prototypes</li>
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
                                            <ImageZoom
                                                image={{
                                                src: '/images/IoT/light_control_final3.png',
                                                alt: '',
                                                className: ''
                                                }}
                                            
                                            />
                                                </LazyLoad>

                                               

                              
                                </section>





                        </div>
                    </Col>
                </Row>
            </div>
                <div className="project_separator" id="solution" style={{zIndex: "1000"}}>

                    <div className="project_separator_inner_wrapper" >
                        <h2>Final Design</h2>
                        <h5>Navigation of the key pages that I worked on.</h5>
                        <LazyLoad height={200} offset={100} once>

                        <ImageZoom
                            image={{
                            src: '/images/IoT/final_v2.png',
                            alt: '',
                            className: 'project_illustration'
                            }}
                        
                        />
                        </LazyLoad>

                    </div>
                </div>
            <div className="project_overall_container">
                <Container>
                    <Row>
                    <Col md={12} lg={3}>
                        </Col>
                        <Col md={12} lg={9}>
                        <section id="todo" className="project_body">
                            <h2>TO DOS</h2>
                            <p>There are several parts I would have dived deeper into if I had given more time.</p>
                            <h6>Design for Behavior Change</h6>
                            <p>I have been very interested in this topic and I saw a great opportunity here to design for more efficient energy use. I proposed a possibility to show users how much energy they will save after they choose to 'auto optimize' the day-to-day lighting plan. This feature would serve as a nudge to environmentally friendly behavior. </p>
                            <h6>Personalized Dashboard as Entrance</h6>
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
                        </section>

                        </Col>
                    </Row>
                </Container>

                       
                  
            </div>



            <ProjectPagination prevUrl="/" prevName="Home" nextUrl="/work/materialbank" nextName="Material Bank" />

            <BackToTopBtn />
            <ImageModal
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
                url={this.state.url}
            />


        </>)
    }


}



export default IoT;

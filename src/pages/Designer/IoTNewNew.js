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
                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
                            <div className="project_overview_content py-1"><b>Design</b></div>
                            <div className="project_overview_content">Feasibility analysis</div>
                            <div className="project_overview_content">Design specifications</div>
                            <div className="project_overview_content">Prototypes</div>
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
                            <div className="project_overview_content">Hi-fi prototyping</div>
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
                                    <li className="uk-l project_brief_content"><a href="#syn1">Synthesize</a></li>
                                    <li className="uk-l project_brief_content"><a href="#ideate1">Ideate</a></li>
                                    <li className="uk-l project_brief_content"><a href="#dashboard">Design #1 Dashboards</a></li>
                                    <li className="uk-l project_brief_content"><a href="#notification">Design #2 Notification</a></li>
                                    <div className="project_brief_title">Q2 Operate The System</div>
                                    <li className="uk-l project_brief_content"><a href="#syn2">Synthesize</a></li>
                                    <li className="uk-l project_brief_content"><a href="#ideate2">Ideate</a></li>
                                    <li className="uk-l project_brief_content"><a href="#light">Design Lighting Control</a></li>
                                    <li className="uk-l project_brief_content"><a href="#usability">Usability Testing</a></li>
                                    <div className="project_brief_title">Conclusion</div>
                                    <li className="uk-l project_brief_content"><a href="#navigation">Site Navigation</a></li>
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
                                        <li>What are their main goals?</li>
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
                                    <p>Finally, we came up with the following 5 key roles involved in the system and decided to focus on the administrators since they were the ones who use the tool most often.</p>
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/hypothesis.png',
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
                                    <p>After delivering my findings to the PM, we decided to start with designing dashboards that provides administrators with real-time system data and actionable insights, and a proactive notification system that alerts them to abnormal data and leads them through the troubleshooting process.</p>
                                    <Container>
                                        <Row>
                                            <Col xs={4}>
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
                                            </Col>
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
                                        </Row>
                                    </Container>
                                
                                
                                </section>
                                <section  className="project_body" id="dashboard">
                                    <h2>Design #1</h2>
                                    <h5>Data Dashboards: monitoring & spoting issues</h5>
                                    <p>What I did to tackle this design challenge includes: learning about available data and metrics, matching what we have with what users need by sketching, evaluating and prototyping.</p>

                                    <Container className="">
                                        <Row>
                                                        
                                            <Col xs={4}>
                                            <div className="project_square_illustration_container">
                                                        <ImageZoom
                                                        image={{
                                                        src: '/images/IoT/data_set.png',
                                                        alt: '',
                                                        className: 'project_square_illustration'
                                                        }}
                                                    
                                                    />
                                            
                                            </div>
                                            <div className="project_caption text-center">Clarifying Data Sets & Defining Metrics</div>

                                            </Col>
                                            <Col xs={4}>
                                                <div className="project_square_illustration_container">
                                            <ImageZoom
                                                image={{
                                                src: '/images/IoT/sketch_dashboard_graphs.png',
                                                alt: '',
                                                className: 'project_square_illustration'
                                                }}
                                            
                                            />
                                            </div>
                                            <div className="project_caption text-center">Sketching</div>

                                            </Col>
                                            <Col xs={4}>
                                            <div className="project_square_illustration_container">
                                            <ImageZoom
                                                image={{
                                                src: '/images/IoT/graph_testing_vis.gif',
                                                alt: '',
                                                className: 'project_square_illustration'
                                                }}
                                            
                                            />
                                            </div>
                                            <div className="project_caption text-center">Evaluation</div>

                                            </Col>
                                        </Row>
                                    </Container>
                                    
                                  
                                                {this.state.hide2?(<>
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide2")}>See Detailed Process</button>
                                            </div></>):(<>
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide2")}>Hide Detailed Process</button> 
                                            </div>      
                                            <h6>Clarifying Data Sets & Defining Metrics</h6>
                                                <p>Knowing what data are available is crucial for data visualization. I inquired of backend developers and the product manager about the available data sets from different devices. These data all come with location and timestamp.</p>
                                                <ImageZoom
                                                    image={{
                                                        src: '/images/IoT/data_set.png',
                                                        alt: '',
                                                        className: 'project_illustration_small'
                                                    }}

                                                />                   
                                                <div className="project_caption text-center">Data sets and metrics of 7 kinds of devices connected to the system</div>

                                                <h6>Sketching</h6>
                                                <p>Then, I started sketching possible visual displays of data and found the graphs fell into three categories: snapshot, trend and comparison</p>
                                                <ImageZoom
                                                    image={{
                                                        src: '/images/IoT/sketch_dashboard_graphs.png',
                                                        alt: '',
                                                        className: 'project_illustration'
                                                    }}

                                                />
                                                <h6>Testing</h6>

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
                                               
                                                <h6>Prototyping</h6>
                                                    <p>Thus, I selected the graphs that were proven to be more legible and essential in the testing and delivered prototypes with variations and created variations for the layout.</p>
                                                    <ImageZoom
                                                                image={{
                                                                src: '/images/IoT/street_light_dashboard_iteration.png',
                                                                alt: '',
                                                                className: 'project_illustration'
                                                                }}
                                                            
                                                            />
                                                
                                                    <div className="project_caption text-center" >Different variations for the Street Light Dashboard</div> 
                                                    <div className="hiden_content_switch_container text-center">
                                                        <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide2")}>Hide Detailed Process</button>
                                                    </div>       
                                            </>)}
                                </section>
                                <section className="project_body" id="deliver1">   
                                    <h2>Deliver #1</h2>
                                    <h5>Hi-fidelity Prototypes</h5>
                                    <p>I designed four different dashboards for the system and various devices and also their interations with other pages.</p>
                                        <ImageZoom
                                            image={{
                                            src: '/images/IoT/street_light_dashboard.png',
                                            alt: '',
                                            className: 'project_illustration'
                                            }}
                                        
                                            />
                                         <div className="image_model_link_container">
                                                <Button variant="link" onClick={() => this.triggerModel("/images/IoT/street_light_dashboard_move.gif")}>click here to watch the interaction.</Button>
                                         </div>
                                    <br/>

                                            <ImageZoom
                                                image={{
                                                src: '/images/IoT/dashboard_to_details.png',
                                                alt: '',
                                                className: 'project_illustration'
                                                }}
                                            
                                            />
                                            <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/anomaly_to_detail.gif")}>click here to watch the interaction.</Button></div>  
                                            {this.state.hide?(<>
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide")}>See More Prototypes</button>
                                            </div></>):(<>
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide")}>Hide More Prototypes</button>
                                            </div>
                                                
                                            {/* ---------hidden 👇----------- */}

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
                                                        
                                                       
                                                        <ImageZoom
                                                                image={{
                                                                src: '/images/IoT/color_legend_icon.png',
                                                                alt: '',
                                                                className: 'project_illustration'
                                                                }}
                                                            
                                                            />
                                                        
                                                            <p className="project_caption" style={{ "textAlign": "center" }}>To ensure the visual system is consistent across the platform on various charts, graphs and maps, I color coded different data sets and metrics. Icons credited to visual and graphic designer Shiguang Yang.</p>
                                                        {/* ------------- hidden 👆----------- */}
                                                        
                                                        <div className="hiden_content_switch_container text-center">
                                                            <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide")}>Hide More Prototypes</button>
                                                        </div>
                                                </div>                                 
                                            </>)}
                                   
                                </section>
                                                                              

                            {/* ------------- */}
                                           

                                <section  className="project_body" id="notification">
                                    <h2>Design #2</h2>
                                    <h5>Notification Center: proactive custom alerts & workflow management</h5>
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
                                                <div className="project_caption text-center">Sketching Ways to Alert</div>

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
                                                <div className="project_caption text-center">Synthesizing 3 Troubleshooting Workflows</div>

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
                                            <h6>Ideation</h6>
                                            <p>Since I synthesized the problem-shooting workflow into three phases: notice, understand, act, I then came up with more focused design questions for brainstorming</p>
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/notification_hmw.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                            <h6>Sketching</h6>
                                            <p>I brainstormed different ways of notification and sorted them according to degrees of disturbance</p>
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/alert_notification_sketch.png',
                                                    alt: '',
                                                    className: 'project_illustration_small'
                                                }}/>
                                            <h6>Second-round research & synthesizing</h6>
                                            <p>I revisited the scripts of contextual inquiries and consulted the administrators again about some most frequent problem-shooting process. Then, synthesized them into three workflows and classified them according to whether they involved human interference.</p>
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/alert_workflow.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                }}/>
                                            <h6>Alert states design</h6>
                                            <p>I mapped the new user flow as followed and found that the system should specify the states of the alert/task according to the step it is at in the process. Therefore, I defined 4 states of the alert/task and provide users different ways to keep track of the records.</p>
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/alert_status_sketch2.png',
                                                    alt: '',
                                                    className: 'project_illustration_medium'
                                                }}/>
                                            
                                            {/* ----------------hidden 👆---------------------- */}
                                            <div className="hiden_content_switch_container text-center">
                                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide3")}>Hide Detailed Process</button>
                                            </div>  
                                            </>)}
                                </section>
                                <section className="project_body" id="deliver2">
                                    <h2>Deliver #2</h2>
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
                                    <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/alert.gif")}>click here to watch the interaction.</Button></div> 
                                        
                                </section>
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
            <p>According to the interviews, I found that why and how they control the the lighting system can be classified into three types which follow different workflows:</p>
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
            <h6>Design Goals for Automatic Configuration of Day-to-day Plan</h6>
            <p>Since day-to-day configuration was going to be largely automatic in the new system, I set up the following design goals for my solution:</p>
            <ul>
                <li>Users should have freedom to change default plan</li>
                <li>Users should be allowed to set thresholds for automatic control</li>
                <li>Help users to trust the automated process</li>
            </ul>
            <h6>Design Goals for Lighting Controls on Special Occasions</h6>
            <p>Besides, I focused on designing new tools for the special plan and temporary control and set up the design goals for these two workflows:</p>
            <ul>
                <li>Users can plan out and set a work plan in advance;</li>
                <li>Users should be allowed to override work plan for a period of time, after which the day-to-day plan should restore automatically;</li>
                <li>Users can easily specify and control devices by groups;</li>
                <li>User should be given enough visual hints about the settings to make the right decision</li>
            </ul>
        </section>
        <section  className="project_body" id="light">
            <h2>Design</h2>
            <h5>Street Light Control System</h5>
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
                        <p className="project_caption text-center">Feasibility Analysis</p>

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
                        <p className="project_caption text-center">Visualizing Lighting Plan</p>

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
                        <p className="project_caption text-center">5 Ways for Bulk Control</p>

                         
                        </Col>
                    </Row>
                </Container>
                {this.state.hide4?(<>
                            <div className="hiden_content_switch_container text-center">
                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide4")}>See Detailed Process</button>
                            </div></>):(<>
                            <div className="hiden_content_switch_container text-center">
                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide4")}>Hide Detailed Process</button> 
                            </div> 
                                {/* ----------------hidden 👇---------------------- */}     
                            <h6>Feasibility Analysis</h6>
                            <p>I talked to engineers to ensure that it was possible to automate the default settings with light sensors, CCTV monitor and cloud processing. I learned about the device and the computing process on cloud, and confirmed that overwriting default setting could be done on cloud:</p>

                                <ImageZoom
                                    image={{
                                    src: '/images/IoT/device_limitation.png',
                                    alt: '',
                                    className: 'project_illustration_medium'
                                    }}
                                
                                />
                            <p className="project_caption">Actually, street lights do not contain local work plan, but rely on the cloud application's command after it processes the sensor data. Moreover, the street lights work according to ‘a 24-hour periodic timer’ and will maintain its status (on or off) until the timer match the time in the command.</p>
                            <h6>Visualizing Lighting Plan</h6>
                            <p>I brainstormed different ways to visualize lighting plan of a day and a month, and decided to use bar chart.</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/IoT/vis_lighting_sketch.png',
                                    alt: '',
                                    className: 'project_illustration_medium'
                                }}/>
                            <h6>Sketching Ways for Bulk Control</h6>
                            <p>I sketched 5 different ways for bulk control and delivered them to design critique. I was later inspired by a visual designer's proposal to allow multi-selecting on map.</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/IoT/bulk_control_sketch.png',
                                    alt: '',
                                    className: 'project_illustration'
                                }}/>
                            
                            
                            {/* ----------------hidden 👆---------------------- */}
                            <div className="hiden_content_switch_container text-center">
                                <button class="uk-button uk-button-default uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide4")}>Hide Detailed Process</button>
                            </div>  
                            </>)}
        </section>
        <section  className="project_body" id="usability">
            <h2>Evaluate</h2>
            <h5>Usability Testing & Iterations</h5>
            <p>After creating an interactive prototype, I tested my design with the administrators and found that </p>
                <ImageZoom
                            image={{
                            src: '/images/IoT/iterate_lighting_plan_dashboard.png',
                            alt: '',
                            className: 'project_illustration'
                            }}
                        
                        />
                <p>1. The visual hint was not strong enough to help users distinguish the day-to-day plan from special plans so I enhanced the difference by separating them into two sections.</p>
                
                <ImageZoom
                            image={{
                            src: '/images/IoT/iterate_lighting_plan_setting.png',
                            alt: '',
                            className: 'project_illustration'
                            }}
                        
                />
                    <p>2. Administrators would like to firstly set the time to turn on the lights (first day afternoon) and then the time to turn them off (next morning). So I changed the order of the inputs.</p>                    
        </section>
        <section className="project_body" id="deliver3">
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
                <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/bulkControl.gif")}>click here to watch the interaction.</Button></div>  
            <ImageZoom
                image={{
                src: '/images/IoT/light_control_final3.png',
                alt: '',
                className: ''
                }}
            
            />
            <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/lightControl.gif")}>click here to watch the interaction.</Button></div>  
        </section>
    </Col>
    </Row>
</div>
                        
<div className="project_separator" id="navigation" style={{zIndex: "1000"}}>

    <div className="project_separator_inner_wrapper" >
        <h2>Final Design</h2>
        <h5>Navigation of the key pages that I worked on.</h5>

        <ImageZoom
            image={{
            src: '/images/IoT/final_v2.png',
            alt: '',
            className: 'project_illustration'
            }}
        
        />

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



export default IoTNewNew;
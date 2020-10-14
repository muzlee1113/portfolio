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

const contents=[

    {
        id:"#intro",
        name:"Problem"

    },
    {
        id:"#research",
        name:"Research"

    },
 
    {
        id:"#design",
        name:"Design & Evaluate"

    },
    {
        id:"#deliver",
        name:"Final Design"

    },
]



export default class IoTDashboard extends React.Component {
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

    render(){
        const pagination = this.props.pagination

        return (<>
         <ScrollToTopOnMount />
         <div className="project_head_container">

                <section className="project_head">
                    <h1>The notification center of a smart city infrastructure management tool</h1>
                    <div className="project_info">Work project. The full project lasted more than 3 months (May - July 2019) and shipped in September</div>
                </section>

            </div>
           
            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <ProjectContentNav contents={contents} pagination={pagination}/>
                    </Col>

                    <Col md={12} lg={9}>

                    <div className="project_container" >
                    
                    <section  className="project_body" id="intro">
                    <h2>Problem</h2>
                    <h5>It is hard for infrastructure administrators to notice and solve system issues.</h5>
                    <p>City infrastructure administrators are responsible for ensuring system health. They need to keep an eye on issues showing up in the system and keep the number down. However, sitting in office, they do not have effective ways to know what is going on until they receive the report coming from the on-site team.</p>
                    <p>So the initial design question I raised was:</p>
                    <div className="project_quote">
                        <div className="project_separator_inner_wrapper_small">

                        <p className="project_quote_text">How might we help the infrastructure administrators to notice and solve system issues so as to maintain system health?</p>
                        </div>

                    </div>
                    
                    </section>
                    <section  className="project_body" id="research">
                    <h2>Research & Synthesize</h2>
                    <h5>Problem-shooting Workflow & Problem Space</h5>
                    <p>I interviewed three administrators from the lighting department and synthesized a typical trouble-shooting workflow. I also summarised the problems they faced in the process.</p>
                    
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
                    <h5>How might we help administrators notice and react to system problems quickly and coordinate the problem shooting process efficiently?</h5>
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
                
                           

                <section  className="project_body" id="design">
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
                                <button class="uk-button uk-button-secondary uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide3")}>See Detailed Process</button>
                            </div></>):(<>
                            <div className="hiden_content_switch_container text-center">
                                <button class="uk-button uk-button-secondary uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide3")}>Hide Detailed Process</button> 
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
                                <button class="uk-button uk-button-secondary uk-width-1-1" onClick={()=>this.toggleHiddenContent("hide3")}>Hide Detailed Process</button>
                            </div>  
                            </>)}
                </section>
                <section className="project_body" id="deliver">
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
                    <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/notification.gif")}>click here to watch the interaction.</Button></div> 
                        
                </section>
                </div>

                    </Col>
                </Row>
                <ProjectPagination pagination={pagination} />
                <BackToTopBtn contents={contents} pagination={pagination} /> 
                <ImageModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    url={this.state.url}
                />
            </div>

    

        </>)

    }
}





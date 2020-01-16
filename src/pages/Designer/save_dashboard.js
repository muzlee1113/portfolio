
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

class Save extends React.Component {


    render(){
        return (<>
        <section  className="project_body" id="dashboard">
        <h2>Design #2</h2>
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
                    <h6>Legibility Testing</h6>
        
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
        <h2>Deliver #2</h2>
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
                    <Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/street_light_dashboard_move.gif")}>click here to watch the interaction.</Button>
             </div>
        <br/>
        
                <ImageZoom
                    image={{
                    src: '/images/IoT/dashboard_to_details.png',
                    alt: '',
                    className: 'project_illustration'
                    }}
                
                />
                <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/anomaly_to_detail.gif")}>click here to watch the interaction.</Button></div>  
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
                            
                            <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/homepage_dashboard_move.gif")}>Click here to watch the interaction (gif of the website).</Button></div>
                            <ImageZoom
                                image={{
                                src: '/images/IoT/env_sensor_dashboard.png',
                                alt: '',
                                className: 'project_illustration'
                                }}
                            
                            />
        
                            <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/env_sensor_dashboard_move.gif")}>Click here to watch the interaction </Button></div>
                            <ImageZoom
                                image={{
                                src: '/images/IoT/manhole_cover_dashboard.png',
                                alt: '',
                                className: 'project_illustration'
                                }}
                            
                            />
                           
                           
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
        <section  className="project_body" id="secondary">
                       

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
        </>)

    }
}



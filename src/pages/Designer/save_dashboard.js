
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
        </>)

    }
}



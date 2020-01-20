
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

const contents=[

    {
        id:"#design",
        name:"Ideate & Design"

    },
    {
        id:"#deliver",
        name:"Final Design"

    },
    {
        id:"#todo",
        name:"To dos"
    }
]

const prev = {
    url: "/work/IoT",
    name: "Back to the Smart Street Lighting Management Tool"
}

const next = {
    url: "/work/Nightkick",
    name: "Nightkick"
}

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

    render() {
        return (<>
            <ScrollToTopOnMount />
             <div className="project_head_container">

                <section className="project_head">
                    <h1>Dashboards of a smart city infrastructure management tool</h1>
                    <div className="project_info">Work project. The full project lasted more than 3 months (May - July 2019) and shipped in September</div>
                </section>

            </div>
           
            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">


                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;top: #scrollstart">

                            <ul className="unset-Sticky" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                                <div><a href={prev.url} className="project_brief_content"><span uk-icon="icon:triangle-left"></span>{prev['url']?('prev project'):('Home')}</a></div>
                                <br/>
                                
                                {contents.map((item)=><li className="uk-l project_brief_content"><a href={item.id}>{item.name}</a></li>)}
                                <br/>
                                <div><a href={next.url} className="project_brief_content">{next['url']?('next project'):('Home')}<span uk-icon="icon:triangle-right"></span></a></div>
                                </ul> 
                            </div>
                        </div>
                    </Col>

                    <Col md={12} lg={9}>
                        {/* <section className="project_body" id="dashboard">
                            <h2>Problem</h2>
                            <h5>Administrators have difficulties digesting a large amount of data and take actions</h5>
                        </section> */}
                        <section className="project_body" id="design">
                            <h2>Design</h2>
                            <h5>What data are available and how to visualiza?</h5>
                            <p>What I did to tackle this design challenge includes: learning about available data and metrics, matching what we have with what users need by sketching, evaluating and prototyping.</p>

                           

                            
                           
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
                                    <h6>Exploratory Usability Study</h6>

                                    <p>Later, I created a clickable testing page with my paper prototypes and Axure, and asked my colleagues from the administrative team to rank the graphs according to importance and legibility. I tested them with administrators in my company as an alternative to the real users since they shared a similar mindset.</p>
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/graph_testing_vis.gif',
                                            alt: '',
                                            className: 'project_illustration_small'
                                        }}

                                    />
                                    <p className="project_caption" style={{ textAlign: "center" }}>This is the clickable testing page I created with Axure.</p>
                                    <p>I found that people make sense of data only in <span style={{ "color": "#9D2721" }}><b>comparisons</b></span> or in <span style={{ "color": "#9D2721" }}><b>contexts</b></span>.</p>

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
                              
                        </section>
                        <section className="project_body" id="deliver">
                            <h2>Deliver</h2>
                            <h5>Hi-fidelity Prototypes</h5>
                            <p>I designed different dashboards for different systems and various devices and also their interations with other pages.</p>
                            <h6>Dashboard for Street Lighting System</h6>
                            <ImageZoom
                                image={{
                                    src: '/images/IoT/street_light_dashboard.png',
                                    alt: '',
                                    className: 'project_illustration'
                                }}

                            />
                      
                            <h6>Dashboard for Environment Monitoring System</h6>
                            <ImageZoom
                                image={{
                                    src: '/images/IoT/env_sensor_dashboard.png',
                                    alt: '',
                                    className: 'project_illustration'
                                }}

                            />
                      
                            <ImageZoom
                                image={{
                                    src: '/images/IoT/dashboard_to_details.png',
                                    alt: '',
                                    className: 'project_illustration'
                                }}

                            />
                            <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/anomaly_to_detail.gif")}>click here to watch the interaction.</Button></div>
                           

                        </section>
                        <section className="project_body" id="todo">
                            <h2>To Dos</h2>
                                <h6>Interactions with Dashboard</h6>
                                <p>In testing, I realized that many users didn't pay much attention to the dashboards. They spent less than a few seconds on them and jumped to the page they wanted right away. Some users clicked on the graphs, and charts, longing to know more details. Dashboard is a window to view the larger the data well. I would love to improve users' interations with the numbers, graphs and charts so as to give them a powerful tool to pry into details and get more in-depth insights.</p>
                            </section>
                        
                      





                    </Col>
                </Row>
                <ProjectPagination prev={prev} next={next}/>
                <BackToTopBtn contents={contents} prev={prev} next={next}/>
                <ImageModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    url={this.state.url}
                />
            </div>
            




        </>)

    }
}



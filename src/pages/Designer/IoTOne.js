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



// function App() {

//     return (
//       <ButtonToolbar>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>


//       </ButtonToolbar>
//     );
//   }

class IoTOne extends React.Component {

    state = {
        modalShow: false,
        // setModalShow:false,
        url: "",

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
            <section className="project_head_container">
                <h4>Case Study #1 | Make Data Glanceable & Usable</h4>
                <h1>How can we help users to grasp and use the information they need?</h1>
            </section>

            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">

                            <div className="project_brief_container">
                                <div className="project_brief_title">Client Name</div>
                                <div className="project_brief_content"><a href="h6tp://www.szxylg.com">新阳蓝光 | Xingyang Languang</a> | A smart street lights and IoT sensors provider that aims to optimize energy efficiency and decision intelligence for cities, commercial, industrial and office parks.</div>
                                <div className="project_brief_title">Project End Goal</div>
                                <div className="project_brief_content">To improve the usability of the back-stage management tool for the client’s products which serve the IoT-based city infrastructure.</div>
                                <div className="project_brief_title">My Role</div>
                                <div className="project_brief_content">UX Designer</div>


                            </div>
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;"
                            // style={{position: "fixed", right: "2vw", bottom: "5vh"}}
                            >
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT'}>User Research</Link></div>
                                <div className="project_brief_content">Inform Design With Research</div>
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/datavis'}>Case Study #1</Link></div>
                                <div className="project_brief_content">Make Data Glanceable & Usable</div>
                                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 80"
                                // className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon"
                                >
                                    <li className="uk-l project_brief_content"><a href="#list-item-1">Problem Space & Research Insights</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-3">Design Glanceable Dashboards</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-4">Design Actionable Alerts</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-5">Design Entrance to Detailed View</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-6">To Dos</a></li>
                                    {/* <li className="uk-l project_brief_content"><a href="#list-item-8">Takeaways</a></li> */}
                                </ul>
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/infonav'}>Case Study #2</Link></div>
                                <div className="project_brief_content"> Improve Information Navigation</div>
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/sysimg'}>Case Study #3</Link></div>
                                <div className="project_brief_content">Improve System Image</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>
                        <div className="project_container">
                            <LazyLoad height={200} offset={100} once>

                            <section id="list-item-1" className="project_body">

                                <h2>Problem Space & Research Insights</h2>
                                <h5>What data do the users want and how do they get and use them?</h5>
                                <p>In the <Link className="text_link" to={'/work/IoT'}>contextual inquiries</Link>, we found that the users could not easily figure out the system status, even though the system used in the office park offered dashboards and the highway light system had overall data panels. </p>
                                    
                                <p>The finding in <Link className="text_link" to={'/work/IoT'}>usability studies</Link> confirmed our findings in the field, it is not easy for the users to grasp system status at a glance and move from what they know to what they can do;</p>
                                <p>To better figure our what helped users to capture the overall picture of the system, I went back to the data I collected, I synthesized that administrator's daily workflow can be depicted as follow:</p>
                                <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/3_types_of_data.png"} />
                                <p className="project_caption" style={{ "textAlign": "center" }}>A Day of an Administrator</p>
                            </section>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100} once>

                            <section id="list-item-3" className="project_body">

                                <h2>Deliverable 1</h2>
                                <h5>Design glanceable dashboards to show the big picture</h5>

                                <p>I started with sketching. </p>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/sketches.png"} />
                                <p>Later, I created a clickable testing page with my paper prototypes and Axure, and asked my colleagues from the administrative team to sort the graphs according to importance and point out the ones they could not understand. I tested them with administrators in my company as an alternative to the real users since they shared a similar mindset. </p>

                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/testing_vis.gif"} />

                                <p className="project_caption">This is the clickable testing page I created with Axure.</p>
                                <p>I found that: </p>
                                <div className="project_quote">
                                    <div className="project_quote_wrapper">
                                        <p className="project_quote_text">People make sense of data only in comparison.</p>
                                    </div>
                                </div>

                                <p><b>Real-time snapshots</b> of the system can reveal to them the status quo, but more importantly, comparing data with <b>historical records</b> and <b>others</b>  can help them interpret the data in contexts.</p>

                                <p>Based on the insight. I delivered four dashboards: one for all devices, which is at the homepage of the application; and others are for smart street lights, smart manhole covers, and environment sensors. </p>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/street_light_dashboard.png"} />
                                <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/street_light_dashboard_move.gif")}>Click to watch it move.</Button></div>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/homepage_dashboard.png"} />
                                <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/homepage_dashboard_move.gif")}>Click to watch it move.</Button></div>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/env_sensor_dashboard.png"} />

                                <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/env_sensor_dashboard_move.gif")}>Click to watch it move.</Button></div>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/manhole_cover_dashboard.png"} />
                                <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/manhole_cover_dashboard_move.gif")}>Click to watch it move.</Button></div>
                                <p> Moreover, we needed how we highlight abnormal data on the dashboards so that the indicators will be coherent throughout the system. So I worked with PM and engineers to define anomalies for different data and worked with visual designers on how they should be displayed.</p>
                                <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/color_legend_icon.png"} />
                                <p className="project_caption" style={{ "textAlign": "center" }}>Icons credited to visual and graphic designer Shiguang Yang.</p>
                                <p>On the left are the color legends I created based on devices' data set and national standards; On the right are the icons indicating various device status.</p>
                            </section>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100} once>
                            <section id="list-item-4" className="project_body">

                                <h2>Deliverable 2</h2>
                                <h5>Design notification system that guides the users to tackle abnormal data</h5>

                                <p>In the interview, participants kept mentioning how they checked on device breakdown or abnormal data in their daily work. They wanted to know what is going wrong, and they sought for more information, and guidance on how to bring them back to normal.</p>

                                <p>I divided the process of alert into <b>three phases</b>: <b>notice</b>, <b>understand</b>, <b>act</b>. The biggest gap doesn’t lie between the anomaly and the user’s perception, but between perception and action.</p>
                                    <img alt='three phases of alert design' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/three_phases.png"} />
                                <p className="project_caption">A sketch of the three phases of alert design and the wireframes of their application on the website.</p>

                                <p>Therefore, when designing the notification system, I put a lot of efforts into facilitating people to move step by step from problems to solutions: </p>
                                <h6>1. Notice Phase: Proactively Alert Users to Problems</h6>
                                <p>For the notice phase, the application alerts users to anomalies in two ways: pop-up modals at the corner and a blinking dot on the notification icon, depending on their urgency. I classified the alarms into two levels to reduce possible distractions when too many alerts show up. In the modal, users are allowed to choose whether they want to dive into the problem right now.</p>

                                    <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/alert_1.gif"} />

                                <h6>2. Understand Phase: One Click for Problem Details</h6>
                                <p>If they want to know more, the ‘more information’ button will provide users with brief information and pin the problematic device on the map. These data can help the users understand the situation and possible reasons behind so that they can make sound decisions. </p>
                                    <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/alert_2.gif"} />
                                <h6>3. Act Phase: Ease the Workflow with Step-by-step Instructions</h6>
                                <p>This is the phase I encountered the biggest challenge. Since how to solve the problem highly depends on the workflow of the organization. However, the old workflows do not fit into the new context where the management tool plays a new role in coordinating all the departments and people. Therefore, I talked to administrators of some of the departments and generalized a basic workflow, and then I drafted a roadmap which finally turned into the design.</p>
                                    <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/workflow.png"} />
                                <p className="project_caption">Here is the workflow we defined from receiving an alert to lifting an alert. It involves at least three departments/groups in the organization: the department of the system administrator, on-site technicians and the department in charge of hardware.</p>
                                <p>In the previous phase, users can easily find a button that leads them to the page where they can kick off the procedure to deal with the problem.</p>
                                    <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/alert_3.gif"} />
                            </section>
                            </LazyLoad>


                            <LazyLoad height={200} offset={100} once>

                            <section id="list-item-5" className="project_body">

                                <h2>Deliverable 3</h2>
                                <h5>Design interconnected system that allows deep dive to details in different situations</h5>
                                <p>Sometimes users did go out to check on a specific device, mostly when something went wrong. Therefore, I linked alerts and abnormal area on heatmap with the related device’s detailed information. </p>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/anomaly_to_detail.gif"} />
                                <p className="project_caption">Here is an example of how users are able to navigate to a detailed page of a specific device from a dashboard map. The detailed page provides general information of the device, real-time data and also logs in forms of table and graph.</p>

                            </section>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100} once>

                            <section id="list-item-6" className="project_body">
                                <h2>TO DOS</h2>
                                <p>There are several parts I would have dived deeper into if I had given more time.</p>
                                <h6>Design for Behavior Change</h6>
                                <p>I have been very interested in this topic and I saw a great opportunity here to design for more efficient energy use. I proposed a possibility to show users how much energy they will use after they set the working time on the strategy-setting page, and provide an option to optimize the settings by drawing in the analyses of traffic. SIID did have the technology to analyze traffic using video footage from the CCTV. This feature would serve as a nudge to environmentally friendly behavior. </p>
                                <h6>Dashboard as Entrance</h6>
                                <p>Second is to design dashboard as entrance rather than data display. In testing, I realized that many users didn't pay much attention to the dashboards. They spent less than a few seconds on them and jumped to the page they wanted right away. Some users clicked on the graphs, and charts, longing to know more details. I would have shifted my focus to showing numbers, graphs and charts as doors to more detailed information and analyses so that the design question would be how can we better show the users the diferent doors and lead them to the right door they want. A personalized dashboard according to visit history might be a good solution.</p>
                            </section>
                            </LazyLoad>

                        </div>
                        <hr className="end-nav-divider" />
                        <LazyLoad height={200} offset={100} once>

                        <div className="end-nav-container">
                            <div className="end-nav-title">
                                <h2>Related Research & Case Studies</h2>
                            </div>
                            <Row>

                                <Col className="card_hover" md={12} lg={4}>
                                    <Link to={'/work/IoT'}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/images/IoT/homepage_vector0.png'} alt="" className='card-img' />
                                        </div>
                                        <div className="workCard_text_container_sub">
                                        <div className="sub_card_tagline">User Research</div>
                                            <div className="sub_card_name">Learn From Users</div>
                                            <div className="sub_card_description">Inform design with contextual inquiries & usability testing</div>
                                        </div>
                                    </Link>
                                </Col>
         


                                <Col className="card_hover" md={12} lg={4}>
                                    <Link to={'/work/IoT/infonav'}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/images/IoT/homepage_vector2.png'} alt="" className='card-img' />
                                        </div>
                                        <div className="workCard_text_container_sub">
                                        <div className="sub_card_tagline ">Case Study #2 </div>
                                            <div className="sub_card_name">Information Navigation</div>
                                            <div className="sub_card_description">Redesign the data map to provide seamless information navigation at various scales</div>
                                        </div>
                                    </Link>
                                </Col>



                                <Col className="card_hover" md={12} lg={4}>
                                    <Link to={'/work/IoT/sysimg'}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/images/IoT/homepage_vector3.png'} alt="" className='card-img' />
                                        </div>
                                        <div className="workCard_text_container_sub">
                                        <div className="sub_card_tagline">Case Study #3 </div>
                                            <div className="sub_card_name">System Image</div>
                                            <div className="sub_card_description">Redesign interfaces of the street light control system according to user habits and behaviors</div>
                                        </div>
                                    </Link>
                                </Col>


                            </Row>

                        </div>
                        </LazyLoad>
                    </Col>
                </Row>

            </div>
            <ProjectPagination prevUrl="" prevName="" nextUrl="/work/materialbank" nextName="Material Bank"/>

            <BackToTopBtn />


            <ImageModal
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
                url={this.state.url}
            />


        </>)
    }


}



export default IoTOne;

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




// function App() {

//     return (
//       <ButtonToolbar>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>


//       </ButtonToolbar>
//     );
//   }

class IoTThree extends React.Component {

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
            <div className="project_head_container">
                {/* <section id="list-item-0" className="project_head">
                    <h1>An IoT-based smart city infrastructure management tool</h1>
                    <h3>Improve glanceablity and usability of the data dashboards and notification system</h3>
                    <div className="project_info">May - July, 2019, Work Project, shipped in August.</div>
                </section> */}

                <h2>#2 Case Study | Match System Image with User Mental Model</h2>
                <h5>How can we improve the way how users control the street lights to be simple and intuitive?</h5>
            </div>
            {/* <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/IoT/headImg.png"} />
            </div> */}


            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">

                        <div className="project_brief_container">
                                <div className="project_brief_title">Company</div>
                                <div className="project_brief_content"><a href="http://www.siid.com.cn/" className="text_link">Shenzhen Institute for Innovative Design</a></div>
                                <div className="project_brief_title">Client</div>
                                <div className="project_brief_content"><a href="http://www.szxylg.com" className="text_link">新阳蓝光 | Xingyang Languang</a> | A smart street lights and IoT sensors provider.</div>
                                <div className="project_brief_title">Project End Goal</div>
                                <div className="project_brief_content">To improve the usability of the management tool of the client’s products which serve the IoT-based city infrastructure.</div>
                                
                                <div className="project_brief_title">My Role</div>
                                <div className="project_brief_content">UX Designer</div>

                               
                            </div>
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;"
                            // style={{position: "fixed", right: "2vw", bottom: "5vh"}}
                            >
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/research'}>User Research</Link></div>
                                <div className="project_brief_content">Inform Design With Research</div>
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/datavis'}>Case Study #1</Link></div>
                                <div className="project_brief_content"> Make Data Glanceable & Usable</div>
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/infonav'}>Case Study #2</Link></div>
                                <div className="project_brief_content"> Improve Information Navigation</div>
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/sysimg'}>Case Study #3</Link></div>
                                <div className="project_brief_content">Improve System Image</div>
                                <ul data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                                    <li className="uk-l project_brief_content"><a href="#list-item-1">User Research & Insights</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-2">Design Better Interaction</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-3">Takeaways</a></li>

                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>
                        <div className="project_container">
                        <LazyLoad height={200} offset={100} once>

                            <section id="list-item-1" className="project_body">
                                <h2>User Research & Insights</h2>
                                <h5>How do users work in real life?</h5>
                                <p>In the user interview, I found that how users set the working time of the street lights was different from what I had thought. </p>


                                <Container>
                                    <Row>
                                        <Col style={{ textAlign: "center", justifyContent: "center" }} md="12" lg="4">
                                            
                                                <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/habit1.PNG"} />
                                            <p className="project_caption">1. Bulk Control</p>
                                        </Col>
                                        <Col style={{ textAlign: "center" }} md="12" lg="4">
                                                <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/habit2.PNG"} />
                                            <p className="project_caption">2. Three Occasions</p>
                                        </Col>
                                        <Col style={{ textAlign: "center" }} md="12" lg="4" >
                                                <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/habit3.PNG"} />
                                            <p className="project_caption">3. Set Plan Like Booking A Hotel Room</p>
                                        </Col>
                                    </Row>
                                </Container>
                                <div style={{ marginTop: "1em", marginBottom: "2em" }}>
                                    <p className="project_caption">1. Users control street lights <b>by groups</b>: street lights on a street, in a district, around a building, at an intersections</p>
                                    <p className="project_caption">2. There are <b>three kinds of controls</b>: </p>
                                    <ul>
                                        <li className="project_caption">Routine settings (stable; applied to large scale) </li>
                                        <li className="project_caption">Special settings (set up in advance and take effect for relatively short amount of time; applied to a relatively small scale)</li>
                                        <li className="project_caption">Temporary settings (emergent and take effect for a short time; applied to a small scale. </li>
                                    </ul>
                                    <p className="project_caption">3. When setting, users <b>start</b> from the time to turn on the lights (first day afternoon) and <b>stop</b> at the time to turn off the lights (next day morning) and they would rather use <b>relative time</b> (hours before or after sunrise or sunset) than absolute time (eg. 6:00 pm)</p>
                                </div>


                                <h6>Mismatch of System Models and User Mental Models</h6>
                                <p>To my surprise, I found that many devices were not working in the ways that as the users thought it would be.</p>
                                    <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/limitation.png',
                                                    alt: '',
                                                    className: 'project_illustration_medium'
                                                    }}
                                                
                                                />
                               
                                <p className="project_caption">For example, I thought that the smart street lights could either adjust to changing ambient lights or follow a schedule 'downloading' from the cloud. However, actually street lights themselves do not contain but relies on the cloud application's command after it processes the sensor data. Moreover, the street lights work according to ‘a 24-hour periodic timer’ and will maintain its status (on or off) until the timer match the time in the command.</p>
                                <p>The mysterious system images of the devices were so different from user mental models and thus created huge obstacles in their use. Also, they created a lot of technical challenges in implementation. </p>
                            </section>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100} once>

                            <section id="list-item-2" className="project_body">

                                <h2>Deliverables</h2>
                                <p><b>1. Selected Cart</b>: allow users to select group of devices by adding lights in an area into a selected ‘cart’ and by dragging on the map using the Hand tool; users can apply advanced filters in the Selected Cart to further narrow down the range of their control; </p>
                                <ImageZoom
                                    image={{
                                    src: '/images/IoT/bulkControl.gif',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <p className="project_caption" >Users can add lights into the selected cart and apply more filters to select the ones they want to control. This is a screen record of the actual website.</p>
                                <p><b>2. Settings: </b> allow users to set work hours in the old way: from 12 p.m. to 12 p.m., using relative time.</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/IoT/sketch_strategy.jpg',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <p className="project_caption" style={{ "textAlign": "center" }}>I was ideating the different steps of settings and how to visualize the strategy so that administrators can better decisions.</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/IoT/strategy.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <ImageZoom
                                    image={{
                                    src: '/images/IoT/lightControl.gif',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />   
                                
                                  
                                <p className="project_caption">The final strategy dashboard and special strategy setting page.</p>
                                <p><b>3. Provide Setting Guidances for Different Occasions</b>: guide users to configure the routine strategies when the system sets up, add on special working hours if need be and temporarily control one or groups of lights within some time in the monitor and control hub. </p>

                            </section>
                            </LazyLoad>
                        </div>
                        <LazyLoad height={200} offset={100} once>

                        <section id="list-item-2" className="project_body">
                            <h2>TAKEAWAYS</h2>
                            <h6>Ask Questions and Learn from Everyone</h6>
                            <p>IoT system is complex and daunting. I spent a lot of time talking with engineers and developers, to understand the purposes, functionalities, and limitations of the devices. By frequently raising questions, I not only learned every part of the system but also formed a reciprocal and supportive relationship with them, which was beneficial in cross-functional collaboration.</p>
                            <h6>Design with Limitations</h6>
                            <p>The biggest lesson I learned from this project is to understand and get used to limitations in my design. Just like painting, an important thing to do is to understand your tools and materials. We should also understand the machine and data so that we won't subject our design to the whim of our naive mind.</p>
                        </section>
                        </LazyLoad>
                        <hr className="end-nav-divider" />
                        <LazyLoad height={200} offset={100} once>

                        <div className="end-nav-container">
                            <div className="end-nav-title">
                                <h2>Related Research & Case Studies</h2>
                            </div>
                        <Row>

                            <Col className="card_hover" md={12} lg={4}>
                                <Link  className="card_link" to={'/work/IoT/research'}>
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
                                <Link  className="card_link" to={'/work/IoT/datavis'}>
                                    <div>
                                        <img src={process.env.PUBLIC_URL + '/images/IoT/homepage_vector1.png'} alt="" className='card-img' />
                                    </div>
                                    <div className="workCard_text_container_sub">
                                    <div className="sub_card_tagline ">Case Study #1</div>
                                            <div className="sub_card_name ">Data visualization</div>
                                            <div className="sub_card_description">Improve glanceablity and usability of the data dashboards and notification system</div>
                                    </div>
                                </Link>
                            </Col>


                            <Col className="card_hover" md={12} lg={4}>
                                <Link  className="card_link" to={'/work/IoT/infonav'}>
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



                            {/* <Col md={12} lg={4}>
                                <Link to={'/work/IoT/sysimg'}>
                                    <div>
                                        <img src={process.env.PUBLIC_URL + '/images/IoT/homepage_vector3.png'} alt="" className='card-img' />
                                    </div>
                                    <div className="workCard_text_container_sub">
                                        <div className="card_description ">Case Study #3 </div>
                                        <div className="card_description ">System Image</div>
                                        <div className="card_tagline">Redesign interfaces of the street light control system according to user habits and behaviors</div>
                                    </div>
                                </Link>
                            </Col> */}


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



export default IoTThree;

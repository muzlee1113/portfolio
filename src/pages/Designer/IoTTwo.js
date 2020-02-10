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

class IoTTwo extends React.Component {

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

                <h2>#2 Case Study | Information Navigation & Findibility</h2>
                <h5>How can we help users to navigate information at various scales?</h5>
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
                                <ul className="unset-Sticky" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80"
                                // className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon"
                                >
                                    <li className="uk-l project_brief_content"><a href="#list-item-1">Usability Testing & Results</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-3">WYSIWYG</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-4">Sidebar Enables Seamless Navigation</a></li>
                                </ul>
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/sysimg'}>Case Study #3</Link></div>
                                <div className="project_brief_content">Improve System Image</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>
                        <div className="project_container">
                            <LazyLoad height={200} offset={100} once>

                                <section id="list-item-1" className="project_body">
                                    <h2>Usability Testing & Results</h2>
                                    <h5>What get in the way of seamless and happy navigation?</h5>
                                    <p>There are three important components in the map view of monitor and control hub: a map showing devices with icons, a list of devices in the right sidebar, filters of areas and device types on the top. During the role-play walkthroughs, I found that: </p>
                                    <Container>
                                        <Row style={{ alignItems: "center" }}>
                                            <Col md="12" lg="8">
                                                <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/testing_problems_1.PNG',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                                
                                            </Col>
                                            <Col md="12" lg="4">


                                                <p><small>😟 1 When users zoomed in and out, scrolled up and down the map, the device list on the right changed accordingly, showing only the devices they could see on the screen. However, it didn’t change the filters on top of the page, so users easily <b>felt lost</b>.</small></p>
                                            </Col>
                                        </Row>
                                        <Row style={{ alignItems: "center" }}>
                                            <Col md="12" lg="8">
                                            <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/testing_problems_2.PNG',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                                
                                               
                                            </Col>
                                            <Col md="12" lg="4">

                                                <p><small>😟 2 When users applied filters, the map this time <b>didn’t move accordingly</b> to where they can see all devices. So sometimes suddenly nothing was on the map.</small></p>
                                            </Col>
                                        </Row>
                                        <Row style={{ alignItems: "center" }}>
                                            <Col md="12" lg="8">
                                            <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/testing_problems_3.PNG',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                               </Col>
                                            <Col md="12" lg="4">

                                                <p><small>😟 3 Once they found a device they were interested in, they clicked to see the details, but unexpectedly <b>the website</b> sent them to another page, and when they go back, all <b>the filters they had set disappeared.</b></small></p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </section>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100} once>

                                <section id="list-item-3" className="project_body">

                                    <h2>Deliverable 1</h2>
                                    <h5>🙂 1&2 Align interactions with users' purposes and expectations</h5>
                                    <p>Since users come to the map to locate and control devices, most of the time, as a group, it will create trouble if the range of selected devices is random and unclear.</p>
                                    <Row className="align-items-center">
                                        <Col md={12} lg={4}>
                                            <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/filter_map.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                        </Col>
                                        <Col md={12} lg={8}>
                                            <ImageZoom
                                                image={{
                                                src: '/images/IoT/filter_map_table.png',
                                                alt: '',
                                                className: 'project_illustration'
                                                }}
                                            
                                            />
                                        </Col>
                                    </Row>
                                        
                                    
                                     <p className="project_caption" style={{ "textAlign": "center" }}>The flexibility of map navigation causes troubles when users need to specify the range of the devices.</p>
                                    <p>Moreover, when users apply filters, they expect to see the results on the map and in the list. When they drag or scroll the map, they mean to look for devices outside the viewport, but not to change the filters. The map and list should work according to users' expectations and help them complete their tasks. So I redesigned the logics as follow:</p>
                                    <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/logics.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                    <p className="project_caption" style={{ "textAlign": "center" }}>The New Logics</p>

                                    <p>Since users have less freedom selecting filters compared with controlling the viewport of the map (zooming, scrolling, dragging), it is actually good for the users to specify the range or group of devices they want to control or view.</p>


                                </section>
                            </LazyLoad>
                            <LazyLoad height={200} offset={100} once>

                                <section id="list-item-4" className="project_body">

                                    <h2>Deliverable 2</h2>
                                    <h5>🙂 3 Use the sidebar to provide a seamless and linear experience</h5>

                                    <p>In the new design, device detailed views are moved to the sidebar on the right of the page to contextualize the in-depth navigation on the map. Therefore, users can view the map and the device information at the same time.</p>
                                    <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/sketch_map.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                   
                                    <p className="project_caption" style={{ "textAlign": "center" }}>My sketches on how to display information on the sidebar.</p>
                                    <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/scale.gif',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                 
                                    <p className="project_caption" style={{ "textAlign": "center" }}>This is a screen record of the alpha version. There were still some bugs here on the transitions.</p>
                                    <p>Moreover, I spent a lot of time figuring out the affiliations between different devices and provided links to help users better navigate to and fro from list to detailed view, and from one detailed view to another.</p>
                                    <ImageZoom
                                                    image={{
                                                    src: '/images/IoT/scale2.png',
                                                    alt: '',
                                                    className: 'project_illustration'
                                                    }}
                                                
                                                />
                                 
                                    <p className="project_caption" style={{ "textAlign": "center" }}>Users can drill into details and zoom out for overview; they can also move parallelly to other related devices.</p>
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
                                        <Link  className="card_link" to={'/work/IoT/sysimg'}>
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
            {/* <ProjectPagination prevUrl="" prevName="" nextUrl="/work/materialbank" nextName="Material Bank" /> */}

            <BackToTopBtn />


            <ImageModal
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
                url={this.state.url}
            />


        </>)
    }


}



export default IoTTwo;

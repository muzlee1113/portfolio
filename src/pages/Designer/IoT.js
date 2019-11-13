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

class IoT extends React.Component {

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
                <section id="list-item-0" className="project_head">
                    <h1>An IoT-based smart city infrastructure management tool</h1>
                    <h3>Improve the usability of the IoT network in real-world contexts.</h3>
                    <div className="project_info">May - July, 2019, Work Project, shipped in August.</div>
                </section>
            </div>
            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/IoT/headImg.png"} />
            </div>


            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">

                            <div className="project_brief_container">
                                <div className="project_brief_title">Company</div>
                                <div className="project_brief_content"><a href="http://www.siid.com.cn/" className="text_link">Shenzhen Institute for Innovative Design</a></div>
                                <div className="project_brief_title">Client</div>
                                <div className="project_brief_content"><a href="h6tp://www.szxylg.com" className="text_link">新阳蓝光 | Xingyang Languang</a> | A smart street lights and IoT sensors provider.</div>
                                <div className="project_brief_title">Project End Goal</div>
                                <div className="project_brief_content">To improve the usability of the management tool of the client’s products which serve the IoT-based city infrastructure.</div>
                                
                                <div className="project_brief_title">My Role</div>
                                <div className="project_brief_content">UX Designer</div>

                               
                            </div>
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;">
                                    <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/research'}>User Research</Link></div>
                                    <div className="project_brief_content">Inform Design With Research</div>
                                    <div className="project_brief_content"><Link className="text_link" to={'/work/IoT/datavis'}>Case Study #1</Link></div>
                                    <div className="project_brief_content"> Make Data Glanceable & Usable</div>
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

                                <section id="list-item-0" className="project_body">
                                <h2>Intro</h2>
                                <h5>Internet of Things and Smart Cities</h5>
                                <p>Internet of Things has become a hot topic these years. With the growing maturity of the technologies such as cellular network and smart devices, many cities in China have launched projects to bring innovations into city management. Shenzhen is among one of those.</p>
                                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/smart_city.jpg"} />
                                <p className="project_caption" style={{ "textAlign": "center" }}>Longgang Operation Centre | photo from <a className="text_link" href = 'https://mytechdecisions.com/video/worlds-largest-curved-video-wall-installed-at-longgang-operation-centre/'>my tech decisions </a></p>
                                <p>In summer 2019, I spent more than three months in the Shenzhen Institute for Innovative Design (SIID) as a UX designer to redesign a city infrastructure management tool offered by Xingyang Languang, a smart device manufacturer.</p>
                                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/deliver.png"} />
                                <p className="project_caption" style={{ "textAlign": "center" }}>I was delivering my findings to the project team.</p>
                                <p>I was the only UX designer in the team working with a product manager, visual designers, and developers. I worked in an iterative cycle of user research, rapid prototyping and usability studies to redefine various features and interfaces. I stopped working on the project as the websites started to be built.</p>
                                </section>
                                </LazyLoad>
                                
   
                        </div>
                    </Col>
                </Row>
            </div>
            <LazyLoad  height={200} offset={100} once>
                        <section className="project_separator">
                            <div className="project_separator_inner_wrapper">
                            <h2>The Process</h2>
                                <h5>User Research & Case Studies</h5>
                                <p>My work can be divided into these four parts. Click to find out the process.</p>
                                        <div className="subCards_container">

                                            <Row>

                                                <Col className="card_hover" md={12} lg={3}>
                                                    <Link  className="card_link" to={'/work/IoT/research'}>
                                                        <div>
                                                            <img className="project_illustration_small" src={process.env.PUBLIC_URL + '/images/IoT/homepage_vector0.png'} alt="" className='card-img' />
                                                        </div>
                                                        <div className="workCard_text_container_sub">
                                                            <div className="sub_card_tagline">User Research</div>
                                                            <div className="sub_card_name">Learn From Users</div>
                                                            <div className="sub_card_description">Inform design with contextual inquiries & usability testing</div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col className="card_hover" md={12} lg={3}>
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


                                                <Col className="card_hover" md={12} lg={3}>
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



                                                <Col className="card_hover" md={12} lg={3}>
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


                            </div>
                               

                        </section>

             </LazyLoad>
            <LazyLoad height={200} offset={100} once>
            <div className="project_separator">
                <div className="project_separator_inner_wrapper">
                            <h2>Final Design</h2>
                            <h5>Key Pages That I worked on. Click to see the related case studies.</h5>
              
                            <div style={{margin: "32px 0 32px"}}>
                                <a href="/work/IoT/datavis"><h6>1. Dashboards for the Whole System</h6>
                                <img className="project_illustration_nomargin" src={process.env.PUBLIC_URL + "/images/IoT/final_1.png"} />
                                </a>
                            </div>
                            <div style={{margin: "32px 0 32px"}}>
                                <a href="/work/IoT/infonav"><h6>2. Monitor & Control Hub</h6>
                                <img className="project_illustration_nomargin" src={process.env.PUBLIC_URL + "/images/IoT/final_2.png"} />
                                </a>
                            </div>
                            <div style={{margin: "32px 0 32px"}}>
                                <a href="/work/IoT/datavis"><h6>3. Notification Center</h6>
                                <img className="project_illustration_nomargin" src={process.env.PUBLIC_URL + "/images/IoT/final_3.png"} />
                                </a>
                            </div>
                            <div style={{margin: "32px 0 32px"}}>
                            <a href="/work/IoT/sysimg">

                                <h6>4. Smart Street Light Management Tool</h6>
                                <img className="project_illustration_nomargin" src={process.env.PUBLIC_URL + "/images/IoT/final_4.png"} />
                                </a>

                            </div>
                            <div style={{margin: "32px 0 32px"}}>
                                <a href="/work/IoT/datavis"><h6>5. Smart Manhole Covers Management Tool</h6>
                                <img className="project_illustration_nomargin" src={process.env.PUBLIC_URL + "/images/IoT/final_5.png"} />
                                </a>
                            </div>
                            <div style={{margin: "32px 0 32px"}}>
                                <a href="/work/IoT/datavis"><h6>6. Environmental Sensors Management Tool</h6>
                                <img className="project_illustration_nomargin" src={process.env.PUBLIC_URL + "/images/IoT/final_6.png"} />
                            </a>
                            </div>
                </div>
                
                
            </div>
            </LazyLoad>
           
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



export default IoT;

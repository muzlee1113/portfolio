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
                                <div className="project_brief_title">Client Name</div>
                                <div className="project_brief_content"><a href="h6tp://www.szxylg.com">新阳蓝光 | Xingyang Languang</a> | A smart street lights and IoT sensors provider that aims to optimize energy efficiency and decision intelligence for cities, commercial, industrial and office parks.</div>
                                <div className="project_brief_title">Project End Goal</div>
                                <div className="project_brief_content">To improve the usability of the back-stage management tool for the client’s products which serve the IoT-based city infrastructure.</div>
                                <div className="project_brief_title">My Role</div>
                                <div className="project_brief_content">UX Designer</div>


                            </div>
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;">
                                <div className="project_brief_content"><Link className="text_link" to={'/work/IoT'}>User Research</Link></div>
                                <div className="project_brief_content">Inform Design With Research</div>
                                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                                     <li className="uk-l project_brief_content"><a href="#list-item-0">Intro</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-1">Research Questions & Hypotheses</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-2">Contextual Inquiries & Design Requirements</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-3">Usability Testing & Design Questions</a></li>

                                </ul>
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
                                <section id="list-item-0" className="project_body">
                                <h2>Intro</h2>
                                <h5>Internet of Things and Smart Cities</h5>
                                <p>Internet of Things has become a hot topic these years. Powered by the faster cellular network and the smarter devices, the promising future seems to be around the corner, where computing is  anytime and everywhere, all devices are intelligent and interconnected and all decisions are made based on data streaming to the cloud.</p>
                                <LazyLoad height={200} offset={100} once>
                                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/smart_city.jpg"} />
                                </LazyLoad>
                                <p className="project_caption" style={{ "textAlign": "center" }}>Longgang Operation Centre | photo from <a href = 'https://mytechdecisions.com/video/worlds-largest-curved-video-wall-installed-at-longgang-operation-centre/'>my tech decisions </a></p>
                                <p>With the growing maturity of the technologies, many cities in China have launched projects to bring innovations into city management. Shenzhen, among one of the leading smart cities in China, has implemented smart solutions in different sectors. However, considering the scale and complexity of the city, and different stakeholders and participants in the game, an efficient and cohesive IoT system is never easy to build.</p>
                                <p>In summer 2019, my first task in Shenzhen Institute for Innovative Design (SIID) as a UX designer was to redesign the city infrastructure management tool offered by Xingyang Languang, a smart device manufacturer.</p>
                                <LazyLoad height={200} offset={100} once>
                                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/deliver.png"} />
                                </LazyLoad>
                                <p className="project_caption" style={{ "textAlign": "center" }}>I was delivering my findings to the project team.</p>
                                <p>I was the only UX designer in the team working with a product manager, visual designers, and developers. I worked in an iterative cycle of user interviews, rapid prototyping and usability studies to redefine various features and interactions. I stopped working on the project as the websites started to be built.</p>
                                </section>
                            <section id="list-item-1" className="project_body">
                                <h2>Research Questions & Hypotheses</h2>
                                <h5>What do we want to know?</h5>
                                <p>The biggest challenge we faced was that we were so far away from the scenarios. We worked for the client and they worked for the cities or parks which actually implement the system. Therefore, we had very limited knowledge of the end users and the contexts. </p>
                                <p>What made the problem even more complicated was that the organizations interested in IoT were normally big and complex. There were different sectors and different roles inside, with their own unique needs.</p>
                                <p>Therefore, our user research mainly focuses one getting first-hand knowledge of potential users of the tool, understanding who they are, what they want and need, how they work and what problems they face. Ultimately, we were able to use the knowledge to prioritize the primary users and identify needs and opportunities. The <b>research questions</b> were written down as follows:</p>
                                <ul>
                                    <li>Who might potentially be the actual users of the tool?</li>
                                    <li>What are their main tasks and how do they work on them now?</li>
                                    <li>What problems do they face when working on the tasks? How do they solve them?</li>
                                </ul>
                                <p>Then, I hosted a brainstorm session with the product manager and engineers, and finally, we postulated that people in the following roles were the stakeholders, and they had their own different goals and needs: </p>
                                <LazyLoad height={200} offset={100} once>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/hypothesis.png"} />
                                </LazyLoad>
                            </section>
                            <section id="list-item-2" className="project_body">
                                <h2>From Research Questions to Design Requirements</h2>
                                <h5>Learned From the Users in User Research</h5>
                                
                                <h6>Methods</h6>
                                <p>Contextual Inquiries</p>
                                <h6>Participants</h6>
                                <p>Administrators from the department in charge of highway light infrastructure and a manager in charge of the streetlight system of an office park.</p>
                                <h6>Finding 1: Administrators were used to complex tools to 'talk' to devices while used primitive tools and ways to manage their tasks and communicated with others.</h6>
                                <p>The administrators controlling the highway light system had their own management tool at hand. However, the tool is intricated, with many layers of information and couter-intuitive way of interations.</p>
                      
                           
                                <div className="frame_wrapper">
                                    <iframe className="project_illustration_medium" style={{border: "none"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F31wTxeoPe74AqBg83CWTB3%2FUntitled%3Fnode-id%3D4%253A25%26scaling%3Dmin-zoom" allowfullscreen></iframe>
                                </div>
                                <p>This was a tool designed specifically for controlling highway lights. The administrator needed to go down 6 layers and many steps to control an individual light or lights on specific segments of the highway.. When they walked us through, one administrator told us that they found it difficult to find the light they wanted to control, but they gradually got used to it.</p>
                                <p>Even though they used a complex system to control lights, the tasks were assigned by paper and they talked to the head of the on-site group by text messages and updated a sheet of tasks manually first thing in a day. Technicians who worked on the tasks simply reported to them by checking a box and signing.</p>
                                <LazyLoad height={200} offset={100} once>
                                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/papersheet.png"} />
                                </LazyLoad>
                                <div className="project_caption" style={{ "textAlign": "center" }}>These are images I downloaded online but they are very similar to what the administrators used.</div>
                                <h6>Finding 2: Administrators were not able to know the status of the system in real-time with the tools they have in the office.</h6>
                                <p>The administrators of highway lights relied on the daily report from the on-site technicians to learn about the status of the system. The manager of the office park used CCTV monitors or just simply walked around the park to keep track of the lights.</p>
                                <p>These basic findings informed us that administrators as the actual users of the tool needed a better tool to:</p>
                                <ul>
                                    <li>Control the devices</li>
                                    <li>Manage tasks</li>
                                    <li>Communicate with others</li>
                                    <li>Learn about the overall status of the system</li>
                                </ul>
                                <p>We also learned and set up the following design requirements:</p>
                                <ul>
                                    <li>The tool should be intuitive with gentle learning curve.</li>
                                    <li>The tool should allow and facilitate collaboration and communication.</li>
                                    <li>The tool should proactively learn and push information.</li>
                                    <li>The tool should not be constrained in office but extend to on-site contexts.</li>
                                </ul>
                            </section>


                            <section id="list-item-3" className="project_body">
                                <h2>From General Knowledge to Design Problems</h2>
                                <h5>Used usability studies to pivot on actionable items</h5>
                                <p>To bridge the preliminary research and design phase, I led a <b>role-playing</b> session to inspect the old website. I invited colleagues from different teams to play the role of the system administrator of the Nanshan District, and complete tasks similar to the users’ daily tasks we learned from user research. You can read <a href="https://docs.google.com/document/d/1Wzhgqrxo7YtJaYprwnFdA7flDMVM8VVzVDO9i_Pwb1Y/edit?usp=sharing">the English version of the script here.</a></p>
                                <p>After several role-playing walkthroughs, I finally located the following problems that I could take actions to:</p>
                                <div className="scrollby">
                                    <ul>
                                        <li>#1 Users could not grasp system status at a glance and move from what they know to what they can do;</li>
                                        <li>#2 Users were unable to navigate, zoom in and out the map view easily for both an overview and details;</li>
                                        <li>#3 Single-light real-time control did not fit with the users' working habits;</li>
                                    </ul>
                                </div>
                            </section>
                            <section id="list-item-4" className="project_body">
                                <h2>Solutions</h2>
                                <h5>View how I solved these problems in three case studies</h5>
                                <Row>


                                    <Col className="card_hover" md={12} lg={4}>
                                        <Link to={'/work/IoT/datavis'}>
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
                            </section>
                        </div>
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



export default IoT;

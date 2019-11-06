import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import { Container, Col, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


export default function WorkCardWithSub(props) {

    return (<>

        {/* */}
        <div className="work_wrapper" style={{ backgroundColor: props.bgColor, color: props.tColor }}>
            <div className="workCards_wrapper">


                <div className="workCard" >
                    <Fade bottom>
                        <Row className="align-items-center">
                            <Col md={12} lg={6}>
                                <div className="workCard_text_container">
                                    <div className="card_description">{props.description}</div>
                                    <div className="card_name">{props.name}</div>
                                    <div className="card_tagline">{props.tagline}</div>
                                    <div>{props.labels.map(label => {
                                        return <span class="uk-label mr-2 my-1">{label}</span>
                                    })}
                                    </div>
                                </div>
                            </Col>

                            <Col md={12} lg={6}>
                                <img src={process.env.PUBLIC_URL + props.imgUrl} alt="" className='card-img' />
                            </Col>
                        </Row>
                        <div className="subCards_container">

                            <Row>

                                <Col className="card_hover" md={12} lg={3}>
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
                                <Col className="card_hover" md={12} lg={3}>
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


                                <Col className="card_hover" md={12} lg={3}>
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



                                <Col className="card_hover" md={12} lg={3}>
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

                    </Fade>





                </div>

            </div>
        </div>
        {/* </Link> */}
    </>)
}



// <Row className="align-items-center">
//                             <Col md={12} lg={6}>
//                                 <div class="workCard_text_container">
//                                     <div className="card_description">#1 Data visualization</div>
//                                     <div className="card_tagline">Improve glanceablity and usability of the data dashboards and notification system</div>
//                                 </div>
//                             </Col>
//                             <Col md={12} lg={6}>
//                                 <img src='https://via.placeholder.com/350x150' alt="" className='card-img'/>
//                             </Col>

//                     </Row>
//                     <Row className="align-items-center">
//                             <Col md={12} lg={6}>
//                                 <div class="workCard_text_container">
//                                     <div className="card_description">#2 Information Navigation & Findibility</div>
//                                     <div className="card_tagline">Redesign the data map to provide seamless information navigation at various scales</div>
//                                 </div>
//                             </Col>
//                             <Col md={12} lg={6}>
//                                 <img src='https://via.placeholder.com/350x150' alt="" className='card-img'/>
//                             </Col>
//                     </Row>
//                     <Row className="align-items-center">
//                             <Col md={12} lg={6}>
//                                 <div class="workCard_text_container">
//                                     <div className="card_description">#3 Match System Image with User Mental Model</div>
//                                     <div className="card_tagline">Redesign interfaces of the street light control system according to user habits and behaviors</div>
//                                 </div>
//                             </Col>
//                             <Col md={12} lg={6}>
//                                 <img src='https://via.placeholder.com/350x150' alt="" className='card-img'/>
//                             </Col>
//                     </Row>
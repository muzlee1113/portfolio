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
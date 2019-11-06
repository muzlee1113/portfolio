import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"



function BoardingPass() {

    return (<>
        <ScrollToTopOnMount />
        <div className="project_head_container">

            <section className="project_head">
                <h1>The Boarding Pass</h1>
                <h3>A redesign project of the paper boarding pass to simplify and organize needed information in a clearer hierarchy.</h3>
                <div className="project_info">August 21, 2018 (5 days), Independent Project</div>
                <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/BoardingPass/boarding_pass.png"} style={{"boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}/>
            </section>
        </div>
        <div className="project_overall_container">
            <Row>
            <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">

                           
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;">
                                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 80">

                                <li className="uk-l project_brief_content"><a href="#list-item-1">Journey Map</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-2">Ideation</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>
                        <div className="project_container">
                        <section className="project_body" id="list-item-1">
                            <h2>JOURNEY MAP</h2>
                                <h5>Connecting different steps with relevant information.</h5>
                                <p>Arrive at the airport, check in, go through the security check, look for the gate, wait, go on board and depart. The whole experience before departure in the airport can be divided into several linear steps. Some of the information on the boarding pass is needed in each or the step. Thus, I matched the needed information with the steps and related actions to see the order and hierarchy of the information.</p>
                                <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/BoardingPass/journey_map.png"} />
                            </section>
                            <section className="project_body" id="list-item-2">
                                <h2>IDEATION</h2>
                                <ul>
                                    <li>Since the passenger had already arrived at the airport when he/she got the boarding pass, flight date and airport information are treated with low hierarchy.</li>
                                    <li>Other needed information is placed from left to right in steps according to the sequence in which it is required.</li>
                                </ul>
                                <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/BoardingPass/ideation.png"} />
                                <ul>
                                    <li>The main color choice is related to brand color  (i.e. here, Virgin Airline) and the colorful part will be printed in advance.</li>
                                    <li>Other information will be printed on site in black or gray.</li>
                                </ul>
                                <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/BoardingPass/boarding_pass_blank.png"} style={{"boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}/>
                                <p className="project_caption text-center">The blank boarding pass.</p>
                            </section>

                        </div>

                    </Col>
            </Row>
        
        </div>
            
        <BackToTopBtn />
        </>)
}


export default BoardingPass;

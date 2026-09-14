import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import { Container, Col, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


export default function WorkCard(props) {

    return (<>

        <Link className="card_link" to={props.project.url}>
            <div className="work_wrapper" style={{ backgroundColor: props.project.bgColor, color: props.project.tColor }}>
                <div className="workCards_wrapper">
                    <Fade bottom>

                        <div className="workCard" >
                            <Row className="align-items-center card_hover">
                                <Col xs={12} md={6} >
                                    <div class="workCard_text_container">
                                        <div className="card_description">{props.project.description}</div>
                                        <div className="card_name">{props.project.name}</div>
                                        <div className="card_tagline">{props.project.tagline}</div>
                                        <div>
                                            {props.project.labels.map(label => {
                                                return <span class="uk-label mr-2 my-1">{label}</span>
                                            })}
                                            {props.project.gated && (
                                                <span
                                                    className="uk-label mr-2 my-1 project-lock-badge"
                                                >
                                                    <svg viewBox="0 -960 960 960" width="12" height="12" fill="currentColor">
                                                        <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
                                                    </svg>
                                                    Need Password
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <img src={process.env.PUBLIC_URL + props.project.imgUrl} alt="" className='card-img' />
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                </div>
            </div>
        </Link>
    </>)
}
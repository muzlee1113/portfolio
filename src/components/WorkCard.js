import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Link ,
    Switch,
    Route
} from "react-router-dom";
import { Container, Col, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


export default function WorkCard (props) {
    
    return (<>
           
            <Link className="card_link" to={props.url}>
            <div className="work_wrapper" style={{backgroundColor: props.bgColor, color: props.tColor}}>
            <div className="workCards_wrapper">
            <Fade bottom>

                <div className="workCard" >
                    <Row className="align-items-center card_hover">
                        <Col xs={12} md={6} >
                            <div class="workCard_text_container">
                                <div className="card_description">{props.description}</div>
                                <div className="card_name">{props.name}</div>
                                <div className="card_tagline">{props.tagline}</div>
                                <div>{props.labels.map(label=>{
                                        return <span class="uk-label mr-2 my-1">{label}</span>
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                        <img src={process.env.PUBLIC_URL + props.imgUrl} alt="" className='card-img'/>
                        </Col>
                    </Row>
                </div>
            </Fade>
                </div>
            </div>
            </Link>
</>)
}
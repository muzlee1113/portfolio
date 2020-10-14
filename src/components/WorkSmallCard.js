import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Link ,
    Switch,
    Route
} from "react-router-dom";
import { Container, Col, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
export default function WorkSmallCard (props) {
    
    return (<>
           <article>
           <Fade bottom>
                    <Link to={props.project.url}>
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+props.project.imgUrl} alt=" "/>
                            <div className="overlay" style={{backgroundColor: props.project.bgColor}}>
                                <div className="article-title" style={{color: props.project.tColor}}>
                                    <div className="card_description"><small>{props.project.description}</small></div>
                                    <div>{props.project.name}</div>
                                    <div className="article-subtitle">{props.project.tagline}</div>
                                      {/* <div className="article-subtitle">User Research | UX Design </div> */}
                                      <div>{props.project.labels.map(label=>{
                                        return <span class="uk-label mr-2 my-1">{label}</span>
                                        })}
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </Link>
                    </Fade>
            </article>
            
</>)
}

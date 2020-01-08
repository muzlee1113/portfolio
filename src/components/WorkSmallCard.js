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
                    <Link to="/work/materialbank">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+props.imgUrl} alt=" "/>
                            <div className="overlay" style={{backgroundColor: props.bgColor}}>
                                <div className="article-title" style={{color: props.tColor}}>
                                    <div className="card_description"><small>{props.description}</small></div>
                                    <div>{props.name}</div>
                                    <div className="article-subtitle">{props.tagline}</div>
                                      {/* <div className="article-subtitle">User Research | UX Design </div> */}
                                      <div>{props.labels.map(label=>{
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

import React from "react";
import {
    BrowserRouter as Router,
    Link ,
    Switch,
    Route
} from "react-router-dom";



function DesignerPanel (props) {
    
    return (<>
        <section className="cards show" id="designer_panel">
            <article>
                    <Link to="/work/readwithme">
                        <div className="cardcontainer">
                            <img className="article-img" src={process.env.PUBLIC_URL + "/images/D00ReadwithMe.png"} alt=" "/>
                            <div className="overlay" id="imgReadwithMe">
                                <div className="article-title" style={{"color":"black"}}>
                                    <h5>ReadwithMe</h5>
                                    <h6>A web application that provides afterschool English reading guidance and instructions to middle school students.</h6>
                                    <h6>UX | UI Design</h6>
                                </div>
                            </div>
                        </div>
                    </Link>
            </article>
                <article>
                    <Link to="/work/photome">
                        <div className="cardcontainer">
                            <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00Photome.jpg"} alt=" "/>
                            <div className="overlay" id="imgPhotome">
                                <div className="article-title" style={{"color":"black"}}>
                                    <h5>PhotoMe</h5>
                                    <h6>A mobile app that empowers others to create satisfactory portraits for you.</h6>
                                    <h6>UX | UI Design</h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>
                <article>
                    <Link to="/work/weather">
                        <div className="cardcontainer">
                            <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00Weather.png"} alt=" "/>
                            <div className="overlay" id="imgWeather">
                                <div className="article-title">
                                    <h5>Weather</h5>
                                    <h6>Alerts users to weather changes that will disturb their intended activities.</h6>
                                    <h6>UX | UI Design</h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>
                <article>
                    <Link to="/work/lightup">
                        <div className="cardcontainer">
                            <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00Lightup.png"} alt=" "/>
                            <div className="overlay" id="imgLightup">
                                <div className="article-title">
                                    <h5>Light Up</h5>
                                    <h6>A user-friendly lighting system of a standard hotel room that offer guests home-like experience.</h6>
                                    <h6>UX Design</h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>
                <article>
                    <Link to="/work/boardingpass">
                        <div className="cardcontainer">
                            <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00BoardingPass.png"} alt=" "/>
                            <div className="overlay" id="imgBoardingPass">
                                <div className="article-title">
                                    <h5>The Boarding Pass</h5>
                                    <h6>A redesign project of the paper boarding pass to simplify and organize needed information in a clearer hierarchy.</h6>
                                    <h6>UX | UI Design</h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>
        </section>
    </>)}


export default DesignerPanel;

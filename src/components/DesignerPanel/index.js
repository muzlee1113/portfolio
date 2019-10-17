import React, { useEffect } from "react";
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
                    <Link to="/work/IoT">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL + "/images/IoT/mockup_multiscreens.png"} alt=" "/>
                            <div className="overlay" id="imgIoT">
                                <div className="article-title">
                                    <div>An IoT-based smart city infrastructure management tool</div>
                                    <div className="article-subtitle">Improve the usability of IoT network in real-world contexts.</div>
                                    <div className="article-subtitle">User Research | UX Design | Usability Testing</div>
                                </div>
                            </div>
                        </div>
                    </Link>
            </article>
            <article>
                    <Link to="/work/materialbank">
                        <div className="cardcontainer" >
                            <img alt=''  className="article-img" src={process.env.PUBLIC_URL + "/images/MaterialBank/Mockup.png"} alt=" "/>
                            <div className="shade"></div>
                            <p className="tbdOverlay">Coming Soon</p>
                            <div className="overlay" id="imgMB">
                                <div className="article-title">
                                    <div>Material Bank</div>
                                    <div className="article-subtitle">A website that helps designers search, learn, collect and choose CMF.</div>
                                    <div className="article-subtitle">User Research | UX Design</div>
                                </div>
                            </div>
                        </div>
                    </Link>
            </article>
            <article>
                    <Link to="/work/Kit">
                        <div className="cardcontainer" >
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL + "/images/D00Kit.png"} alt=" "/>
                            <div className="shade"></div>
                            <p className="tbdOverlay">Coming Soon</p>
                            <div className="overlay" id="imgKit">
                                <div className="article-title" style={{"color":"black"}}>
                                    <div>A Design-to-dev Handoff Kit</div>
                                    <div className="article-subtitle">Translate high-fidelity design into machine language</div>
                                    <div className="article-subtitle">Documentation | Cross-functional Collaboration</div>
                                </div>
                            </div>
                        </div>
                    </Link>
            </article>
            <article>
                    <Link to="/work/readwithme">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL + "/images/D00ReadwithMe.png"} alt=" "/>
                            <div className="overlay" id="imgReadwithMe">
                                <div className="article-title" style={{"color":"black"}}>
                                    <div>ReadwithMe</div>
                                    <div className="article-subtitle">A web application that provides afterschool English reading guidance and instructions to middle school students.</div>
                                    <div className="article-subtitle">User Research | UX/UI Design </div>
                                </div>
                            </div>
                        </div>
                    </Link>
            </article>
                <article>
                    <Link to="/work/photome">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Photome.png"} alt=" "/>
                            <div className="overlay" id="imgPhotome">
                                <div className="article-title" style={{"color":"black"}}>
                                    <div>PhotoMe</div>
                                    <div className="article-subtitle">A mobile app that empowers others to create satisfactory portraits for you.</div>
                                    <div className="article-subtitle">User Research | UX/UI Design </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>
                <article>
                    <Link to="/work/weather">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Weather.png"} alt=" "/>
                            <div className="overlay" id="imgWeather">
                                <div className="article-title">
                                    <div>Weather</div>
                                    <div className="article-subtitle">Alerts users to weather changes that will disturb their intended activities.</div>
                                    <div className="article-subtitle">User Research | UX/UI Design </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>
                <article>
                    <Link to="/work/lightup">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Lightup.png"} alt=" "/>
                            <div className="overlay" id="imgLightup">
                                <div className="article-title">
                                    <div>Light Up</div>
                                    <div className="article-subtitle">A user-friendly lighting system of a standard hotel room that offer guests home-like experience.</div>
                                    <div className="article-subtitle">UX Design</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>
                <article>
                    <Link to="/work/boardingpass">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00BoardingPass.png"} alt=" "/>
                            <div className="overlay" id="imgBoardingPass">
                                <div className="article-title">
                                    <div>The Boarding Pass</div>
                                    <div className="article-subtitle">A redesign project of the paper boarding pass to simplify and organize needed information in a clearer hierarchy.</div>
                                    <div className="article-subtitle">UX/UI Design </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>
        </section>
    </>)}


export default DesignerPanel;

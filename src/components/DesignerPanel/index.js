import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Link ,
    Switch,
    Route
} from "react-router-dom";

import Fade from 'react-reveal/Fade';
import WorkCard from '../WorkCard'
import WorkCardWithSub from '../WorkCardWithSub'




function DesignerPanel (props) {
    
    return (<>
                {/* <div className="divider"></div> */}
                <WorkCard url='/work/IoT' imgUrl='/images/IoT/mockup_multiscreens.png' name='An IoT-based smart city infrastructure management tool' tagline='Improve the usability of IoT network in real-world contexts.' description='User Research + UX Design' labels={['IoT', 'SaaS', 'Web Design', 'Management Tool','Data Visualization', 'information navigation', 'contextual inquiries', 'usability testing']} bgColor="#f8f8f8" tColor="#0f0f0f"/>
                
                <WorkCard url='/work/materialbank' imgUrl='/images/MaterialBank/mockupp.png' name='Material Bank' tagline='A website that helps designers find the materials they need, learn CMF and get inspired.' description='User Research + UX Design' labels={['web design', 'information findability', 'data visualization', 'usability testing']} bgColor="#f8f8f8" tColor="#0f0f0f"/>

                <WorkCard url='/work/readwithme' imgUrl='/images/D00ReadwithMe.png' name='ReadwithMe' tagline='A web application that provides afterschool English reading guidance and instructions to middle school students.' description='User Research + Product Design + Instructional Design' labels={['mobile', 'web application', 'gamification', 'design for behavior change']} bgColor="#f8f8f8" tColor="#0f0f0f"/>
    
       
                <Fade bottom>
        <div className="work_wrapper">
            <div className="section-title-container">
                <h6>Other projects that I did for learning.</h6>
            </div>
            
            <div className="cards show">
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
                <article>
                <Link to="/others">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/others/12.png"} alt=" "/>
                            <div className="overlay" id="imggraphic">
                                <div className="article-title">
                                    <div>Graphics, Illustrations & Photographs</div>
                                    <div className="article-subtitle">Training my muscle for visual communication.</div>
                                    <div className="article-subtitle">UX/UI Design </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article>

            </div>
        </div>
        </Fade>
                

    </>)}


export default DesignerPanel;

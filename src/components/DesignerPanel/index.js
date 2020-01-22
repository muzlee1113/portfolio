import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Link ,
    Switch,
    Route
} from "react-router-dom";

import Fade from 'react-reveal/Fade';
import WorkCard from '../WorkCard'
import WorkSmallCard from '../WorkSmallCard'





function DesignerPanel (props) {
    
    return (<>
                {/* <div className="divider"></div> */}
                <WorkCard url='/work/IoT' imgUrl='/images/IoT/mockup_multiscreens.png' name='An IoT-based smart city infrastructure management tool' tagline='A case study on how I designed a tool that helps lighting infrastructure administrators to control smart street lights energy-efficiently, accurately and easily on different occasions.' description='User Research + UX Design' labels={['Shipped','work project','IoT', 'Web Design', 'interaction design','Management Tool']} bgColor="#f8f8f8" tColor="#0f0f0f"/>
                
             
                <WorkCard url='/work/nightkick' imgUrl='/images/nightkick/mockup_cover.png' name='Nightkick' tagline='A mobile app and modular wearable to help people feel safer when walking alone after dark.' description='User Research + UX/UI Design' labels={['school project','Mobile Design', 'Wearable', 'Crowd-sourced']} bgColor="#f8f8f8" tColor="#0f0f0f"/>
                <WorkCard url='/work/photome' imgUrl='/images/mockup_photome.png' name='PhotoMe' tagline='A mobile app that empowers others to create satisfactory portraits for you.' description='User Research + UX/UI Design' labels={['individual project','mobile app Design', 'interaction design']}  bgColor="#f8f8f8" tColor="#0f0f0f"/>

                {/* <WorkCard url='/work/materialbank' imgUrl='/images/MaterialBank/mockupp.png' name='Material Bank' tagline='A website that helps industrial designers search and navigate materials to find the right one and get inspired.' description='User Research + UX Design' labels={['work project','Web Design', 'Information Findability', 'Data Visualization']} bgColor="#f8f8f8" tColor="#0f0f0f"/> */}


    
       
                <Fade bottom>
        <div className="work_wrapper">
            <div className="section-title-container">
                <h6>More projects.</h6>
            </div>
            
            <div className="cards show">
           
           
            <WorkSmallCard url='/work/sw' imgUrl='/images/sw_mockup.png' name='Seattle Works' tagline='A Web redesign practice for clearer information hierarchy and better visual communication.' description='UX/UI Design' labels={['school side project','Web Redesign', 'Visual Communication', 'IA']} bgColor="#E2FAF7" tColor="rgba(0,0,0,0.8)"/>
            <WorkSmallCard url='/work/specs' imgUrl='/images/mockup_specs.png' name='Specs' tagline='A Figma plugin that helps UX/UI designers specify their designs and translate them into engineering language.' description='UX/UI Design + Development' labels={['Shipped','individual project', 'interaction design','design tools',]} bgColor="#D4E7FF" tColor="rgba(0,0,0,0.8)"/>
            <WorkSmallCard url='/work/materialbank' imgUrl='/images/mb_mockup.png' name='Material Bank' tagline='A website that helps industrial designers search and navigate materials to find the right one and get inspired.' description='User Research + UX/UI Design' labels={['work project','Web Redesign','Product Design', 'Information Findability']} bgColor="#FDF6F3" tColor="rgba(0,0,0,0.8)"/>
            {/* <WorkSmallCard url='/work/photome' imgUrl='/images/D00Photome.png' name='PhotoMe' tagline='A mobile app that empowers others to create satisfactory portraits for you.' description='User Research + UX/UI Design' labels={['individual project','mobile Design', 'interaction design']} bgColor="#FFF4F5" tColor="rgba(0,0,0,0.8)"/> */}
            <WorkSmallCard url='/work/weather' imgUrl='/images/D00Weather.png' name='Weather' tagline='Alerts users to weather changes that will disturb their intended activities.' description='User Research + UX/UI Design' labels={['individual project','mobile app Redesign', 'interaction design','notification',]} bgColor="#CBD6E5" tColor="rgba(0,0,0,0.8)"/>
            {/* <WorkSmallCard url='/work/readwithme' imgUrl='/images/D00ReadwithMe_sqr.png' name='ReadwithMe' tagline='A web application that provides afterschool English reading guidance and instructions to middle school students.' description='User Research + Product Design' labels={['work project','mobile Design', 'gamification']} bgColor="#EEF1F3" tColor="rgba(0,0,0,0.8)"/>
        */}
                
               
             
                {/* <article>
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
                </article> */}
                {/* <article>
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
                    
                </article> */}
                {/* <article>
                <Link to="/others">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/others/12.png"} alt=" "/>
                            <div className="overlay" id="imggraphic">
                                <div className="article-title">
                                    <div>Graphics, Illustrations & Photographs</div>
                                    <div className="article-subtitle">Training my muscle for visual communication.</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </article> */}

            </div>
        </div>
        </Fade>
                

    </>)}


export default DesignerPanel;

import React, { useEffect } from "react";
import Fade from 'react-reveal/Fade';
import WorkCard from '../WorkCard'
import WorkSmallCard from '../WorkSmallCard'
import projects from '../projects.json'




function DesignerPanel (props) {
    
    return (<div className="featureWorkerContainer">
                {/* <div className="divider"></div> */}
                {
                    projects.map((project,i)=>{
                        if (i<4){
                            return <WorkCard project={project} />
                        } 

                    })
                }
       
                <Fade bottom>
        <div className="work_wrapper">
            <div className="section-title-container">
                <h6>More projects.</h6>
            </div>
            
            <div className="cards show">
                {
                    projects.map((project,i)=>{
                        if (i>=4){
                            return <WorkSmallCard project={project} />
                        } 

                    })
                }
           {/* <WorkSmallCard url='/work/photome' imgUrl='/images/mockup_photome_sm.png' name='PhotoMe' tagline='A mobile app that helps others to capture a better you.' description='For portrait-lovers' labels={['individual project','mobile', 'interaction design', 'visual design']} bgColor="#FFF4F5" tColor="rgba(0,0,0,0.8)"/>
            <WorkSmallCard url='/work/outbreak' imgUrl='/images/outbreak.png' name='Data Viz of National Enteric Outbreaks' tagline='A website that guide people explore and learn the patterns of enteric disease outbreaks in the US.' description='For general public' labels={['school project','data visualization', 'web design & dev']} bgColor="#F0F8FC" tColor="rgba(0,0,0,0.8)"/>
            <WorkSmallCard url='/work/specs' imgUrl='/images/mockup_specs.png' name='Specs' tagline='A Figma plugin that helps designers specify their designs and translate them into engineering language.' description='For designers' labels={['individual project', 'design sprint', 'prototyping with code','interaction design']} bgColor="#F0EDF6" tColor="rgba(0,0,0,0.8)"/>
            <WorkSmallCard url='/work/nightkick' imgUrl='/images/nightkick.png' name='Nightkick' tagline='A mobile app and modular wearable to help people feel safer when walking alone after dark.' description='For Seattle citizens' labels={['school project','Mobile', 'Wearable', 'Crowd-sourced']} bgColor="#CFDBFF" tColor="rgba(0,0,0,0.8)"/> */}
           
            {/* <WorkSmallCard url='/work/materialbank' imgUrl='/images/mb_mockup.png' name='Material Bank' tagline='A website that helps industrial designers search and navigate materials to find the right one and get inspired.' description='User Research + UX/UI Design' labels={['work project','Web Redesign','product thinking 0-1', 'Information Findability']} bgColor="#FDF6F3" tColor="rgba(0,0,0,0.8)"/> */}
          

            </div>
        </div>
        </Fade>
                

    </div>)}


export default DesignerPanel;

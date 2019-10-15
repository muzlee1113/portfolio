import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import ImageModal from '../../components/ImageModal'
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"

// function App() {
  
//     return (
//       <ButtonToolbar>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>
  
        
//       </ButtonToolbar>
//     );
//   }

class IoT extends React.Component{
    
    state={
        modalShow:false,
        // setModalShow:false,
        url:"",
        
    }
    
    triggerModel=(url)=>{
        console.log("hello from the trigger model function")
        console.log(url)
        this.setState({
            url: url,
        },()=>{
            this.setState({
                modalShow: true
            })
        })
    }
    render(){
        // const [setModalShow] = React.useState(false);

        return (<>
        <ScrollToTopOnMount />
            <div className="project_container">
                <section id="list-item-0" className="project_head">
                    <h1>IoT-based city infrastructure management tool</h1>
                    <h3>Improve the usability of the IoT network in real-world contexts.</h3>
                    <div className="project_info">May - July, 2019, Work Project, shipped in August.</div>
                    </section>
                </div>
            <div className="project_separator_transparent">
                <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/headImg.png"}/>
            </div>
            <div className="project_container">  
                <section className="project_body">  
                    <h2>BACKGROUND</h2>
                    <h6>Client Name</h6>
                    <p><a href="h6tp://www.szxylg.com">新阳蓝光 | Xingyang Languang</a> is a smart street lights and IoT sensors provider that aims to optimize energy efficiency and decision intelligence for cities, commercial and office parks.</p>
                    <h6>Project End Goal</h6>
                    <p>To improve the usability of the back-stage management tool of the client’s products which serve the IoT-based city infrastructure.</p>
                    <h6>My Role</h6>
                    <p>I was the only UX designer in the team. I pitched in at about midway of the research phase. I worked with the product manager in an iterative cycle of user interviews, rapid prototyping and heuristics evaluation. Eventually, I worked alongside two visual designers to deliver the interactive high-fidelity prototypes to the development team. I stopped working on the project as the websites started to be built.</p>
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/team.jpg"} />
                    <p className="project_caption" style={{ "textAlign": "center" }}>Me & My Teammates</p>
    
                </section>
                <section id="list-item-2" className="project_body">
                    <h2>Research</h2>
                    <h5>Who are our users and what are the constraints?</h5>
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/deliver.jpg"} />
                    <p className="project_caption" style={{ "textAlign": "center" }}>I was delivering my findings to the project team.</p>
                    <p>To better understand our end users, I talked with managers and officers in a office park and also administrators from the department in charge of city sewage and light infrastructure. Combining with the knowledge from previous research, I was able to see the overall structure of the organization and how people actually work there.</p>
                    <h6>Complex User Groups and Various Unmet Needs</h6>
                    <p>The biggest challenge we face when trying to define the users is that we are so far away from them. We worked for the client who worked for the city or park which will eventually implement the system. And normally, the organizations who are interested in IoT are big and complicated. After research, we defined that our users are people in these five different roles with various needs and goals.</p>
                    
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/user_role_need.png"} />   
                    <p>Then we prioritized the jobs to be done (JTBD) and decided that, for this version, we were going to focus on helping the <b>system administrator</b> of the department related to infrastructure, especially those taking care of the light system and environmental issues (air & water).</p>
                    
                    <h6>Mismatch of System Models and User Mental Models</h6>
                    <p>IoT system consists of various hardwares, softwares, communication channels, the cloud platform and cloud applications. It is complex and daunting. To create a better cloud application, I spent a lot of time talking with engineers and developers, to understand the purposes, functionalities and limitations of the devices.</p>
                    
                    <p>To my surprise, I found that many devices were not working in the ways as I thought it would be.</p>
                    
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/limitation.png"} />   
                    <p className="project_caption">For example, the street light itself does not contain a light sensor. The light sensors work independently, sending data to the cloud. It depends on the cloud application to process  sensor data, calculate and send commands to the street lights to control them according to the changes of ambient light. Moreover, the street light works according to ‘a 24-hour clock’. Once the application sends a command, for example, asking it to turn on at 6:00 am, the street light will maintain its status (on or off) now until the time of the internal clock reaches the first 6:00 am.</p>
                    <p>The mysterious system images of the devices are so different from user mental models and thus created huge obstacles in their use. Also, they created a lot of technical challenges in implementation. </p>
                    </section>
                    
                    
                    <section>
                        <h2>Design Problems</h2>
                        <h5>What are the actionable problems?</h5>
                        <p>To move from general knowledge to actionable items, I led a testing on existing website by inviting colleagues from different teams to play the role of a system administrator of the Nanshan District, and complete tasks we assigned according to the users’ daily tasks we learned from research. You can read <a href="https://docs.google.com/document/d/1Wzhgqrxo7YtJaYprwnFdA7flDMVM8VVzVDO9i_Pwb1Y/edit?usp=sharing">the English version of the script here.</a></p>
                        <p>After several role-playing walkthroughs, I finally located the following problems that I can take actions to:</p>
                        <ul>
                            <li><b>#1</b> Users cannot grasp the information of the dashboards at a glance;</li>
                            <li><b>#2</b> Users are not satisfied with a single-page notification center when they want to keep track of anomalies and take actions;</li>
                            <li><b>#3</b> Users are unable to navigate, zoom in and out the map view easily for both the overview and details;</li>
                            <li><b>#4</b> Single-light real time control does not fit with the user working habits and the system’s end goal;</li>
                        </ul>
                        
                    </section>     
                    
             
                
    
               
    
       
                <section id="list-item-3" className="project_body">
                    <h2>#1 Design Problem | Data visualization</h2>
                    <h5>How can we help users to grasp the status of the system at a glance?</h5>
                    <p>In the interview, I noticed that administrator's daily workflow involves three kinds of data</p>
                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/3_types_of_data.png"} />  
              
                    <h6>① Overview</h6>
                    <p>As shown in the quotes, people often walked around the areas they in charge or checked the monitors, went through the history of data, and compared with others or some benchmarks to evaluate whether the system is healthy or not. Similarly, providing <b>real-time snapshot</b> of the system status, <b>historical records</b> and <b>comparisons</b> on the dashboards can help users to quickly grasp the overview. Thus, I tried to include all these three perspectives in the data visualization.</p>
                    <p>So I started with low-fidelity prototypes and test them with my colleagues from administrative team as an alternative to real users since they have the most similiar mindset. I asked them to sort the graphs according to importance, and point out the ones they could not understand.</p>
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/testing_vis.gif"} />
                    <p className="project_caption">This is a clickable testing page I created with Axure. The tree maps on the left are the categories these graphs belong to including energy consumption data, quantity data and device type data. The graphs are drafted from all the three perspectives I mentioned above.</p>
                    <p>Based on people’s reaction. I delivered four dashboards: one for all devices, which is at the homepage of the application; and others are for smart street lights, smart manhole covers and environment sensors. </p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/street_light_dashboard.png"} />   
                    <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/street_light_dashboard_move.gif")}>Click to watch it move.</Button></div>
                    <p className="project_caption">This is the dashboard for street lights. I created seven different variations and finally settled down on this one since it puts emphasis on snapshot of lighting in the area and allows users to compare among areas and across time.</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/homepage_dashboard.png"} /> 
                    <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/homepage_dashboard_move.gif")}>Click to watch it move.</Button></div>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/env_sensor_dashboard.png"} /> 
                    <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/env_sensor_dashboard_move.gif")}>Click to watch it move.</Button></div>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/manhole_cover_dashboard.png"} /> 
                    <div className="image_model_link_container"><Button variant="link" onClick={() => this.triggerModel("/images/IoT/manhole_cover_dashboard_move.gif")}>Click to watch it move.</Button></div>
                    <p className="project_caption">These are the other dashboards. The first one is on homepage. The visualization here focuses on showing the general status of the system. The second is dashboard for environmental sensors and the last for smart manhole covers.</p>
    
                    <p>To sum up, to show real-time status, I used big numbers, pie charts (especially for those numbers which are too big to make sense) and heatmaps, and put emphasis on abnormal areas on the map. For history, I used run charts. For comparison among areas, heatmap and ranking are useful. </p>

                    <h6>② Anomalies</h6>
                    <p>In the interview, participants kept mentioning how they checked on device breakdown or abnormal data in their daily work. They wanted to know what is going wrong, and they sought for more information, and guidance on how to bring them back to normal. So to feed this need, creating a better notification system is with high priority (this is described in the latter part). Moreover, we need to improve the dashboards to highlight abnormal data. So I worked with PM and engineers to define anomalies for different data and worked with visual designers on how they should be displayed.</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/color_legend_icon.png"} />
                    <p className="project_caption" style={{ "textAlign": "center" }}>Icons credited to visual and graphic designer Shiguang Yang.</p>
                    <p>On the left are the color legends I created based on devices' data set and national standards; On the right are the icons indicating various device status.</p>

                    <h6>③ Details</h6>
                    <p>Sometimes users did go out to check on a specific device, mostly when something went wrong. Therefore, I linked alerts and abnormal area on heatmap with the related device’s detailed information. </p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/anomaly_to_detail.gif"} /> 
                    <p className="project_caption">Here is an example of how users are able to navigate to detailed page of a specific device from dashboard map. The detailed page provides general information of the device, real-time data and also logs in forms of table and graph.</p>
                    
                </section>

                <section id="list-item-4" className="project_body">
                    <h2>#2 Design Problem | Interaction Design</h2>
                    <h5>How can we alert users to the abnormal data and help them fix them?</h5>
                    <p>As I mentioned before, users care about anomalies, since they indicate problems to be fixed. However, only noticing the problem is not enough. Users want ways to actually solve the problem. </p>
                    <p>I divided the process of alert into <b>three phases</b>: <b>notice</b>, <b>understand</b>, <b>act</b>. The biggest gap doesn’t lie between the anomaly and the user’s perception, but between perception and action.</p>
                    <img alt='three phases of alert design' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/three_phases.png"} />
                    <p className="project_caption">A sketch of the three phases of alert design and the wireframes of their application in the website.</p>

                    <p>Therefore, when designing the notification system, I put a lot of efforts into facilitating people to move step by step from problems to solutions: </p>
                    <h6>1. Notice Phase: Proactively Alert Users to Problems</h6>
                    <p>For the notice phase, the application alerts users to anomalies in two ways: pop-up modals at the corner and a blinking dot on the notification icon, depending on their urgency. I classified the alarms into two levels to reduce possible distractions when too many alerts show up. In the modal, users are allowed to choose whether they want to dive into the problem right now.</p>
                    <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/alert_1.gif"} />
                    <h6>2. Understand Phase: One Click for Problem Details</h6>
                    <p>If they want to know more, the ‘more information’ button will provide users with brief information and pin the problematic device on the map. These data can help the users understand the situation and possible reasons behind, so that they can make sound decision. </p>
                    <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/alert_2.gif"} />
                    <h6>3. Act Phase: Ease the Workflow with Step-by-step Instructions</h6>
                    <p>This is the phase I encountered the biggest challenge. Since how to solve the problem highly depends on the workflow of the organization. However, the old workflows do not fit into the new context where the management tool plays a new role in coordinating all the departments and people. Therefore, I talked to administrators of some of the departments and generalized a basic workflow, and then I drafted a roadmap which finally turned into the design.</p>
                    <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/workflow.png"} />
                    <p className="project_caption">Here is the workflow we defined from receiving an alert to lifting an alert. It involves at least three departments/groups in the organization: the department of the system administrator, on-site technicians and the department in charge of hardwares.</p>
                    <p>In the previous phase, users can easily find an button that leads them to the page where they can kick off the procedure to deal with the problem.</p>
                    <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/alert_3.gif"} />
                    
                </section>
                <section id="list-item-5" className="project_body">
                    <h2>#3 Design Problem | Information Navigation & Findibility</h2>
                    <h5>How can we help users to navigate information at various scales?</h5>
                    <p>There are three important components in the map view of monitor and control hub: a map showing devices with icons, a list of devices in the right drawer, filters of areas and device types on the top. During the role-play walkthroughs, I found that: </p>
                    <Container>
                        <Row style={{alignItems: "center"}}>
                            <Col md="12" lg="6"><img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/testing_problems_1.PNG"} /></Col>
                            <Col md="12" lg="6">

                          
                                    <p><small>😟1 When users zoomed in and out, scrolled up and down the map, device list on the right changed accordingly, showing only the devices they could see on the screen. However, it didn’t change the filters on top of the page, so users easily <b>felt lost</b>.</small></p>
                            </Col>
                        </Row>
                            <Row style={{alignItems: "center"}}>
                            <Col md="12" lg="6"><img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/testing_problems_2.PNG"} /></Col>
                            <Col md="12" lg="6">
                                
                                    <p><small>😟2 When users applied filters, the map this time <b>didn’t move accordingly</b> to where they can see all devices. So sometimes suddenly nothing was on the map.</small></p>
                            </Col>
                        </Row>
                        <Row style={{alignItems: "center"}}>
                            <Col md="12" lg="6"><img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/testing_problems_3.PNG"} /></Col>
                            <Col md="12" lg="6">

                                    <p><small>😟3 Once they found a device they were interested in, they clicked to see the details, but unexpectedly <b>the website</b> sent them to another page, and when they go back, all <b>the filters they had set disappeared.</b></small></p>
                            </Col>
                        </Row>
                    </Container>
                    <h6>🙂1&2 Align interactions with users' expectations</h6>
                    <p>When users apply filters, they expect to see the results. When they drag or scroll the map, they are looking for devices outside the viewport. They map and list should work according to users' expectations. So I redesigned the logics as follow:</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/logics.png"} />
                    <p className="project_caption" style={{ "textAlign": "center" }}>The New Logics</p>

                    <p>Since users have less freedom selecting filters compared with controlling the viewport of the map (zooming, scrolling, dragging), it is actually good for the users to specify the range or group of devices they want to control or view.</p>

                    <h6>🙂3 Use drawer to provide seamless experience</h6>
                    <p>In the new design, device detailed views are moved to the drawer on the right of the page. So that when users click a device, the drawer display the detailed information with a slide-in transition. The drawer allows users to view the map and the device information at the same time and slide-in effect clarifies information hierarchy.</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/scale.gif"} />
                    <p className="project_caption" style={{ "textAlign": "center" }}>This is a screen record of the alpha version. There were still some bugs here on the transition.</p>
                    <p>Moreover, I spent a lot of time figuring out the affiliations between different devices and provided links to help users better navigate to and fro from list to detailed view, and from one detailed view to another.</p>

                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/IoT/scale2.png"} />
                    <p className="project_caption" style={{ "textAlign": "center" }}>Users can zoom in to details and zoom out for overview; they can also move parallelly to other related devices.</p>

                    
                </section>
                <section id="list-item-6" className="project_body">
                    <h2>#4 Design Problem | Match System Image with User Mental Model</h2>
                    <h5>How can we improve the way how users control the street lights to be simple and intuitive?</h5>
                    <h6>How do users actually work in real life?</h6>
                    <p>In the user interview, I found that how users set the working time of street lights was different from what I had thought. </p>
                    

                    <Container>
                        <Row>
                            <Col style={{textAlign:"center", justifyContent:"center"}}  md="12" lg="4">
                                <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/habit1.PNG"} />
                                <p className="project_caption">1. Bulk Control</p>
                            </Col>
                            <Col style={{textAlign:"center"}}  md="12" lg="4">
                                <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/habit2.PNG"} />
                                <p className="project_caption">2. Three Occasions</p>
                            </Col>
                            <Col style={{textAlign:"center"}} md="12" lg="4" >
                             <img alt='three phases of alert design' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/habit3.PNG"} />
                             <p className="project_caption">3. Set Plan Like Booking A Hotel Room</p>
                            </Col>
                        </Row>
                    </Container>
                    <div style={{marginTop: "1em", marginBottom: "2em"}}>
                        <p className="project_caption">1. Users control street lights <b>by groups</b>: street lights on a street, in a district, around a building, at an intersections</p>
                        <p className="project_caption">2. There are <b>three kinds of controls</b>: </p>
                        <ul>
                            <li className="project_caption">· Routine settings (stable; applied to large scale) </li>
                            <li className="project_caption">· Special settings (set up in advance and take effect for relatively short amount of time; applied to relatively small scale)</li>
                            <li className="project_caption">· Temporary settings (emergent and take effect for a short time; applied to small scale. </li>
                        </ul>
                        <p className="project_caption">3. When setting, users <b>start</b> from the time to turn on the lights (first day afternoon) and <b>stop</b> at the time to turn off the lights (next day morning) and they would rather use <b>relative time</b> (hours before or after sunrise or sunset) than absolute time (eg. 6:00 pm)</p>
                    </div>
                   
                    <p>However, in the later role-playing test, when asked to complete tasks that involve bulk control and multiple settings, the old website is extremely troublesome. </p>
         
                    <h6>Redesign system image and interface according to user habits</h6>
                
                        <p><b>1. Selected Cart</b>: allow users to select group of devices by adding lights in an area into a selected ‘cart’ and by dragging on the map using the Hand tool; user can apply advanced filters in the Selected Cart to further narrow down the range of their control; </p>
                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/bulkControl.gif"} />
                        <p className="project_caption" >Users can add lights into selected card and apply more filter to select the ones they want to control. This is a screen record of the actual website.</p>
                        <p><b>2. Settings: </b> allow users to set work hours in the old way: from 12 p.m. to 12 p.m., using relative time.</p>
                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/lightControl.gif"} />
                        <p className="project_caption" style={{ "textAlign": "center" }}>The special strategy setting page.</p>
                        <p><b>3. Provide Setting Guidances for Different Occasions</b>: guide users to configure the routine strategies when the system sets up, add on special working hours if need be and temporarily control one or groups of lights within some time in the monitor and control hub. </p>
                  
                </section>
                <section id="list-item-7" className="project_body">
                    <h2>TO DOS</h2>
                    <p>There are several parts I would have dived deeper into if had given more time.</p> 
                    <h6>Design for Behavior Change</h6>
                    <p>I have been very interested in this topic and I saw a great opportunity here to design for more efficient energy use. I proposed a possibility to show users how much energy they will use after they set the working time on the strategy setting page, and provide an option to optimize the settings by drawing in analysis of traffic. My company does have the technology to analyze traffic using video footage from the CCTV. This feature would serve as a nudge to environmentally friendly behavior. </p>
                    <h6>Dashboard as Enchance</h6>
                    <p>Second is the to design dashboard as entrance rather than data display. In testing, I realized that many users didn't pay much attention to the dashboards. They spent less than a few seconds on them and jumped to the page they wanted right away. Some users clicked on the graphs and charts, longing to know more details. I would have shifted my focus to showing numbers, graphs and charts as doors to more detailed information and analyses, so that the design question would be how can we better show the users the diiferent doors and lead them to the right door they want. Personalized dashboard according to visit history might be a good solution.</p>
                </section>
                <section id="list-item-8" className="project_body">
                    <h2>TAKEAWAYS</h2>
                    <h6>Design with Limitations</h6>
                    <p>The biggest lesson I learned from this project is to understand and get used to limitations in my design. Just like painting, an important thing to do is to understand your tools and materials. In addition to learning from users, we should also learn from developers and engineers to understand the machine and data so that we won't subject our design to the whim of our naive mind.</p>
                </section>
            </div>
           
            <ImageModal
              show={this.state.modalShow}
              onHide={() => this.setState({modalShow:false})} 
              url={this.state.url}
            />
            <div className="scrollby" style={{position: "fixed", right: "3vw", bottom: "5vh"}}>
                <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 80"
                    className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                    <li className="uk-l"><a href="#list-item-0">Top</a></li>
                    <li className="uk-l"><a href="#list-item-1">Background</a></li>
                    <li className="uk-l"><a href="#list-item-2">Research</a></li>
                    <li className="uk-l"><a href="#list-item-3">#1 Data Visualization: dashboards</a></li>
                    <li className="uk-l"><a href="#list-item-4">#2 Interaction Design: notification</a></li>
                    <li className="uk-l"><a href="#list-item-5">#3 Information Navigation: map</a></li>
                    <li className="uk-l"><a href="#list-item-6">#4 System Image: street light control</a></li>
                    <li className="uk-l"><a href="#list-item-7">To Dos</a></li>
                    <li className="uk-l"><a href="#list-item-8">Takeaways</a></li>
                </ul>
            </div>
    
        </>)
    }
    

}



export default IoT;

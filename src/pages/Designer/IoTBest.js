import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import ImageModal from '../../components/ImageModal'
import BackToTopBtn from "../../components/BackToTopBtn"
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'

const contents = [
    {
        id: "#overview",
        name: "Project Overview"

    },
    {
        id: "#intro",
        name: "Problem"

    },
    {
        id: "#solution",
        name: "Solution"

    },
    {
        id: "#research",
        name: "Research"

    },
    {
        id: "#syn",
        name: "Synthesize"

    },
    {
        id: "#ideate",
        name: "Ideate"

    },
    {
        id: "#design",
        name: "Design"

    },
    {
        id: "#evaluate",
        name: "Evaluate"

    },
    {
        id: "#deliver",
        name: "Final Design"

    },
    {
        id: "#todo",
        name: "To dos"

    },
    {
        id: "#take",
        name: "Takeaways"

    },
    {
        id: "#relate",
        name: "Related Work"

    },
]

const prev = {
    url: "",
    name: ""
}

const next = {
    url: "/work/sw",
    name: "Seattle Works"
}


class IoTBest extends React.Component {

    state = {
        modalShow: false,
        hide: true,
        hide2: true,
        hide3: true,
        hide4: true,
        // setModalShow:false,
        url: "",

    }

    toggleHiddenContent = (id) => {
        this.setState({
            [id]: !this.state[id]
        })
    }

    triggerModel = (url) => {

        this.setState({
            url: url,
        }, () => {
            this.setState({
                modalShow: true
            })
        })
    }
    render() {
        // const [setModalShow] = React.useState(false);

        return (<>
            <ScrollToTopOnMount />


            <div className="project_head_container">

                <section className="project_head">
                    <h1>The street lighting control system of a smart city infrastructure management tool</h1>
                    <h3>A case study of how I designed a tool that helps lighting infrastructure administrators to control smart street lights energy-efficiently, accurately and easily on different occasions.</h3>
                    <div className="project_info">Work project. The full project lasted more than 3 months (May - July 2019) and shipped in September</div>
                </section>

            </div>


            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/IoT/headImg.png"} />
            </div>

            <div className="project_overview_container" id="overview">
                {/* <Container> */}
                <Row>
                    <Col sm={12} md={6}>
                        <div className="project_overview_title">Background</div>
                        <div className="project_overview_content">The team that I interned on was commissioned by a smart device manufacturer to redesign a web-based smart city infrastructure management tool. The tool was supposed to be used for managing smart devices related to city lighting, sewage, and environmental monitoring. This is a case study of one of the features that I designed specifically for lighting infrastructure administrators to control various smart street lights.</div>

                    </Col>
                    <Col></Col>
                    <Col sm={4} md={2}>

                        <div className="project_overview_title">My Role</div>
                        <div className="project_overview_content">Research</div>
                        <div className="project_overview_content">Product Design</div>
                        <div className="project_overview_content">Interaction Design</div>
                        <div className="project_overview_content">Prototyping</div>
                        <div className="project_overview_content">Usability Testing</div>
                    </Col>
                    <Col sm={4} md={3}>

                        <div className="project_overview_title">Team</div>
                        <div className="project_overview_content">One Product Manager</div>
                        <div className="project_overview_content">Two Visual Designers</div>
                        <div className="project_overview_content">Four Developers</div>
                    </Col>

                </Row>
                {/* </Container> */}
            </div>
            <div className="project_overview_container">
                <div className="project_overview_title">Design Process</div>


                <Row>
                    <Col xs={4} md={2}>


                        <img src={process.env.PUBLIC_URL + "/images/leftStep.png"} />
                        <div className="project_overview_content py-1"><b>Research</b></div>
                        <div className="project_overview_content">Contextual inquiry</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />
                        <div className="project_overview_content py-1"><b>Synthesize</b></div>
                        <div className="project_overview_content">User flow</div>
                        <div className="project_overview_content">Problem space</div>

                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />

                        <div className="project_overview_content py-1"><b>Ideate</b></div>
                        <div className="project_overview_content">Brainstorming</div>
                        <div className="project_overview_content">Sketching</div>
                        <div className="project_overview_content">Feasibility analysis</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />
                        <div className="project_overview_content py-1"><b>Design</b></div>
                        <div className="project_overview_content">Wireframing</div>
                        <div className="project_overview_content">Interaction design</div>
                        <div className="project_overview_content">Hi-fi prototyping</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/centerStep.png"} />

                        <div className="project_overview_content py-1"><b>Evaluate</b></div>
                        <div className="project_overview_content">Usability testing</div>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={process.env.PUBLIC_URL + "/images/rightStep.png"} />

                        <div className="project_overview_content py-1"><b>Deliver</b></div>
                        <div className="project_overview_content">Hi-fi prototypes</div>
                        <div className="project_overview_content">Design specs</div>

                    </Col>
                </Row>
            </div>




            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">


                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;top: #scrollstart">

                                <ul className="unset-Sticky" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">
                                    <div><a href={prev['url'] ? (prev['url']) : ('/')} className="project_brief_content"><span uk-icon="icon:triangle-left"></span>{prev['url'] ? ('prev project') : ('Home')}</a></div>
                                    <br />

                                    {contents.map((item) => <li className="uk-l project_brief_content"><a href={item.id}>{item.name}</a></li>)}
                                    <br />
                                    <div><a href={next['url'] ? (next['url']) : ('/')} className="project_brief_content">{next['url'] ? ('next project') : ('Home')}<span uk-icon="icon:triangle-right"></span></a></div>
                                </ul>


                            </div>
                        </div>
                    </Col>

                    <Col md={12} lg={9}>
                        <section className="project_body" id="intro">
                            <div id="scrollstart"></div>
                            <h2>Problem</h2>
                            <h5>Lighting infrastructure Administrators were given complex tools to control devices</h5>
                            <p>Here is the existing management tool for the administrators to control the highway light system. The problems of the tool are obvious:</p>
                            <ImageZoom
                                image={{
                                    src: '/images/IoT/existingtool.png',
                                    alt: '',
                                    className: 'project_illustration'
                                }}

                            />
                            <div className="project_caption  text-center">Here is a <a className="text_link" href="https://www.figma.com/proto/31wTxeoPe74AqBg83CWTB3/Highway-Light-Management-Tool?node-id=4%3A25&scaling=min-zoom">Interactive interface</a> I recreated with figma using the screenshots I took.</div>
                            <br />
                            <p>So the initial design question I raised was simple:</p>
                            <div className="project_quote">
                                <div className="project_separator_inner_wrapper_small">

                                    <p className="project_quote_text">How might we make the street light control process easier for lighting infrastructure administrators?</p>
                                </div>

                            </div>

                        </section>
                    </Col>
                </Row>
            </div>
            <div className="project_separator" id="solution">

                <div className="project_separator_inner_wrapper" >
                    <h2>Solution</h2>
                    <h5>Demos</h5>
                            <Row>

                                <Col xs={4}>
                                    
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/final_special_plan.gif',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                  


                                    <div className="project_caption text-center">Special lighting plan setting</div>
                                </Col>


                                <Col xs={4}>
                                   
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/final_single_control.gif',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />

                                    
                                    <div className="project_caption text-center">Temporary control of single device</div>
                                </Col>
                                <Col xs={4}>
                                  
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/final_bulk_control.gif',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />

                                   
                                    <div className="project_caption text-center">Temporary bulk control</div>
                                </Col>



                            </Row>
                </div>
            </div>
            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}></Col>
                    <Col md={12} lg={9}>
                    


















                            <section className="project_body" id="research">
                                <h2>Research</h2>
                                <h5>Why and how did administrators control the street lights?</h5>
                                <h6>Research Questions</h6>
                                <p>To understand the purposes of controlling the street lights and their typical workflows, I advocated strongly conducting user research to my PM. I eventually got the chance to connect with three administrators of the street lighting system and visited their office in person.</p>
                                <img className="project_illustration_extrasmall" src={process.env.PUBLIC_URL + "/images/IoT/contextual_inquiry.png"} />
                                <Container>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            {/* <div className="project_overview_title">Design Process</div> */}
                                            <div className="project_overview_content py-1"><b>Methods</b></div>
                                            <div className="project_overview_content">Contextual Inquiry</div>

                                        </Col>
                                        <Col xs={12} md={6}>
                                            <div className="project_overview_content py-1"><b>Participants</b></div>
                                            <div className="project_overview_content">2 Administrators of highway light infrastructure</div>
                                            <div className="project_overview_content">1 Manager of street lighting at an office park.</div>

                                        </Col>
                                        <Col xs={12} md={3}>
                                            <div className="project_overview_content py-1"><b>Interview Questions</b></div>
                                            <div className="project_overview_content "><a href="https://docs.google.com/document/d/1-DEKGzb4zCd3_96tjkcxM2nTRz1ZywvDGmD1vPf86bc/edit?usp=sharing" className="text_link">File Link</a> (translated to English from Chinese)</div>
                                        </Col>



                                    </Row>
                                </Container>

                            </section>



                            <section className="project_body" id="syn">
                                <h2>Synthesize</h2>
                                <h5>Different scenarios, different workflows, different purposes</h5>
                                <p>From the contextual inquiries, I found that why and how they control the lighting system can be classified into three scenarios that follow different workflows. However, the existing system didn't distinguish these types, let alone supporting their different needs.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/control_lighting.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <br />
                                <p>Based on the research finding, I reframed my design question to be:</p>
                                <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                        <p className="project_quote_text">How might we help administrators configure daily city lighting to achieve energy-saving goals and adjust the lighting on special occasions easily?</p>
                                    </div>

                                </div>
                            </section>


                            <section className="project_body" id="ideate">
                                <h2>Ideate</h2>

                                <h5>How might we help administrators to configure city lighting energy-efficiently and adjust lighting for special occasions easily?</h5>


                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/problemsolution_lightcontrol.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/idea.png',
                                        alt: '',
                                        className: 'project_illustration_medium'
                                    }}

                                />

                            </section>
                            <section className="project_body" id="design">
                                <h2>Design</h2>
                                <h5>User flows and Wireframes</h5>

                                <p>So I started with mapping the user flows of each scenario and how the new system was going to support each of the steps. I then wireframed the possible interfaces of the system.</p>
                                <h6>1. Day-to-day plan setup</h6>
                                <p>Since the most laborious part of the job was going to be done by the IoT system, the management tool only needs to expose enough information and give enough controls to the users so that they can trust the system and use the new feature. Therefore, the new user flow is mainly about checking information and options of the automation:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/daytoday.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <h6>2. Special plan setup</h6>
                                <p>To set up a special work plan the users need to put in applied dates, areas and define the special working hours.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/special.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <p>A specific challenge I faced in wireframing the setting interface is how to make the work plan setting interface more intuitive. I wireframed two ways to improve the experience: one is allowing users to click boxes on the bar chart to set luminosity; the other is using simple dropdown and inputs.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/workplan.png',
                                        alt: '',
                                        className: 'project_illustration_medium'
                                    }}


                                />

                                <p>Finally, I decided to first combine these two ways of settings and test the features in usability testing later.</p>
                                <h6>3. Temporary Control</h6>
                                <p>This was actually the most complicated user flow I dealt with since it involved challenges in improving information findability and retrieval. I started with a very simple user flow with two paths: looking for device(s) from a map and looking for device(s) froman alert.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/temporary_userflow.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <p>Later, when actually wireframing, I realized that the first path, looking for street lights from a map was a lot more complicated than I had thought, especially in the case when users want to control multiple devices. Therefore, I specified the user flow of bulk control:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/bulkcontrol/bulkcontrol_userflow.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                                <div className="project_caption text-center">Specification of the bulk control user flow</div>
                                <p>Later, I wireframed variations of the interfaces for each step including selecting groups of devices, retrieving and checking selected devices, narrowing down the list for control and getting control feedback.</p>


                                {this.state.hide4 ? (<>
                                    <div className="hiden_content_switch_container text-center">
                                        <button class="uk-button uk-button-secondary uk-width-1-1" onClick={() => this.toggleHiddenContent("hide4")}><span uk-icon="icon: search"></span> Click to See Detailed Exploration </button>
                                    </div></>) : (<>
                                        <div className="hiden_content_switch_container text-center">
                                            <button class="uk-button uk-button-secondary uk-width-1-1" onClick={() => this.toggleHiddenContent("hide4")}>Hide Detailed Exploration</button>
                                        </div>
                                        {/* ----------------hidden 👇---------------------- */}



                                        <li className="p-list">Select Devices</li>
                                        <p className="project_info">I ideated four ways to select multiple devices. Since administrators usually control lights by defined areas (administrative divisions), the 'selet-a-area' buttons will be useful for them. Moreover, multi-selection on map is the ideal way to select devices by undefined areas such as a intersection. So I decided to combine these two and used the tree diagram on special light plan set up where administrators want to apply a light plan to large and multiple areas.</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/select.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />



                                        <li className="p-list">Retrieve Selected Device</li>
                                        <p className="project_info">The questions of specifying the information retrieval process existed in where the "selected device" button should locate and where and how to display the selected device.</p>
                                        <p className="project_info">I wireframed four locations of the button. I finally decided on the last option since it was the most straightforward version and produced no ambiguity of its scope.</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/retrieve_button.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                        <li className="p-list">Check Selected Device</li>
                                        <p className="project_info">As for how to display selected devices, I created the following wireframes. We eventually decided to send users to a new page once user click 'view selected device' button on top to give more space for information display so that users can clearly check what are selected. In addition, a grouped table was proved to be the most efficient and clear way to display the selected devices.</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/retrieve_display.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                        <li className="p-list">Apply Advanced Filters</li>
                                        <p>For selecting street lights on map view, administrators can narrow down the scope by the area and road filters on map. However, they also want to specify types, luminance or other attributes of the lights. To support this, I included advanced filters in the selected device page. The problem is how to display various options and, at the same time, make sure that administrators know what are selected.</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/advancedFilters.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                        <p>The final version was coming from several iterations on how to show options and display applied filters.</p>

                                        <li className="p-list">Control Response</li>
                                        <p className="project_info">The administrators should be careful about adjusting city infrastructure settings. They need to know whether they have changed the setting successfully. Thus, I ideated are two ways of feedback.</p>

                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/feedback.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                        <p className="project_info">In the final wireframe, I combined and iterated from these two. </p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/IoT/bulkcontrol/response.png',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}

                                        />
                                        <li className="project_info">Firstly, an alert will pop up once they apply a new setting asking for confirmation.</li >
                                        <li className="project_info">After confirmation, a alert will show up indicating the process and the action button will gray out. </li>
                                        <li className="project_info">After applying the setting, a clear alert will show the number of successful settings with indicators of error and success on the selected device list to support trouble shooting. The button will then changes into 'redo' that allow users to rerun the action again.</li>



                                        {/* ----------------hidden 👆---------------------- */}
                                        <div className="hiden_content_switch_container text-center">
                                            <button class="uk-button uk-button-secondary uk-width-1-1" onClick={() => this.toggleHiddenContent("hide4")}>Hide Detailed Exploration</button>
                                        </div>
                                    </>)}
                                <p>Finally, I developed the wireframes for temporary control after the brainstorming:</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/temporary.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />
                            </section>
                            <section className="project_body" id="evaluate">
                                <h2>Evaluate</h2>
                                <h5>Usability Testing & Iterations</h5>
                                <p>After creating an interactive prototype, I conducted scenario-based usability testing with the administrators (<a href="https://docs.google.com/document/d/1Wzhgqrxo7YtJaYprwnFdA7flDMVM8VVzVDO9i_Pwb1Y/edit?usp=sharing" className="text_link">link of the usability testing tasks</a>). The studies meant to test:</p>
                                <li>whether the new features are learnable</li>
                                <li>whether the new interactions improve the efficiency of controls in different scenarios</li>
                                <li>whether users feel comfortable and confident when using the new tool</li>

                                <p>As it turned out, administrators really liked the new design, especially the temporary control features. There were some problems I discovered with the special plan settings which I later iterated on:</p>

                                <p>1. The visual hint was not strong enough to help users distinguish the day-to-day plan from special plans so I enhanced the difference by separating them into two sections. Also, the visualizations and briefs of the special plans on the table needed to be improved to help users distinguish different plans when scanning through.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/iterate_lighting_plan_dashboard.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />

                                <p>2. Administrators would like to first set the time to turn on the lights (first day afternoon) and then the time to turn them off (next morning), so I changed the order of the inputs. Also, setting by clicking the graph actually took a longer time and more clicks. Therefore, I got rid of this feature and used the bar chart only for work-plan settings.</p>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/iterate_lighting_plan_setting.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}

                                />

                            </section>

                            <section className="project_body" id="deliver">
                                <h2>Final Design</h2>
                                <h5>How I solved the problems</h5>
                                <p>Here is the final design and how it addressed each problem I discovered in the user research</p>
                                <h6>Day-to-day Plan and Special Plan Setup</h6>
                                <p></p>
                                <li>IoT supported configuration of day-to-day plan</li>
                                <li>Set special plans in advance that override the daily plan in a defined period</li>
                                <li>Flexible work hour setting relative to daylight and custom repeated cycle</li>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/light_control_final3.png',
                                        alt: '',
                                        className: ''
                                    }}

                                />
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/light_control_final4.png',
                                        alt: '',
                                        className: ''
                                    }}

                                />
                                <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/final_special_plan.gif")}>click here to watch the interaction (gif of hi-fi prototypes).</Button></div>
                                <h6>Temporary Control</h6>
                                <p></p>
                                <li>Quickly locate devices with map and filters</li>
                                <li>More flexible bulk controls</li>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/light_control_final1.png',
                                        alt: '',
                                        className: ''
                                    }}

                                />
                                <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/final_single_control.gif")}>click here to watch the interaction (gif of the website).</Button></div>
                                <ImageZoom
                                    image={{
                                        src: '/images/IoT/light_control_final2.png',
                                        alt: '',
                                        className: ''
                                    }}

                                />
                                <div className="image_model_link_container"><Button className="text_link" variant="link" onClick={() => this.triggerModel("/images/IoT/final_bulk_control.gif")}>click here to watch the interaction (gif of the website).</Button></div>
                                <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">

                                       
                                        <p className="project_quote_text">The new system was shipped in late September 2019 as part of the alpha product for more testing and improvement. With the new lighting control interfaces, administrators found the lighting plan configuration and device control process much shorter and easier. They also liked the flexibility of controling devices in group.</p>
                                    </div>

                                </div>
                               
                            </section>

                    </Col>
                </Row>
            </div>
                {/*                         
<div className="project_separator" id="navigation" style={{zIndex: "1000"}}>

    <div className="project_separator_inner_wrapper" >
        <h2>Final Design</h2>
        <h5>Navigation of the key pages that I worked on.</h5>
        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/final_v2.png"} />

      
    </div>
</div>                       
                             */}










                <div className="project_overall_container">
                    <Container>
                        <Row>
                            <Col md={12} lg={3}>
                            </Col>
                            <Col md={12} lg={9}>
                                <section id="todo" className="project_body">
                                    <h2>TO DOS</h2>
                                    <p></p>
                                    <h6>Design for Behavior Change</h6>
                                    <p>I would love to dive deeper into applying nudge theory in the design if I had given more time. I have been very interested in this topic and I saw a great opportunity here to design for more efficient energy use. I proposed a possibility to show users how much energy they will save after they choose to 'auto-optimize' the day-to-day lighting plan. This feature would serve as a nudge to environmentally friendly behavior. </p>



                                </section>
                                <section id="take" className="project_body">
                                    <h2>TAKEAWAYS</h2>
                                    <h6>Ask Questions and Learn from Everyone</h6>
                                    <p>IoT system is complex and daunting. I spent a lot of time talking with engineers and developers, asking "silly questions" to understand the purposes, functionalities, and limitations of the devices. By frequently raising questions, I not only learned every part of the system but also formed a reciprocal and supportive relationship with them, which was beneficial in cross-functional collaboration.</p>
                                    <h6>Design with Limitations</h6>
                                    <p>The biggest lesson I learned from this project is to understand and get used to limitations in my design. Just like painting, an important thing to do is to understand your tools and materials. We should also understand the machine and data so that we won't subject our design to the whim of our naive mind.</p>
                                    <h6>Make Intentional Decisions</h6>
                                    <p>Design specification is always about decision making and there should always be a reason behind every decision. When facing a tough choice, limitations, design requirements and insights from user research are always great references.</p>
                                    <h6>Work with ambiguity but always look for chances to check my assumptions</h6>
                                    <p>There are many assumptions I made during the ideation and design process. I kept a list of questions I had and looked for opportunities to get them answered by consulting or formal and informal usability studies.</p>
                                </section>
                                <section id="relate" className="project_body">
                                    <h2>Related Work</h2>
                                    <div><h5>Other things I did for this project</h5></div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                                        <h6>Notification Center</h6>
                                        <a className="text_link" href="/work/IoTNotification">see more</a>

                                    </div>

                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/notification.gif',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                                        <h6>Data Dashboards</h6>
                                        <a className="text_link" href="/work/IoTDashboard">see more</a>

                                    </div>
                                    <ImageZoom
                                        image={{
                                            src: '/images/IoT/dashboards.gif',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}

                                    />

                                </section>
                            </Col>
                        </Row>
                    </Container>



                </div>


                <ProjectPagination prev={prev} next={next} />

                <BackToTopBtn contents={contents} prev={prev} next={next} />
                <ImageModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    url={this.state.url}
                />


        </>)
        }
    
    
    }
    
    
    
    export default IoTBest;

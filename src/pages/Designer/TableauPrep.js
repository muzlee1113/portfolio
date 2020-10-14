import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'
import ProjectContentNav from '../../components/ProjectContentNav'

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
        id: "#approach",
        name: "Approach"
    },
    {
        id:"#impact",
        name:"Impact"

    },
    {
        id:"#take",
        name:"Takeaways"

    }, 
    {
        id: "#relate",
        name: "Related Work"

    },
]



class TableauPrep extends React.Component{
    
 

    render(){
         const pagination = this.props.pagination
        return (<>
            <ScrollToTopOnMount />
            <div className="project_head_container">
                <section className="project_head">
                    <h1>First 5 minutes in Tableau Prep</h1>
                    <h3>Improve the onboarding experience for new users.</h3>
                    <div className="project_info">June - September 2020, Work Project</div>
                </section>
            </div>
            <div className="project_separator_transparent">
                {/* <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/abstreet/cover.png"} /> */}
            </div>
            <div className="project_overview_container" id="overview">
                <Row>
                    <Col sm={12} md={7}>
                        <div className="project_overview_title">Background</div>
                        <div className="project_overview_content">Many first-time users of Tableau Prep did not come back for a second use. Usability Testings were conducted to identify problem areas and opportunities for improvement. The project was therefore initiated to tackle the problems discovered and bring about a delightful and engaging first-time experience to the new users. <u>Due to NDA, the piece will only give an overview of the project without exposing any details.</u></div>
                    </Col>
            
                    <Col sm={12} md={5}>
                        <div className="project_overview_title">Teammates</div>
                        <div className="project_overview_content">I worked with the product manager, user researchers, visual designers, techinical writers and developers on this projects and got inspiring feedback and huge supports from other UX designers and researchers from the Data Managerment Team and Onboarding Team.</div>
                    </Col>
                </Row>
              
                <div className="project_overview_title">My Contributions</div>
                <Row>
                    <Col sm={12} md={3}>
                        <ImageZoom
                            image={{
                                src: '/images/tableau/research.png',
                                alt: '',
                                className: 'project_illustration_small'
                            }}
                        />
                        <div className="project_overview_content text-center">Research</div>
                        <div className="p_small text-center">Pinpointed problems and Aha moments thru interviews and journey mapping; compared various onboarding features.</div>
                        
                    </Col>
                    <Col sm={12} md={3}>
                        <ImageZoom
                            image={{
                                src: '/images/tableau/design.png',
                                alt: '',
                                className: 'project_illustration_small'
                            }}
                        />
                        <div className="project_overview_content text-center">Design</div>
                        <div className="p_small text-center">Explored in-product fixes and onboarding features through rapid-prototyping</div>
                        
                    </Col>
                    <Col sm={12} md={3}>
                        <ImageZoom
                            image={{
                                src: '/images/tableau/evaluate.png',
                                alt: '',
                                className: 'project_illustration_small'
                            }}
                        />
                        <div className="project_overview_content text-center">Evaluate</div>
                        <div className="p_small text-center">Evaluated and iterated through design critiques and usability testing</div>
                        
                    </Col>
                    <Col sm={12} md={3}>
                        <ImageZoom
                            image={{
                                src: '/images/tableau/deliver.png',
                                alt: '',
                                className: 'project_illustration_small'
                            }}
                        />
                        <div className="project_overview_content text-center"> Document & Deliver</div>
                        <div className="p_small text-center">Brought explorations into hi-fi specs and shipped; proposed onboarding strategies & patterns and in-product improvements</div>
                        
                    </Col>
                </Row>
            </div>
    
    
    
    
    
    
                <div className="project_overall_container">
                    <Row>
                        <Col md={12} lg={3}>
                            <ProjectContentNav contents={contents} pagination={pagination}/>
                        </Col>
                        <Col md={12} lg={9}>
                            <div className="project_container">
                                <section className="project_body" id="intro">
                                    <div id="scrollstart"></div>
                                    <h2>Problem</h2>
                                    <h5>Users didn't come back</h5>
                                    <p><a className="text-link" target="_blank" href="https://www.tableau.com/products/prep">Tableau Prep Builder</a> is a self-service data preparation tool that helps people combine, shape and clean data for analysis. As a tool that empowers people, it promises an intuitive and visual way to prepare data even for non-expert users. However, the product witnessed a low return rate since its first launch, indicating potential problems in users' first-time experience.</p>
                                    
                                    <p>As a result of usability study with new users, problem areas were identified such as first-step difficulties, low discoverability of data cleaning features, mental model issues, lack of in-product help and so on. These problems result in confusing first use, hampering further engagement with the product, let alone the discovery of product values.</p>    
                                    <div className="project_quote">
                                        <div className="project_separator_inner_wrapper_small">
                                            <p className="project_quote_text">"This looks professional and complicated."</p>
                                    </div>
    
                                    </div>               
                                </section>
                                
    
    
                                <section className="project_body" id="approach">
                                    <h2>Approach</h2>
                                    <h5>How I started and planned out the design</h5>
                                    <p>I started with reviewing previous research and testing findings. With the knowledge in mind, I drafted design brief to specify business goals, user benefits, target users and scenarios, design goals, and design requirements.</p>
                                    <p>Then, I planned out my design into two sprints: one for exploring in-product fixes to the pressing issues, the other for exploring onboarding features that guide and teach new users.</p>
                                    <ImageZoom
                                        image={{
                                            src: '/images/tableau/gantt.png',
                                            alt: '',
                                            className: 'project_illustration'
                                        }}
                                    />
                                  
                                </section>
                                <section className="project_body" id="impact">
                                    <h2>Impact</h2>
                                    <h5>Improved the Experience and Drove Changes</h5>
                                    <p>The onboarding features got good feedback in the usability testing. The success rates of tasks such as connecting to data and combining data were improved. Users were able to start working with Prep, engage with more advanced features, and understand the unique values of the product.</p>
                                    <div className="project_quote">
                                        <div className="project_separator_inner_wrapper_small">
                                            <p className="project_quote_text">"It's actually not that hard! I will probably need to spend more time on it. Once I got a feel for it, I can see that it's a super intuitive and much faster way to clean my data."</p>
                                        </div>
    
                                    </div>
                                    <p>The final proposal shared with the teams the final design, the rationale, benefits and risks of the design, and the synthesized principles and patterns of the onboarding features. It provided the management with evidence for prioritization and informed the company-wide onboarding initiatives. Some low-hanging in-product improvements were included in future ship point.</p>
                               
                                   
                                </section>
                                <section id="take" className="project_body">
                                        <h2>TAKEAWAYS</h2>
                                        <h6>Strive for incremental small changes</h6>
                                        <p>No doubt that one responsibility of designers in a company is to think big. The blue sky view can help drive innovations. However, bringing up golden ideas and design is not enough. To realize the view, designers should be able to consider different limitations, phase out design into incremental steps, and help to draw the line to the end goal.</p>
                                        <h6>Show the design early and often</h6>
                                        <p>Showing design at different fidelity levels and at different phases is very important. It helps the team to learn the progress and help the designers discover related efforts. Also, people from different positions give different perspectives and sheds new lights on the problem and the solution in the conversations.</p>
                                        <h6>Learn about users through various channels</h6>
                                        <p>One difficulty of designing enterprise product is the  distance from the end users. They can't be simply found on the street or in contacts. They could be very different from the designer. Therefore, to learn about them and build up the empthy, designers should tap into different resources. I talked to sales, solution engineers, customer service people. They provided me with anecdotes and insights which inspired my design and supported my decision making.</p>
                                 
                                       
                                </section>
                                <section id="relate" className="project_body">
                                        <h2>Related Work</h2>
                                        <h5>Other things I did in the internship</h5>
                                        <p>In the 12 weeks, I also helped to flesh out some design ideas, brought them to high fidelity and supported development team by specifying the design. These features were <a className="text-link" target="_blank" href="https://www.tableau.com/about/blog/2020/9/new-tableau-prep-group-steps-custom-fiscal-dates-and-more">shipped in the 2020.3.3 release.</a></p>
                                        <h6>Ghosted Clean Step</h6>
                                        <p>Users want to start cleaning after connecting their data. However, the interface at that moment misled their attention to the preview of the data instead of adding a clean step to start prepping. Therefore, a ghosted clean step was designed to improve the discoverability of the cleaning feature/interface. Also, this new feature as a short cut benefited power users as well.</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/tableau/GCS.gif',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}
    
                                        />
                                        <h6>Custom Fiscal Dates</h6>
                                        <p>Users want to define the start of the fiscal year and show month or quarter numbers correspondingly. To allow more flexible date field configuration, custom fiscal year was introduced as the MVP. Users can now convert date field to month or quarter, and select the start of the year.</p>
                                        <ImageZoom
                                            image={{
                                                src: '/images/tableau/CFY.gif',
                                                alt: '',
                                                className: 'project_illustration'
                                            }}
    
                                        />
    
                                    </section>
                           </div>
                    
                                
                        </Col>
    
                    </Row>
    
    
                </div>
                <ProjectPagination pagination={pagination} />
                <BackToTopBtn contents={contents} pagination={pagination} />
            </>)
    }
}




export default TableauPrep;

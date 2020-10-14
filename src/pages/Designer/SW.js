import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import ImageModal from '../../components/ImageModal'
import ProjectPagination from '../../components/ProjectPagination'
import ImageZoom from 'react-medium-image-zoom'
import ProjectContentNav from '../../components/ProjectContentNav'

const contents=[
    {
        id:"#overview",
        name:"Project Overview"

    },
    {
        id:"#intro",
        name:"Problem"

    },
    {
        id:"#solution",
        name:"Solution"

    },
    {
        id:"#research",
        name:"Research"

    },
    {
        id:"#syn",
        name:"Synthesize"

    },
    {
        id:"#design",
        name:"Design & Evaluate"

    },
    {
        id:"#visual",
        name:"Visual Design"

    },
    {
        id:"#deliver",
        name:"Final Design"

    },
    {
        id:"#impact",
        name:"Impact"

    },
    {
        id:"#take",
        name:"Takeaways"

    },
]




function MaterialBank(props) {
    const pagination = props.pagination

    return (
        <>
            <ScrollToTopOnMount />
            <div className="project_head_container">
                <section id="list-item-0" className="project_head">
                    <h1>Seattle Works</h1>
                    <h3>A Web redesign practice for clearer information hierarchy and better visual communication.</h3>
                    <div className="project_info">November - December 2019, school work side project.</div>
                </section>
            </div>
            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/sw/mockup.png"} />
            </div>
            <div className="project_overview_container" id="overview">
                {/* <Container> */}
                    <Row>
                       
                        <Col sm={12} md={5}>
                                <div className="project_overview_title">Background</div>
                                <div className="project_overview_content">This was a school project for Visual Communication course at the University of Washington. Alice and I decided to carry this project forward to not only focus on visual design but also improve information architecture and usability.</div>
                                
                                
                            </Col>
                            <Col sm={12} md={3}>
                                <div className="project_overview_title">Key Learnings</div>
                                <div className="project_overview_content">Information Architecture</div>
                                <div className="project_overview_content">Usability Testing</div>
                                <div className="project_overview_content">Visual Design System</div>
                                <div className="project_overview_content">Vector Illustration</div>
                            </Col>
                        <Col sm={4} md={2}>
                        
                            <div className="project_overview_title">My Role</div>
                            <div className="project_overview_content">User Research</div>
                            <div className="project_overview_content">Usability Testing</div>
                            <div className="project_overview_content">UX Design</div>
                            <div className="project_overview_content">Visual Design</div>
                            <div className="project_overview_content">Illustration</div>
                        </Col>
                        <Col sm={4} md={2}>
                        
                            <div className="project_overview_title">Teammate</div>
                            <div className="project_overview_content"><a className="text_link" target="_blank" href="https://www.aliceyyoh.com">Alice Oh</a></div>
                        </Col>

                    </Row>
                {/* </Container> */}
            </div>

            <div className="project_overview_container">
                <div className="project_overview_title">Design Process</div>
    

                <Row>
                        <Col xs={4} md={2}>
                    {/* <div className="project_overview_title">Design Process</div> */}
                            
                            
                            <img  src={process.env.PUBLIC_URL + "/images/leftStep.png"}/>
                            <div className="project_overview_content py-1"><b>Research</b></div>
                            <div className="project_overview_content">Client Interview</div>
                            <div className="project_overview_content">Usability Testing</div>
                        </Col>
                        <Col  xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
                            <div className="project_overview_content py-1"><b>Synthesize</b></div>
                            <div className="project_overview_content">User Flows</div>
                            <div className="project_overview_content">Problem Space</div>
                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>

                            <div className="project_overview_content py-1"><b>Ideate</b></div>
                            <div className="project_overview_content">Brainstormimg</div>
                            <div className="project_overview_content">Sketching</div>
                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
                            <div className="project_overview_content py-1"><b>Design</b></div>
                            <div className="project_overview_content">Site map</div>
                            <div className="project_overview_content">Information architecture</div>
                            <div className="project_overview_content">Wireframing</div>
                            <div className="project_overview_content">Hi-fi prototyping</div>
                        </Col>
                        <Col  xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>

                            <div className="project_overview_content py-1"><b>Evaluate</b></div>
                            <div className="project_overview_content">Usability Testing</div>
                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/rightStep.png"}/>

                            <div className="project_overview_content py-1"><b>Deliver</b></div>
                            <div className="project_overview_content">Hi-fi prototypes</div>
                            <div className="project_overview_content">Design system</div>
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
                                <h2>Problem</h2>
                                <h5>A cluttered information bulletin board</h5>
                                <p>I was completely shocked the first time when I opened Seattle Works' web page. It took me serveral minutes to understand the mission and purpose of Seattle Works.</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/sw/existing.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <ul>
                                    <li>Dense and scattered Information</li>
                                    <li>Lack of information hierarchy</li>
                                    <li>Difficult navigation</li>
                                    <li>Unintuitive user flow</li>
                                    <li>Confusing terms</li>
                                    <li>Outdated visual design</li>
                                </ul>
                            
                                
                               <p>A Organization's web page should serve dual purposes: displaying information and appealing to target audiences/users/customers. It is tricky to find a balance between these two. Obviously, Seattle Works' website fails to accomplish either of the purpose. Therefore, we asked:</p>
                                
                            </section>

                            
                            <section className="project_body" id="">
                                        
                                        <div className="project_quote">
                                            <div className="project_quote_wrapper">
                                            <p className="project_quote_text">How might we improve Seattle Works' website to display information efficiently and appeal to its users?</p>
                                            </div>
                                        </div>
                                 </section>

                                 </div>
                 </Col>
                 </Row>
                 </div>
                 <div className="project_separator" id="solution">

                    <div className="project_separator_inner_wrapper" >
                        <h2>Solution</h2>
                        <h5>Interactive Prototype</h5>
                        <p>Here is the clickable hi-fi prototype and how we solved the problems in exisiting website</p>
                        <div style={{display:'relative',padding:"20px 0 20px"}} className="d-flex justify-content-center">
                        
                            <iframe style={{border: "none", width: "100%", height:"90vh"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlIOaQri1Eo3ECuqczDyLbE%2FSeattle-Works-only-wireframe-latest%3Fnode-id%3D402%253A78%26scaling%3Dscale-down" allowfullscreen></iframe>
                            </div>
                            <div className="project_caption text-center">Clickable Hi-fi prototype</div>
                        </div>
                    </div>      
                 <div className="project_overall_container">
                     <Row>
                        <Col md={12} lg={3}>
                            <ProjectContentNav contents={contents} pagination={pagination}/>
                        </Col>
                        <Col md={12} lg={9}>
                            
                  
                                  
                            <div className="project_container">
                           
    
                            <section className="project_body" id="research">
                                <h2>Research</h2>
                                <h5>Who are the primary users and how do they use the website?</h5>
                                <h6>
                                    Methods
                                </h6>
                             
                                    <li className="p-list"><b>Client Interview</b>: to learn about SW's goal and userbase</li>
                                    <p>We reached out to a Seattle Work's staff, and had a 40-minute phone interview. We raised questions about Seattle Works' purposes and website operation, users and feedback. View <a className="text_link" href="https://docs.google.com/document/d/17cR942yHV9_lUph0FXDDk-NjhnAtJM9CbPyDVZgFLuA/edit?usp=sharing">interview questions</a> </p>
                                    <li className="p-list"><b>Usability Testing</b>: to discover problems in primary users' usage</li>
                                    <ImageZoom
                                        image={{
                                        src: '/images/sw/testing.gif',
                                        alt: '',
                                        className: 'project_illustration_small'
                                    }}
                                
                                    />
                                    <div className="project_caption text-center">We were doing usability testing with a participant.</div>
                                    <p>We conducted moderated usability testing with 5 potential volunteers/users. In the testing, we gave them specific tasks such as understand Seattle Works, event search and registration to check if they can successfully complete these tasks. We also asked them questions about feelings and understandings in the process. View <a className="text_link" href="https://docs.google.com/document/d/1K_pXaQckxB1EacnXgCcHI8DeXeUk05EQaSlK0Q-1rGo/edit?usp=sharing">usability testing design</a> and <a className="text_link" href="https://docs.google.com/spreadsheets/d/1jvSVSztEx-x_4xdwGufQRaDwtjUHwB2KZI1hVg5Al60/edit?usp=sharing">all usability problems we found</a></p>
                                 
                                   
                            </section>
                            <section className="project_body" id="syn">
                                <h2>Synthesize</h2>
                                <h5>The website fails to meet the needs of both the organization and the volunteers</h5>
                                
                                <h6>1. Seattle Works</h6>
                                <p>There are two purposes Seattle Works want to achieve with the website:</p>
                                {/* <br /> */}
                               
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <p className="h7">We want to serve as a platform for volunteers & nonprofits without coordinating their 'handshakes', but...</p>
                                            <li className="project_info">unclear information display and ineffective event calendar and search result in 5-10 inquires per week about event registration (Seattle Works sees 3000 volunteer signing up and looking for opportunities per year).</li>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <p className="h7">We want to promote special event such as Seattle Works’ Day, and Team Works, but...</p>
                                            <li style={{visibility: "hidden"}}></li>
                                            <li className="project_info">The event page fails to put emphasis on these events.</li>
                                            <li className="project_info">The 3-level navbar make important information of these events hard to reach.</li>
                                        </Col>
                                    </Row>
                            
                                <h6>2. Volunteers</h6>
                                <p>The basic user flow can be summarised as the following graph. Two key steps are learning about Seattle Works and searching for events</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/sw/userflow.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <div className="project_caption text-center">The user flow</div>
                                <p>However, the needs of the users at each steps are not satisfactorily met:</p>
                                {/* <br /> */}
                            
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <p className="h7">I want to know whether SW is trustworthy and interesting, but...</p>
                                            <li className="project_info">The scattered information in sections such as about us and equity is hard to navigate through.</li>
                                            <li className="project_info">The information in form of long paragraphs is too dense to digest.</li>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <p className="h7">I want to find some interesting events that I can take part in and register, but... </p>
                                                <li className="project_info">The search and filter features are ineffective.</li>
                                                <li className="project_info">The event list and calendar are hard to navigate.</li>
                                                <li className="project_info">The information shown on the list is not useful and glanceable for quick understanding.</li>
                                                <li className="project_info">The confusing categories of events causes unwanted results in event registration.</li>
                                           
                                        </Col>
                                        
                                    </Row>
                                    
                            </section>
                            <section className="project_body" id="design">
                                <h2>Design & Evaluate</h2>
                                <h5>Rapid prototyping for usability testing</h5>
                                <h6>Scoping</h6>
                                <p>Based on usability studies, we prioritized issues by severity and matched key problems with pages and elements</p>
                                    <ImageZoom
                                        image={{
                                        src: '/images/sw/miro.jpg',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}/>
                                    <div className="project_caption text-center">We sorted all issues under categories and decided to redesign within 5 focus areas</div>
                                    <br/>
                                    <p>We finally decided to focus our redesign on 5 areas and their related elements</p>
                                    <Container>
                                        <Row>
                                            <Col xs={12} md={8}>
                                            <p class="project_info">Focus Areas</p>
                                            <li class="project_info">Clear communication of the organization's work and goals</li>
                                            <li class="project_info">Streamlined user flows on search system and event calendar</li>
                                            <li class="project_info">A clear distinction between different types of volunteering event</li>
                                            <li class="project_info">Clear visual hierarchy in event detail descriptions</li>
                                            <li class="project_info">Better visual design across the website</li>
                                            </Col>
                                            <Col xs={12} md={4}>
                                            <p class="project_info">Elements</p>
                                            <li class="project_info">Overall navigation (navbar)</li>
                                            <li class="project_info">Landing page</li>
                                            <li class="project_info">About us</li>
                                            <li class="project_info">Main volunteer page</li>
                                            <li class="project_info">Volunteer event related pages</li>
                                            <li class="project_info">Seattle Works' Day page as a example of special event</li>
                                            </Col>
                                            
                                        </Row>
                                        </Container>
                                <h6>Site Map</h6>
                                    <p>We started with definting the overall site map of the website</p>
                                    
                                    <ImageZoom
                                        image={{
                                        src: '/images/sw/sitemap.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                
                                    />
                                    <div className="project_caption text-center">New site map</div>
                                    <h6>Wireframes</h6>
                                    <p>Then, we created lo-fi wireframes for usability testing</p>

                                    <ImageZoom
                                        image={{
                                        src: '/images/sw/wireframe.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                
                                    />
                                    <div className="project_caption text-center"><a className="text_link" href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlIOaQri1Eo3ECuqczDyLbE%2FSeattle-Works-only-wireframe-latest%3Fnode-id%3D165%253A416%26scaling%3Dscale-down">Link to clickable Wireframes</a></div>
                            
                                <h6>Usability Testing</h6>
                                    <p>The usability problems we found mainly existed on</p>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            <p className="h7">Wording</p>
                                            <li className="project_info">Some terms such as 'causes' are not always straightforward to all users. Some action buttons require better wording.</li>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <p className="h7">Affordance</p>
                                            <li className="project_info">Filter dropdown buttons did not behave as expected</li>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <p className="h7">Information Hierachy</p>
                                            <li className="project_info">Event card lacks some information.</li>
                                        </Col>
                                    </Row>
                                    <p>👉 View <a className="text_link" href="https://docs.google.com/spreadsheets/d/1Pi7K3UuC1MHgb5M6XT5g4sgwqaR2jo3_JiK4IkW1NBw/edit?usp=sharing">all usability problems we found.</a></p>
                                    
                                    
                            </section>
                            <section className="project_body" id="visual">
                                <h2>Visual Design</h2>
                                <h5>Improve the overall visual communication</h5>
                                <h6>Moodboard</h6>
                                <p>The moodboard meant to convey a energetic, thriving and welcoming feeling. It captures images of volunteers working together, enjoying contributing and team work. The moodboard also contains images that represent the identity of Seattle, which is modern, fun and dynamic</p>
                                <ImageZoom
                                        image={{
                                        src: '/images/sw/moodboard.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                
                                    />
                                <h6>Visual System</h6>
                            
                                   
                           
                              
                                <ImageZoom
                                        image={{
                                        src: '/images/sw/visualsys.png',
                                        alt: '',
                                        className: 'project_illustration'
                                    }}
                                
                                    />
                                 <li>Colors: brand colors, the turquoise green and its tinted variation, were pulled from the moodboard. They are bright and energetic. The other colors on the pallet are picked from its split-complement colors.</li>
                                <li>Font: Avenir Next and Montserrat were used for big heading and titles, and Proxima Nova gave a little stress on smaller headings. Proxima Soft was used in the body texts to convey smooth and welcoming feelings but still modern.</li>
                                <li>Images: the hero images were carefully selected and used in big and bold size to bring its visual effect in full swing. They are hand images which manifest Seattle Works' main mission connecting people. All pictures are in a warm tone to reflect Seattle Works' the caring and friendly images.</li>
                                <li>Illustrations: illustrations were to visualize the contents and bring in senses of fun and youth.</li>
                                    
                                    
                            </section>
                
                            <section className="project_body" id="deliver">
                           
                                <h2>Final Design</h2>
                                <h5>How we solved the problems</h5>
                                <h6>1. Simplify information architecture and site navigation</h6>
                                <br/>
                                <Row>
                                        <Col xs={12} md={4}>
                                        <p className="h7">1) 8 tabs decrease to 6.</p>
                                        <p className="project_info">The two categories (Equity and Swank Gala Auction) should not be on a high-level hierarchy. They are moved under bigger theme.</p>
                                        </Col>
                                        <Col xs={12} md={4}>
                                        <p className="h7">2) Integrated sub pages into main pages.</p>
                                        <p className="project_info">We brought sub page contents (e.g. FAQ) to main pages for users to quickly understand the pertinent information within one page.</p>
                                        </Col>
                                        <Col xs={12} md={4}>
                                        <p className="h7">3) Change order of tabs on the navigation bar.</p>
                                        <p className="project_info">Volunteers page comes first for the primary users. Also, Donate, which is a single page, comes to the very right with a highlighted CTA button.</p>
                                        </Col>
                                    </Row>
                                
                               
                               
                                <p>Old IA</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/sw/oldIA.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <p>New IA</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/sw/newIA.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                 <p>New Navbar</p>
                                <ImageZoom
                                    image={{
                                    src: '/images/sw/newnav.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <h6>2. Increase visual appeals on promotional pages</h6>
                                <li className="p-list">Landing Page</li>
                                <ImageZoom
                                    image={{
                                    src: '/images/sw/landingpage.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <li className="p-list">About Us</li>

                                <ImageZoom
                                    image={{
                                    src: '/images/sw/aboutus.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                 <li className="p-list">Seattle Works Day</li>
                                <ImageZoom
                                    image={{
                                    src: '/images/sw/swd.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />



                                <h6>3. Improve information findability and hierarchy on informational pages</h6>
                                <li className="p-list">Event Page</li>
                                <ImageZoom
                                    image={{
                                    src: '/images/sw/events.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                                <li className="p-list">Event Details</li>                                
                                <ImageZoom
                                    image={{
                                    src: '/images/sw/eventdetails.png',
                                    alt: '',
                                    className: 'project_illustration'
                                    }}
                                
                                />
                       
                              

                            </section>
                            <section id="impact" className="project_body">
                            <h2>Impact</h2>
                            <h5>Client Feedback</h5>
                            <p>We shared our final design with Seattle Works and got very possitive feedback.</p>
                            <div className="project_quote">
                                    <div className="project_separator_inner_wrapper_small">
                                    
                                    
                                       
                                        <p className="project_quote_text">I really like the addition of images and removing a lot of the text. I especially like the “About” section. I think it tells a better story of who we are and what we do, in a much easier to read and more visually appealing way. This is helpful as we think about website design in the future, and how we make our website more user friendly.</p>
                                    </div>

                                </div>
                        </section>
                            

                            
                        <section id="take" className="project_body">
                            <h2>TAKEAWAYS</h2>
                            <h6>Use usability studies to pivot on actionable items</h6>
                            <p>By listing out and prioritizing issues found in usability testing, we successfully narrowed down our scope and focused on details</p>
                            <h6>Considering the user needs and the organization's goal at the same time</h6>
                            <p>After we found the usability issues, we could come up with a lot of different good ways to solve the problems. The current design decision could be made because we tried to solve the fundamental problems and understanding of the core purpose of the website by interviewing a staff.</p>
                        </section>

                            </div>
                    </Col>
                </Row>

            </div>
           

            
                            
            <ProjectPagination pagination={pagination} />
            <BackToTopBtn contents={contents} pagination={pagination} />
     
        </>)
}


export default MaterialBank;

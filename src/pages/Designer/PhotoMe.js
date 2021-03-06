import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
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
        id:"#demo",
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
        id:"#ideate",
        name:"Ideate"

    },
    {
        id:"#design",
        name:"Design & Evaluate"

    },
    {
        id:"#deliver",
        name:"Final Design"

    },
    {
        id:"#take",
        name:"Takeaways"

    },
]


// const pagination = 4
 


function PhotoMe(props) {
    const pagination = props.pagination

    return (
        <>
        <ScrollToTopOnMount />
            <div className="project_head_container">
                <section className="project_head">
                    <h1>PhotoMe</h1>
                    <h3>A mobile app that empowers others to capture better you.</h3>
                    <div className="project_info">May to August 2018 (4 months), Bootcamp Individual Project</div>
                </section>
            </div>
            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/PhotoMe/headerImg.png"} />
            </div>
            <div className="project_overview_container" id="overview">
                {/* <Container> */}
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="project_overview_title">Background</div>
                            <div className="project_overview_content">This is a individual project I did for learning and practicing the UCD process. The research and the first version of design were finished in August, 2018. Additional usability studies and UI updates were completed in January, 2020.</div>
                            
                        </Col>
                        <Col></Col>
                        <Col sm={4} md={2}>
                        
                            <div className="project_overview_title">My Role</div>
                            <div className="project_overview_content">Research</div>
                            <div className="project_overview_content">Product Design</div>
                            <div className="project_overview_content">Interaction Design</div>
                            <div className="project_overview_content">Visual Design</div>
                            <div className="project_overview_content">Prototyping</div>
                            <div className="project_overview_content">Usability Testing</div>
                        </Col>
                        <Col sm={4} md={3}>
                        
                            <div className="project_overview_title">Team</div>
                            <div className="project_overview_content">Only Me</div>
                        </Col>

                    </Row>
                {/* </Container> */}
            </div>
          <div className="project_overview_container">
                <div className="project_overview_title">Design Process</div>
    

                <Row>
                        <Col xs={4} md={2}>
          
                            
                            <img  src={process.env.PUBLIC_URL + "/images/leftStep.png"}/>
                            <div className="project_overview_content py-1"><b>Research</b></div>
                            <div className="project_overview_content">User Interview</div>
                            <div className="project_overview_content">Passive Observation</div>  
                            <div className="project_overview_content">Competitive Analysis</div>                        
                        </Col>
                        <Col  xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
                            <div className="project_overview_content py-1"><b>Synthesize</b></div>
                            <div className="project_overview_content">User flow</div>
                            <div className="project_overview_content">Problem space</div>

                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>

                            <div className="project_overview_content py-1"><b>Ideate</b></div>
                            <div className="project_overview_content">Brainstormimg</div>
                            <div className="project_overview_content">Concept sketching</div>
                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>
                            <div className="project_overview_content py-1"><b>Design</b></div>
                            <div className="project_overview_content">Lo-fi prototyping</div>
                            <div className="project_overview_content">Interaction design</div>
                            <div className="project_overview_content">Visual Design</div>
                            <div className="project_overview_content">Hi-fi prototyping</div>
                        </Col>
                        <Col  xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/centerStep.png"}/>

                            <div className="project_overview_content py-1"><b>Evaluate</b></div>
                            <div className="project_overview_content">Cognitive walkthrough</div>
                        </Col>
                        <Col xs={4} md={2}>
                        <img  src={process.env.PUBLIC_URL + "/images/rightStep.png"}/>

                            <div className="project_overview_content py-1"><b>Deliver</b></div>
                            <div className="project_overview_content">Hi-fi prototypes</div>
                            <div className="project_overview_content">Video prototypes</div>

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
                    <p>I always felt frustrated when I asked my boyfriend to take a picture of me. Describing what I want, posing awkwardly in front of a bunch of strangers, the whole experience always ended up with piles of unsatisfactory portraits, lying in my phone. And I found that I was not alone.</p>
                    <p><b>“Me in My Boyfriend's Camera”</b> became a hot discussion topic on the Internet in China. Many girls complained that their boyfriends made them look three times fatter and ungainly in the photo. A decent portrait by boyfriend has become a luxury.</p>
                    <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/PhotoMe/intro.png"} />
                    <p className="project_caption">The pictures a girl post online. The left is her expectation and the right is the actual photo taken by her boyfriend. She commented that: “I really don’t want to admit that it’s me.”</p>
                    <p>In the U.S., a new word, <b>“Instagram Husband”</b>, was coined, referring to dudes who are responsible for taking photos for their Instagram famous girls but more often than not fail the job. In fact, it is not the only husband that screws up. Parents and friends all do. Something is certainly not working.</p>
                    <p>Therefore, I raised the question</p>
                    <div className="project_quote">
                        <div className="project_separator_inner_wrapper_small">

                        <p className="project_quote_text">How might we help people get/take satisfactory portraits?</p>
                        </div>

                    </div>
                </section>
            </div>

            <section className="project_body" id="demo">
                    <h2>Solution</h2>
                    <h5>Demo Video</h5>
                    <div style={{display:'relative',padding:"20px 0 20px"}} className="d-flex justify-content-center">
                        <iframe style={{width:'100%',minHeight:'540px'}} src="https://www.youtube.com/embed/9SHfjBA0Bdk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <h5>Clickable Hi-fi Prototypes</h5>
                    <div style={{display:'relative',padding:"20px 0 20px"}} className="d-flex justify-content-center">
                    
                        <iframe style={{border: "none", width: "100%", height:"600px"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvqvzoA8Su3do5wqJZPYRJq%2FPhotoMe%3Fnode-id%3D42%253A1%26scaling%3Dscale-down" allowfullscreen></iframe>
                    </div>
            </section>
            
            <div className="project_container" id="research">

                <section className="project_body">
                    <h2>Research</h2>
                    <h5>Why do people fail to take satisfactory portraits?</h5>
                    <p>Twelve participants (9 are portrait-lovers and 3 are their partners/friends) were interviewed to gain an understanding of the current process of photo shooting. Meanwhile, I also conducted passive observations in a gallery and park to find out how people take pictures for each other.</p>
                    <p>A typical unsatisfactory portrait shooting experience can be divided in to seven steps as below, some of which are reversible:</p>
                   
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/storyboard_vertical.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                    <p>Therefore, the reasons why people fail to take satisfactory portraits can be summarized as follow:</p>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/insight.png',
                            alt: '',
                            className: 'project_illustration_small'
                        }}

                    />
                   
                    <p>And indeed, most of the existing solutions are targeting some of these problem areas, except the one related to <b>communication</b>:</p>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/competition_analysis.png',
                            alt: '',
                            className: 'project_illustration_medium'
                        }}

                    />
                   
                    <p>From the journey map, it is clear that communication takes a large part in the process. So I sifted through the scripts from the lens of communication, and two particular quotes coming from a couple attracted my attention:</p>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/quote.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                   
                    
                    <p>I realized that the key issue was not the nature of the scene nor the photographer's skill. The photographer knew exactly the angle, the light and the composition that he wanted for his "good" picture, but he didn't know or understand what she wanted for her good picture, because she failed to convey her expectation or he failed to grasp it.</p>
                    <p>The biggest design opportunity I discovered lies in <b>communication</b>. So I shifted my focus to <b>why  people fail to convey or decode information in the photo-taking process? </b></p>
                </section>
            

                <section className="project_body" id="syn">
                    <h2>Synthesize</h2>
                    <h5>Why do people fail to convey or decode information in the photo-taking process?</h5>
                    <h6>1. People have no place to start the talk without a clear expectation.</h6>
                    <p>The starting point of the photo-taking process, as well as the communication, is the subject's expectation of the picture, what it will look like. However, some subjects don't have a clear expectation.</p>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/quote_2.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                  
                    <p>Even if the subject holds a clear envision, it is often different from the photographer's. That's why communication becomes so essential a step in this process.</p>
                    <div className="divider"></div>
                    <h6>2. People lack the common ground on which they can quickly and explicitly communicate.</h6>
                    <p>Photography is complicated. Conveying one's expectation or instructing other how to take the picture involves a lot of detailed and subtle information, such as light, angle, composition, and so on. The subject often fails to give such detailed instruction all in once. So the photo taking process becomes frustrating:</p>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/quote_3.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                   
                    <p>Even if the subject manages to give some concrete instructions, for the photographer, to understand what those mean and apply them into the photo-taking process still <b>involves a lot of translations</b>. People use different words to refer to the same thing. When talking about 'Don't take the picture from a low angle' or 'Stand closer to me', the terms 'low angle' or 'closer' actually requires a clear and explicit definition. But when people talk before taking the picture, there is no time for them to clarify all the languages they use.</p>
                    <p>Based on the insights, I reframed the design question to be:</p>
                        <div className="project_quote">
                            <div className="project_separator_inner_wrapper_small">

                                <p className="project_quote_text">How might we help people better communicate in the photo taking process?</p>
                            </div>

                        </div>
                </section>

    
                <section className="project_body" id="ideate">
                    <h2>Ideation</h2>
                    <h5>What I learned from how people worked around</h5>
                    <h6>User Workarounds</h6>
                    <p>To prevent the ambiguity of translation, people actually figured out some ways:</p>
                    <li className="p-list">1. Sample Picture</li>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/sample_photo.png"} />
                    <li className="p-list">2. Use the photographer as a selfie pole</li>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/selfie.png"} />
                    <h6>Key features</h6>
                    <p>These two workarounds inspired my brainstorming of the following features as solutions: </p>
                    <li>Feeds of appealing photos that users can look into as samples;</li>
                    <li>Applying sample photos directly onto the screen as mask when taking photos;</li>
                    <li>Sharing screen between the photographer and the subject for output checking</li>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/ideas.png"} />
                    
                </section>
               


                <section className="project_body" id="design">
                    <h2>Design & Evaluate</h2>
                    <h5>Crafting the best experience</h5>
                    
                    <h6>User Flow</h6>
                    <p>I used the ideal userflow as guidance for my prototypes.</p>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/userflow.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                    
                    <h6>Low-fidelity Prototypes & Usability Studies</h6>
                    <p>There are several important interactions I created different variations and assessed with the usability studies. I asked 4 participants to walk through different tasks that involve these interactions and make comments after the test. </p>
                    <li>Shift among different ways of sample photo display (mask, instructional guide, tags)</li>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/shift.gif',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                    <li>Scan through the sample photos and find the one I like</li>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/scanning.gif',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                    <li>When taking photos, retrive one sample that I saved</li>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/retrieve.gif',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                    <p>I finally decided to use the swiping gesture and a wheel for shifting among different ways of display because it is more obvious; the two-column layout is used for both the photo feeds and the saved photos to display more photos on each scroll so that users can find the one they like or need easily.</p>
                    <h6>Moodboard</h6>
                    <p>Before developing hi-fi prototypes, I built a moodboard that is fashion, young, joyful and showing girl power and extract brand colors from it.</p>
                    <ImageZoom
                        image={{
                        src: '/images/PhotoMe/moodboard.png',
                        alt: '',
                        className: ''
                        }}
                    
                    />

                </section>
           


                
                <section className="project_body" id="deliver">
                    <h2>Final Design</h2>
                    <h5>How I solved the problems</h5>
                    <ImageZoom
                        image={{
                            src: '/images/PhotoMe/wireframe.png',
                            alt: '',
                            className: 'project_illustration'
                        }}

                    />
                   
                    
                    <h6>1. Manage Expectation</h6>
                    <li className="p-list">Use pictures generated in the community to inspire and visualize expectation.</li>
        
                    <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/scan.gif"} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <ul>
                        <li className="project_caption">· Users can search key words or scan the immediate environment to look for sample pictures.</li>
                        <li className="project_caption">· User-generated contents provide users with various options</li>
                        <li className="project_caption">· Information about best visit time, clothes, makeup helps the subjects to better prepare and realize her expectation.</li>
                        </ul>
                        </Col>
                    </Row>
                    </Container>
                    <li className="p-list">Save the expectation whenever the user gets it in the 'Scrapbook' for future use. </li>
                    <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/scrapbook_save.gif"} />
                        <p className="project_caption">· Users can select and save pictures as sample in 'scrapbook' for future use.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/scrapbook_inner.gif"} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/scrapbook_select.gif"} />
                        </Col>
                        <Col xs={10} sm={10} md={10} lg={10}>
                        <p className="project_caption">· The saved samples can easily be retrieved in 'scrapbook' or by a bottom in photo-taking mode. Also, when taking photos, users can swipe to display related samples in the same folder.</p>
                        </Col>
                    </Row>
                    
                    </Container>
    
                    <div className="divider"></div>
                    <h6>2. Foster Communication</h6>
                    <li className="p-list">Provide Common Grounds</li>
                    
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} sm={12} md={8} lg={6}>
                            <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/shiftmode.gif"} />
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={6}>
                           
                            <li className="project_caption">Sample pictures are available in three different modes: mask, guideline, or two combined;</li>
                            <li className="project_caption">'Mask': semi-translucent sample picture overlay on the screen that visualizes what is expected, avoiding ambiguity due to translation</li>
                            <li className="project_caption">'Guideline': instructional lines that abstract the sample and define the key compositions in the scene</li>
                            <li className="project_caption">'Tag': customizable detailed instructions glittering on the screen that work as reminders and hints to guide the photographer</li>                          
                            </Col>
                        </Row>
                        <Row className="align-items-center justify-content-around">
                            <Col xs={10} sm={10} md={5} lg={6}>
                           
                            <li className="project_caption">· Users can attach tags or edit photo providers' tages in advance</li>
                            <li className="project_caption">· Frequently-used tags will be saved automatically for easy access</li>

                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                            <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/addtag.gif"} />
                            </Col>
                      
                           
                        </Row> 
                        <Row className="align-items-center justify-content-around">
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/tools.gif"} />
                        </Col>
                        
                        <Col xs={10} sm={10} md={5} lg={6}>
                        <p className="project_caption">· 'Pencil' can be used to jot down anything on the screen as a reference to communicate</p>
                       
                        <p className="project_caption">· 'Poses' can be used as inspiration and dragged and dropped to the screen as reference in discussion</p>
                        </Col>
                    </Row> 

                 
                        <Row className="align-items-center justify-content-around">
                           
                            <Col xs={10} sm={10} md={5} lg={6}>
                            <li className="project_caption">· Taking portrait like a selfie</li>
                            <li className="project_caption">· The Photographer can share view with the subject so that they can check whether they are satisfied with the photos themselves and adjust accordingly</li>

                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                            <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/share.gif"} />
                            </Col>
                          
                      
                           
                        </Row> 
                    </Container>
                    <div className="project_quote">
                        <div className="project_separator_inner_wrapper_small">

                            
                            <p className="project_quote_text">With PhotoMe, people can truely enjoy a carefree portrait taking experience. They can easily find where to go, show what they want and see what they got. Their partner or friend no longer need to guess about their preferences and worry about ruining their quality time with terrible pictures. </p>
                        </div>

                    </div>    
                </section>
             
                     
                        
                     
                  
    
                <section className="project_body" id="take">
                    <h2>Takeaways</h2>
                    <h5>Computers are not to replace human factors, but to facilitate them.</h5>
                    <h6>We cannot replace humans with machines.</h6>
                    <p>Users are clever. I was worried about the difficulty to match the semi-translucent sample picture to the actual scene. Surprisingly, in testing when the user found that the immediate scene was different from the sample picture. He just grasped the essence of the sample picture's composition and adjusted the angle to and the distance from his subject to imitate that sample picture, even if the picture may end up slightly different from the original one.</p>
                    <h6>We should empower people with technology.</h6>
                    <p>The final design tries to help people better communicate their thoughts by providing common grounds. It doesn't look forward to saving people from verbose talks about how to take that pictures. On the contrary, it serves a prompt to make people talk and talk better.</p>
                </section>

                        
                    </div>
                    
                    </Col>

            </Row>

                
            </div>
            <ProjectPagination pagination={pagination} />
            <BackToTopBtn contents={contents} pagination={pagination} />
        </>)
}


export default PhotoMe;

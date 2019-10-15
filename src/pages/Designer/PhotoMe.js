import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"



function PhotoMe() {

    return (
        <>
        <ScrollToTopOnMount />
            <div className="project_container">
                <section className="project_head">
                    <h1>PhotoMe</h1>
                    <h3>A mobile app that empowers others to create satisfactory portraits for you.</h3>
                    <div className="project_info">May to August 2018 (4 months), Bootcamp Individual Project</div>
                </section>
            </div>
            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/PhotoMe/headerImg.png"} />
        
            </div>
            <div className="project_container">
                <section className="project_body">
                    <h2>Intro</h2>
                    <p>I always felt frustrated when I asked my boyfriend to take a picture of me. Describing what I want, posing awkwardly in front of a bunch of strangers, the whole experience always ended up with piles of unsatisfactory portraits, lying in my phone. And I found that I was not alone.</p>
                    <p><b>“Me in My Boyfriend's Camera”</b> became a hot discussion topic on the Internet in China. Many girls complained that their boyfriends made them look three times fatter and ungainly in the photo. A decent portrait by boyfriend has become a luxury.</p>
                    <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/PhotoMe/intro.png"} />
                    <p className="project_caption">The pictures a girl post online. The left is her expectation and the right is the actual photo taken by her boyfriend. She commented that: “I really don’t want to admit that it’s me.”</p>
                    <p>In the U.S., a new word, <b>“Instagram Husband”</b>, was coined, referring to dudes who are responsible for taking photos for their Instagram famous girls but more often than not fail the job. In fact, it is not the only husband that screws up. Parents and friends all do. Something is certainly not working.</p>
                </section>
            </div>
            <div className="project_separator">
                <div className="project_separator_inner_wrapper">
                    <h5 style={{textAlign: "center"}}>DEMO VIDEO</h5>
                    <div className="d-flex justify-content-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nIvh_a4-Oq8" align="middle" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="project_container">
                <section className="project_body">
                    <h2>Research</h2>
                    <h5>Why do people fail to take satisfactory portraits?</h5>
                    <p>Twelve respondents were interviewed to gain an understanding of the current process of photo shooting. Meanwhile, I also conducted passive observations in a gallery and park to find out how people take pictures for each other.</p>
                    <p>A typical unsatisfactory portrait shooting experience can be divided in to seven steps as below, some of which are reversible:</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/storyboard_vertical.png"} />
                    <p>Therefore, the reasons why people fail to take satisfactory portraits can be summarized as follow:</p>
                    <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/insight.png"} />
                    <p>And indeed, most of the existing solutions are targeting some of these problem areas, except the one related to <b>communication</b>:</p>
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/PhotoMe/competition_analysis.png"} />
                    <p>From the journey map, it is clear that communication takes a large part in the process. So I sifted through the scripts from the lens of communication, and two particular quotes coming from a couple attracted my attention:</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/quote.png"} />
                    <p>I realized that the key issue was not the nature of the scene nor the photographer's skill. The photographer knew exactly the angle, the light and the composition that he wanted for his "good" picture, but he didn't know or understand what she wanted for her good picture, because she failed to convey her expectation or he failed to grasp it.</p>
                    <p>The biggest design opportunity I discovered lies in <b>communication</b>. So I reframed the problem as <b>why do people fail to convey or decode information in the photo-taking process? </b></p>
                </section>
                <section className="project_body">
                    <h2>Key Insights</h2>
                    <h5>Why do people fail to convey or decode information in the photo-taking process?</h5>
                    <h6>1. People have no place to start the talk without a clear expectation.</h6>
                    <p>The starting point of the photo-taking process, as well as the communication, is the subject's expectation of the picture, what it will look like. However, some subjects don't have a clear expectation.</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/quote_2.png"} />
                    <p>Even if the subject holds a clear envision, it is often different from the photographer's. That's why communication becomes so essential a step in this process.</p>
                    <div className="divider"></div>
                    <h6>2. People lack the common ground on which they can quickly and explicitly communicate.</h6>
                    <p>Photography is complicated. Conveying one's expectation or instructing other how to take the picture involves a lot of detailed and subtle information, such as light, angle, composition, and so on. The subject often fails to give such detailed instruction all in once. So the photo taking process becomes frustrating:</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/quote_3.png"} />
                    <p>Even if the subject manages to give some concrete instructions, for the photographer, to understand what those mean and apply them into the photo-taking process still <b>involves a lot of translations</b>. People use different words to refer to the same thing. When talking about 'Don't take the picture from a low angle' or 'Stand closer to me', the terms 'low angle' or 'closer' actually requires a clear and explicit definition. But when people talk before taking the picture, there is no time for them to clarify all the languages they use.</p>
                </section>

                <section className="project_body">
                    <h2>Inspiration & Design Principle</h2>
                    <h5>What I learned from workarounds</h5>
                    <p>To prevent the ambiguity of translation, people actually figured out some ways:</p>
                    <div className="divider"></div>
                    <h6>1. Sample Picture</h6>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/sample_photo.png"} />
                    <div className="divider"></div>
                    <h6>2. Use the photographer as a selfie pole</h6>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/selfie.png"} />
                    <p>These two workarounds inspired me to adopt the design principle: <b>What You See Is What You Get, show rather than tell.</b></p>
                </section>
                <section className="project_body">
                    <h2>Final Design</h2>
                    <h5>How might we help people better communicate in the photo taking process?</h5>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/wireframe.png"} />
                    
                    <h6>1. Manage Expectation</h6>
                    <p>· Use pictures generated in the community to inspire and visualize expectation.</p>
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
                    <div className="divider"></div>
                    <p>· Save the expectation whenever the subject gets it in the 'Scrapbook' for future use. </p>
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
                    <h6>2. Provide Common Grounds</h6>
                    <p>· What You See Is What You Get</p>
                    <ul>
                        <li>'Matte': semi-translucent sample picture overlay on the screen to visualize what is expected,  avoiding ambiguity due to translation</li>
                        <li>'Guideline': instructional lines which abstract the sample and define the key compositions in the scene</li>
                        <li>'Tag': break down detailed instructions into customizing tags glittering on screen</li>
                    </ul>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} sm={12} md={8} lg={8}>
                            <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/PhotoMe/layer.png"} />
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                            <ul>
                            <li className="project_caption">· Sample pictures are available in three different modes: mask, guideline, or two combined;</li>
                            <li className="project_caption">· The sample photo will be used as mask to guide the photographer;</li>
                            <li className="project_caption">· Guideline shows the highlights of the sample picture;</li>
                            <li className="project_caption">· Tags on the screen will directly work as reminders and hints to guide the photographer.</li>
                            </ul>
                            </Col>
                        </Row>
                        <Row className="align-items-center justify-content-around">
                            <Col xs={12} sm={12} md={6} lg={6}>
                            <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/tag.png"} />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                            <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/tag_2.png"} />
                            </Col>
                            <Col xs={10} sm={10} md={5} lg={5}>
                            <p className="project_caption">· When shooting, users can easily add, edit, delete tags on screen; frequently-used tags can be saved deliberately or automatically for easy access</p>
                            </Col>
                            <Col xs={10} sm={10} md={5} lg={5}>
                            <p className="project_caption">· Users can attach tags or edit photo providers' tages in advance</p>
                            </Col>
                        </Row> 

                    </Container>
                    <div className="divider"></div>

                    <ul>
                        <li>'Pencil': allow the subject to display her expectation on screen with customized guidelines.</li>
                        <li>'Pose': show hit model poses on screen against the immediate surroundings to inspire the subjects</li>
                    </ul>
                    <Row className="align-items-center justify-content-around">
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/pencil.png"} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/PhotoMe/pose.png"} />
                        </Col>
                        <Col xs={10} sm={10} md={5} lg={5}>
                        <p className="project_caption">· 'Pencil' can be used to jot down anything on the screen as a reference to communicate</p>
                        </Col>
                        <Col xs={10} sm={10} md={5} lg={5}>
                        <p className="project_caption">· 'Pose' tool can be used as inspiration and dragged to the screen as reference in discussion</p>
                        </Col>
                    </Row> 
                </section>
                <section className="project_body">
                    <h2>Takeaways</h2>
                    <h5>Computers are not to replace human factors, but to facilitate them.</h5>
                    <h6>We cannot replace humans with machines.</h6>
                    <p>Users are clever. I was worried about the difficulty to match the semi-translucent sample picture to the actual scene. Surprisingly, in testing when the user found that the immediate scene was different from the sample picture. He just grasped the essence of the sample picture's composition and adjusted the angle to and the distance from his subject to imitate that sample picture, even if the picture may end up slightly different from the original one.</p>
                    <h6>We should empower people with technology.</h6>
                    <p>The final design tries to help people better communicate their thoughts by providing common grounds. It doesn't look forward to saving people from verbose talks about how to take that pictures. On the contrary, it serves a prompt to make people talk and talk better.</p>
                </section>
            </div>
            <BackToTopBtn />
        </>)
}


export default PhotoMe;

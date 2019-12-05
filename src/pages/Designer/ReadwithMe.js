import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import LazyLoad from 'react-lazyload';
import ProjectPagination from '../../components/ProjectPagination'



function ReadwithMe() {

    return (
        <>
            <ScrollToTopOnMount />
            <div className="project_head_container">
                <section id="list-item-0" className="project_head">
                    <h1>ReadwithME</h1>
                    <h3>A web application that provides afterschool English reading guidance and instructions to middle school students.</h3>
                    <div className="project_info">February 2018 to January 2019 (1 year), Partially Shipped, Work-In-Progress</div>
                </section>
            </div>
            <div className="project_separator_transparent">
                <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/ReadwithMe/headerImg_2.png"} />
            </div>

            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={3}>
                        <div className="left_bar_wrapper">

                            <div className="project_brief_container">
                                <div className="project_brief_title">Background</div>
                                <div className="project_brief_content">The is a working project of Beijing New Oriental School.</div>
                                <div className="project_brief_title">Project End Goal</div>
                                <div className="project_brief_content">Create a light-weighted entry-level product to make most use of the students' after-school time, so as to reach new customers and expand the market base.</div>
                                <div className="project_brief_title">My Role</div>
                                <div className="project_brief_content">Product & Instructional Designer</div>


                            </div>
                            <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;"
                            // style={{position: "fixed", right: "2vw", bottom: "5vh"}}
                            >
                                <ul className="unset-Sticky" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80"
                                // className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon"
                                >

                                    <li className="uk-l project_brief_content"><a href="#list-item-1">User Research</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-2">Key Insights</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-3">Ideation and Design</a></li>
                                    <li className="uk-l project_brief_content"><a href="#list-item-4">Takeaways</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={9}>
                        

                        <div className="project_container">
                            <section className="project_body" id="list-item-1">
                                <h2>User Research</h2>
                                <p>Based on interviews with 10 families, the afterschool reading experience can be depicted as the following storyboard:</p>
                                <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/ReadwithMe/storyboard.png"} />
                            </section>
                            <section className="project_body" id="list-item-2">
                                <h2>Key Insights</h2>
                                <p>According to these stories, we synthesizes the key insights:</p>
                                <LazyLoad height={200} offset={100} once>
                                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/ReadwithMe/insight.png"} />
                                </LazyLoad>
                            </section>
                            <section className="project_body"  id="list-item-3">
                                <h2>Ideation and Design</h2>
                                <p>In order to better meet the needs of both parent and student, my team decided to modify the afterschool reading experience through three steps: <b>book matching</b>, <b>guided reading</b>, and <b>progress recording</b>.</p>
                                <h6>1. Book Matching</h6>
                                <ul>
                                    <li>We introduced the Lexile Reader Measure Test to assess students’ English reading level</li>
                                    <li>Different books and reading materials are divided into three levels matching the students’ Lexile scores</li>
                                </ul>
                                <LazyLoad height={200} offset={100} once>
                                    <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/ReadwithMe/level.png"} />
                                </LazyLoad>
                                <h6>2. Guided Reading</h6>
                                <ul>
                                    <li className="p-list">Active Learning</li>
                                    <p>The whole learning experience was designed according to E-learning design and language teaching principles. We divided the experience into 4 parts: Independent Reading, Challenge, Guided Reading and Exercise. The exercise part aims at leading students to turn the receptive language skills and knowledge into active use.</p>
                                    <LazyLoad height={200} offset={100} once>
                                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/ReadwithMe/loop.png"} />
                                    </LazyLoad>
                                    <li className="p-list">Gamification</li>
                                    <p>The content of the product should be interesting to students. The learning process is gamified by adding challenge, ranking, and awarding trophies. The words they read and the points they gain from the practice will also work to grow the avatar so as to boost students' motivation.</p>
                                    <LazyLoad height={200} offset={100} once>
                                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/ReadwithMe/gamification.png"} />
                                   </LazyLoad>
                                    <li className="p-list">Fitting into Fragmented Time</li>
                                    <p>We limited the duration of the instruction to 30 minutes. The lessons were also segmented into different parts (aforementioned 4 guided reading steps) so that students can check out between the sections and pick up whenever they want. The courses are offered on HTML-5 pages which are light-weighted and can easily be shared by link or QR code on SNSs. The instructions are given in audio format which is more accessible in situations, such as commuting to school or having a meal.</p>
                                    <li className="p-list">Audio Instructions + Paper Book</li>
                                    <p>The instructions are given in audio format with paper books (bought by students themselves). Audio instructions are more accessible in various contexts. Moreover, it can activate students’ verbal channel and retain their visual attention on the text material when they are annotating. Plus, paper book and audio can also cut down students’ screen time.</p>
                                    <LazyLoad height={200} offset={100} once>
                                        <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/ReadwithMe/audio.png"} />
                                    </LazyLoad>
                                    <li className="p-list">Parents’ Engagement</li>
                                    <p>Parents’ involvement is important for the students, the products request parents’ participation in reading by asking them to film the final presentation project or take part in a family discussion of the reading.</p>
                                    <LazyLoad height={200} offset={100} once>
                                        <img alt='' className="project_illustration_extrasmall" src={process.env.PUBLIC_URL + "/images/ReadwithMe/parentsEngagement.png"} />
                                    </LazyLoad>
                                </ul>
                                <h6>3. Progress recording</h6>
                                <ul>
                                    <li>The product helps parents keep track of students reading time and amount.</li>
                                    <li>Considering students’ reading amount, the product schedules next Lexile test as an assessment of their progress and recommend reading materials according to the new score.</li>
                                    <li>The product provides a corresponding Chinese version of the books, enabling parents to know what their kids are reading and take part in various after reading activities.​</li>
                                </ul>
                                <LazyLoad height={200} offset={100} once>
                                    <img alt='' alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/ReadwithMe/progress.png"} />
                                </LazyLoad>
                            </section>
                            <section className="project_body" id="list-item-4">
                                <h2>Takeaways</h2>
                                <h6>Prioritize important part of the experience.</h6>
                                <p>As an educational service or product designer, one should be able to destruct the learning process and make a design decision to prioritize the parts with the most value, and then take more efforts to customize these parts to meet the needs of different students so as to increase the value of the product. Considering the importance of reading process itself and the advantages of our company in teaching team and curriculum design, we invested most of our time and energy in decomposing the guided reading process and adapting it to a step-by-step doable online curriculum in the self-learning context. On the other hand, we decided to automate the book matching and progress recording process with existed computerized adaptive testing, Lexile test.
                        </p>
                                <h6>Make correct decisions for the users.</h6>
                                <p>Designers should strive to meet user needs, make correct decisions for them instead of blindly catering to user wants. Many parents looked for a solution that can lead their children to read with their hands off. Even if we knew that lack of time is a huge problem faced by these parents, we still believed that parents’ engagement in the reading process is essential for the cultivation of a student’s reading habit and for the development of his or her interest in reading. Therefore, instead of freeing them from the process, the final design includes different steps to involve parents into students’ reading experience.
                        </p>
                            </section>
                        </div>
                    </Col>
                </Row>


            </div>
            <ProjectPagination prevUrl="/work/materialbank" prevName="Material Bank" nextUrl="/work/photome" nextName="PhotoMe"/>

            <BackToTopBtn />
        </>)
}


export default ReadwithMe;

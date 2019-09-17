import React from "react";


function ReadwithMe() {

    return (
        <>
            <div className="project_container">
                <section className="project_head">
                    <h1>ReadwithME</h1>
                    <h3>A web application that provides afterschool English reading guidance and instructions to middle school students.</h3>
                    <div className="project_info">February 2018 to January 2019 (1 year), Partially Shipped, Work-In-Progress</div>
                    <img className="project_headerImg" src={process.env.PUBLIC_URL + "/images/ReadwithMe/headerImg.jpg"} />
                </section>
                <section className="project_body">
                    <h2>Intro</h2>
                    <p>The is a working project of Beijing New Oriental School aiming at providing an afterschool reading guidance and instructions to middle school students so as to expand the market base and reach new customers. My role in the team is <b>product and instructional designer</b>.</p>
                </section>
                <section className="project_body">
                    <h2>Storyboard</h2>
                    <p>Based on interviews with 10 families, the afterschool reading experience can be depicted as the following storyboard:</p>
                    <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/ReadwithMe/storyboard.png"} />
                </section>
                <section className="project_body">
                    <h2>Key Insights</h2>
                    <p>According to these stories, we synthesizes the key insights:</p>
                    <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/ReadwithMe/insight.png"} />
                </section>
                <section className="project_body">
                    <h2>Ideation and Design</h2>
                    <p>In order to better meet the needs of both parent and student, my team decided to modify the afterschool reading experience through three steps: <b>book matching</b>, <b>guided reading</b>, and <b>progress recording</b>.</p>
                    <br />
                    <p><b>1. Book Matching</b></p>
                    <br />
                    <ul>
                        <li className="p">We introduced the Lexile Reader Measure Test to assess students’ English reading level</li>
                        <li className="p">Different books and reading materials are divided into three levels matching the students’ Lexile scores</li>
                    </ul>
                    <img className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/ReadwithMe/level.png"} />
                    <p><b>2. Guided Reading</b></p>
                    <br />
                    <ul>
                        <li className="p"><b>Active Learning</b></li>
                        <p>The whole learning experience was designed according to E-learning design and language teaching principles. We divided the experience into 4 parts: Independent Reading, Challenge, Guided Reading and Exercise. The exercise part aims at leading students to turn the receptive language skills and knowledge into active use.</p>
                        <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/ReadwithMe/loop.png"} />
                        <li className="p p-list"><b>Gamification</b></li>
                        <p>The content of the product should be interesting to students. The learning process is gamified by adding challenge, ranking, and awarding trophies. The words they read and the points they gain from the practice will also work to grow the avatar so as to boost students' motivation.</p>
                        <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/ReadwithMe/gamification.png"} />
                        <li className="p p-list"><b>Fitting into Fragmented Time</b></li>
                        <p>We limited the duration of the instruction to 30 minutes. The lessons were also segmented into different parts (aforementioned 4 guided reading steps) so that students can check out between the sections and pick up whenever they want. The courses are offered on HTML-5 pages which are light-weighted and can easily be shared by link or QR code on SNSs. The instructions are given in audio format which is more accessible in situations, such as commuting to school or having a meal.</p>
                        <li className="p p-list"><b>Audio Instructions + Paper Book</b></li>
                        <p>The instructions are given in audio format with paper books (bought by students themselves). Audio instructions are more accessible in various contexts. Moreover, it can activate students’ verbal channel and retain their visual attention on the text material when they are annotating. Plus, paper book and audio can also cut down students’ screen time.</p>
                        <img className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/ReadwithMe/audio.png"} />
                        <li className="p p-list"><b>Parents’ Engagement</b></li>
                        <p>Parents’ involvement is important for the students, the products request parents’ participation in reading by asking them to film the final presentation project or take part in a family discussion of the reading.</p>
                        <img className="project_illustration_extrasmall" src={process.env.PUBLIC_URL + "/images/ReadwithMe/parentsEngagement.png"} />
                    </ul>
                    <p><b>3. Progress recording</b></p>
                    <br />
                    <ul>
                        <li className="p">The product helps parents keep track of students reading time and amount.</li>
                        <li className="p">Considering students’ reading amount, the product schedules next Lexile test as an assessment of their progress and recommend reading materials according to the new score.</li>
                        <li className="p">The product provides a corresponding Chinese version of the books, enabling parents to know what their kids are reading and take part in various after reading activities.​</li>
                    </ul>
                    <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/ReadwithMe/progress.png"} />
                </section>
                <section className="project_body">
                    <h2>Takeaways</h2>
                    <p><b>Prioritize important part of the experience.</b></p>
                    <p>As an educational service or product designer, one should be able to destruct the learning process and make a design decision to prioritize the parts with the most value and then take more efforts to customize these parts to meet the needs of different students so as to increase the value of the product. Considering the importance of reading process itself and the advantages of our company in teaching team and curriculum design, we invested most of our time and energy in decomposing the guided reading process and adapting it to a step-by-step doable online curriculum in the self-learning context. On the other hand, we decided to automate the book matching and progress recording process with existed computerized adaptive testing, Lexile test.  
                    </p>
                    <br/>
                    <br/>
                    <p><b>Make correct decisions for the users.</b></p>
                    <p>Designers should strive to meet user needs, make correct decisions for them instead of blindly catering to user wants. Many parents looked for a solution that can lead their children to read with their hands off. Even if we knew that lack of time is a huge problem faced by these parents, we still believed that parents’ engagement in the reading process is essential for the cultivation of a student’s reading habit and for the development of his or her interest in reading. Therefore, instead of freeing them from the process, the final design includes different steps to involve parents into students’ reading experience.
                    </p>
                </section>
            </div>
        </>)
}


export default ReadwithMe;

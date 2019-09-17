import React from "react";
import { Container, Col, Row } from 'react-bootstrap';



function Weather() {

    return (
        <>
            <div className="project_container">
                <section className="project_head">
                    <h1>Weather</h1>
                    <h3>Alerts users to weather changes that will disturb their intended activities.</h3>
                    <div className="project_info">October to November 2018 (1 month), Bootcamp Individual Project</div>
                    <img alt='' className="project_headerImg" src={process.env.PUBLIC_URL + "/images/Weather/headerImg.png"} />
                </section>
                <section className="project_body">
                    <h2>Intro</h2>
                    <p>It was cloudy that day. I left home, got on an ofo bike and headed for the metro station, where I bored into the underground world. One mile. Twenty-two stops. Two transfers. I shuttled between the far east and the far west of Beijing.</p>
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/Weather/intro_1.png"} />
                    <p>When I went off the train and stood on the rising escalator, the chill and humid air jerked me out of the trance. Peering through the crowd at the entrance, I saw the dark gray sky and water pouring down.</p>
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/Weather/intro_2.png"} />
                    <p>People were looking up at the sky, waiting, stamping about. A peddler came, selling umbrella and raincoat at three times the price. I didn’t bring my own umbrella with me, so I paid for the unsightly, orange umbrella, walked for 10 minutes to my company, and put it down beside the other two similar ones in orange and turquoise.</p>
                    <br/>
                    <p>I had the Weather app in my iPhone, but it didn’t stop this from happening or even repeating. <b>How could I redesign the Weather app to improve the experience?</b></p>
                </section>
                <section className="project_body">
                    <h2>Problem Space</h2>
                    <p>I talked with people from different age groups, cities and industries about weather. I asked:</p>
                    <ul>
                        <li className="p" style={{"listStyleType": "circle"}}>What and why did you want to know about weather?</li>
                        <li className="p" style={{"listStyleType": "circle"}}>Have weather ever made any trouble to your life?</li>
                    </ul>
                    <p>I heard these different stories about people’s encounter with weather information and weather itself. These stories shed a new light on my understanding of weather information.</p>
                    <div className="divider"></div>
                    <ul>
                        <li className="p"><b>People pay attention to changes, to difference.</b></li>
                        <br/>
                        <p>80% of the users of weather app spend less than 3 seconds on every visit*. When people scan through the weather information, they pay more attention to changes, in other words, differences, abnormality. Then quickly take in such information and do the math in their mind.</p>
                        <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/Weather/changes.png"} />
                        <p className="project_caption">*According to data from Wuyou Weather, a Chinese weather app on android.</p>
                        <div className="divider"></div>

                        <li className="p"><b>What matters is people's intended activities underlying the request for weather info.</b></li>
                        <br/>
                        <p>People asking for weather information is not out of interest or curiosity to those index, data, but out of the wish to complete their intended activities. They try to prepare for weather changes that may interfere with these actions and plans.</p>
                        <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/Weather/tension.png"} />
                        <div className="divider"></div>

                        <li className="p"><b>Weather is not the motivation of one’s action, but a condition.</b></li>
                        <br/>
                        <p>People asking for weather information is not out of interest or curiosity to those index, data, but out of the wish to complete their intended activities. They try to prepare for weather changes that may interfere with these actions and plans.</p>
                        <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/Weather/quote.png"} />
                        <p>Weather information cannot decide what people want to wear tomorrow or what they desire to do this weekend. It is people that make these decisions. Weather just encourages or discourages such intention. Even for daily activities, people only pay attention to the weather when it may create some troubles to their intended actions (e.g. going to work, going back home).</p>
                        <div className="divider"></div>

                    </ul>

                    <p>So 'Weather' should <b><span style={{"textDecoration": "underline"}}>① understand</span></b> what users want to do and what weather changes will interfere with their intended activities, then <b><span style={{"textDecoration": "underline"}}>② deliver</span></b> that information to users and help them prepare for those changes.</p>
                </section>
                <section className="project_body">
                    <h2>Ideation and Design</h2>
                    <p>① How might we <b style={{"textDecoration": "underline"}}>understand</b> what people want to do and what weather information is needed?​</p>
                    <br />
                    <br />
                    <p><b>1. 'Weather' understand user's intended activities by getting access to user's data on the device</b></p>
                    <br />
                    <ul>
                        <li className="p"><b>Detect/predict</b> the user’s intended activities with user profiles and data</li>
                        <li className="p"><b>Define</b> and extract needed weather information according to user profiles and data</li>
                        <li className="p"><b>Align</b> needed weather information with these activities</li>
                    </ul>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/Weather/culture_map.png"} />
                    <ul style={{"marginTop": "1em","marginBottom": "2em"}}>
                        <p className="project_caption" style={{"margin": "0.5em"}}>For example, </p>
                        <li className="project_caption" style={{"margin": "0.5em"}}>① Weather can tap into the data in Health app on the device to analyze the user's plan: approximate time when the user get up, leave home and go home.</li>
                        <li className="project_caption" style={{"margin": "0.5em"}}>② Then, apart from temperature and weather information, based on the user profile set up when sign in, Weather knows that  the user's concerns: she is a female, who generally care more about UV index than man, locates in Beijing where pollution is big problem, and usually rides a bike to work, which may be influenced by rain and wind.</li>
                        <li className="project_caption" style={{"margin": "0.5em"}}>③ Accordingly, Weather can match these related weather information and forward them to the user before they leave home so that they can get prepared.</li>
                    </ul>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/Weather/culture_map_2.png"} />
                    <p><b>2. Users can tell Weather their plans and set alert of weather changes.</b></p>
                    <br />
                    <ul>
                        <li className="p"><b>Plan</b>: tell Weather your planned trip and it will help you keep track of weather info</li>
                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/Weather/Plan.png"} />
                        <li className="p"><b>Care</b>: tell Weather the locations of your families and friends and it can help you start a chat with them</li>
                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/Weather/Care.png"} />
                    </ul>
                    <p>② How might we <b style={{"textDecoration": "underline"}}>get, understand and react</b> to that information so that they can get prepared?​</p>
                    <p>How to deliver the information depends on users' behaviors and habits. Users of Weather app fall into two kinds: Habitual user and Infrequent user.</p>
                    <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/Weather/habitual_user.jpg"} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/Weather/infrequent_user.jpg"} />
                        </Col>
                    </Row>
                    </Container>
                    <p>To relieve the pain points of each of these users, the app focuses on:</p>
                    <ul>
                        <li className="p"><b>delivering</b> weather information in routine and proper form to <span style={{"textDecoration": "underline"}}>habitual users</span>, help them <b>understand</b> the information and <b>remind</b> them to get prepared.</li>
                        <li className="p"><b>alerting</b> <span style={{"textDecoration": "underline"}}>infrequent users</span> to weather changes and <b>guide</b> them to get prepared:</li>
                    </ul>
                    <div className="divider"></div>

                    <p><b>1. Home Screen Design: arrange information hierarchy according to users' attention</b></p>
                    <p>The existing Weather app attaches more importance to Real-time weather information, showing the temperature and weather now in a large font size at top and middle of the screen. However, people actually focus more on weather changes, i.e. range of temperature, 24-hour weather report, when they check the daily weather; they focus more on 9-day forecast when they plan an outdoor activity. And these two usages are the most common ones.</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/Weather/homescreen_analysis.jpg"} />
                    <p>So the redesign will reduce the emphasis on real-time weather information and <b>highlight</b> changes: temperature range, the maximum and minimum temperature, curve of temperature.</p>
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/Weather/homescreen.png"} />
                    <div className="divider"></div>

                    <p><b>2. Convey Feeling Via Screen: visualize feeling and provide references</b></p>
                    <p>Sometimes users find it hard to imagine the temperature of the destination since the feeling of temperature is intangible and is hard to convey via a screen. In order to help users interpret temperature, 'Weather' provides <b>visual hints</b>: real-time street view of the destination and how local people are dressed, and provides references: <b>comparing</b> the temperature of their home city with the destination.</p>
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/Weather/visualize.png"} />
                    <div className="divider"></div>

                    <p><b>3. Alert Design Principle: keep it simple, contextual, optional</b></p>
                    <p>Most infrequent users seldom open the app. In order to help them get prepared for weather changes, 'Weather' provides them with necessary and timely information in form of alerts.</p>
                    <br/>
                    <p>3.1 As brief information feed, they should be <b>legible and terse</b>.</p>
                    <img alt='' className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/Weather/alert_text.png"} />
                    <br/>
                    <p>3.2 Since alerts are considered as distractions, to be less intrusive, they should <b>show up ONLY when when weather information is needed.</b>.</p>
                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/Weather/alerts.png"} />
                    <br/>
                    <p>3.3 3) Users should be given the freedom to <b>control</b> the form, frequency, and situations of the alerts.</p>
                    <img alt='' className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/Weather/stop_alerts.png"} />
                    
                </section>
                <section className="project_body">
                    <h2>Takeaways</h2>
                    <p><b>Design assumptions should always be validated by users</b></p>
                    <p>I invited designers and users to test my design and their critiques opened up a new understanding of people’s behaviors to me. For example, a user questioned my design that asked a user to press a button to set an alert for weather changes, by comparing it with forgetting to turn an alarm clock on. This discussion offered insight into of people’s concern about the weather: it is not a whim but a habit. So I changed the alert button to a default setting based on several sign-in questions and users’ data and provided a shortcut for users to temporarily or permanently stop the alerts.</p>
                    <br/>
                    <br/>
                    <p><b>Professional critiques are valuable.</b></p>
                    <p>Besides user testing, advice from other designers is important. My discussion with several UX designer about whether Apple users are accustomed to frequent alerts led me to reconsider the different design environments and user habits. Finally, I decided to provide weather information when people are using Calendar in form of a weather brief embedded in the Calendar, instead of a pop-up notification. </p>
                </section>
            </div>
        </>)
}


export default Weather;

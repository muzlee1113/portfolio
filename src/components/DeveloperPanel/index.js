
import React from "react";
import {
    Link 
} from "react-router-dom";
import Fade from 'react-reveal/Fade';


function DeveloperPanel(){

    return(
        <section className="cards" id="developer_panel">
            {/* <article>
                    <Link to="#">
                        <div className="cardcontainer" >
                            <img alt=''  className="article-img" src={process.env.PUBLIC_URL + "/images/placeholder_smartEdu.png"} alt=" "/>
                            <div className="shade"></div>
                            <p className="tbdOverlay">In Progress</p>
                            <div className="overlay" id="imgTeacher">
                                <div className="article-title">
                                    <div>GoodTeacher</div>
                                    <div className="article-subtitle">A native app that helps middle school teachers to share just-in-time & meaningful performance-based assessment to students and parents.</div>
                                    <div className="article-subtitle">User Research | UX Design | React Native | Serverless | MongoDB Stitches</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <a className="code_link" href="https://github.com/muzlee1113/edu">
                        <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                    </a>
            </article>
            <article>
                    <Link to="#">
                        <div className="cardcontainer" >
                            <img alt=''  className="article-img" src={process.env.PUBLIC_URL + "/images/Movie_Hunter_Card.png"} alt=" "/>
                            <div className="shade"></div>
                            <p className="tbdOverlay">In Progress</p>
                            <div className="overlay" id="imgMovie" >
                                <div className="article-title" style={{"color":"black"}}>
                                    <div>Movie Hunter</div>
                                    <div className="article-subtitle">A movie recomendation web application that boosting by machine learning.</div>
                                    <div className="article-subtitle">UI Design | React | Node.js | APIs</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <a className="code_link" href="https://github.com/muzlee1113/moviehunter">
                        <img className="code invert" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                    </a>
            </article> */}
            <Fade bottom>
                <article>
                    <a href="https://upliftlocally.com/">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/upliftlocally.png"} alt=" "/>
                            <div className="overlay" id="imgUplift">
                                <div className="article-title">
                                    <div>Uplift Locally</div>
                                    <div className="article-subtitle">A website that supports local black-owned businesses.</div>
                                    <div className="article-subtitle">React</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="code_link" href="https://github.com/devinajimine/uplift">
                        <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                    </a>
                </article>
            </Fade>
            <Fade bottom>
                <article>
                <Link to="/work/WIS">
                    {/* <a href="http://www.whats-in-store.net/"> */}
                        <div className="cardcontainer">
                            <img className="article-img" src={process.env.PUBLIC_URL + "/images/D00WIS.png"} alt=" "/>
                            <div className="overlay" id="imgWIS">
                                <div className="article-title">
                                    <div>What's In Store</div>
                                    <div className="article-subtitle">A helpful tool for people to set up online shop and manage their inventories.</div>
                                    <div className="article-subtitle">React | Express | MongoDB</div>
                                </div>
                            </div>
                        </div>
                    {/* </a> */}
                </Link>
                    <a className="code_link" href="https://github.com/jakescheele/whats-in-store">
                        <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                    </a>
                </article>
            </Fade>
            <Fade bottom>
                <article>
                    <a href="https://pet-park.herokuapp.com/">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Petpark.png"} alt=" "/>
                            <div className="overlay" id="imgPetPark">
                                <div className="article-title">
                                    <div>Pet Park</div>
                                    <div className="article-subtitle">A web tamagotchi game that kids love.</div>
                                    <div className="article-subtitle">Handlebars | MySQL | Express </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="code_link" href="https://github.com/JoshVanOverbeke/Project2">
                        <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                    </a>
                </article>
            </Fade>

            <Fade bottom>
                <article>
                    <a href="https://muzlee1113.github.io/clicky-game/">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Clicky.png"} alt=" "/>
                            <div className="overlay" id="imgFriendFinder">
                                <div className="article-title" style={{"color":"rgba(0,0,0,0.8)"}}>
                                    <div>Face Blindness Terminator</div>
                                    <div className="article-subtitle">A clicky game that cures face blindness.</div>
                                    <div className="article-subtitle">React | Serverless</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="code_link" href="https://github.com/muzlee1113/friendFinder">
                        <img alt='' className="code invert" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                    </a>
                </article>
            </Fade>
            <Fade bottom>
                <article>
                    <a href="https://digestnewsbyyuwen.herokuapp.com/">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Newsdigest.png"} alt=" "/>
                            <div className="overlay" id="imgNews">
                                <div className="article-title">
                                    <div>News Digest</div>
                                    <div className="article-subtitle">A web application that allows users to read, save and note NYT News.</div>
                                    <div className="article-subtitle">Handlebars | Express | MongoDB </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="code_link" href="https://github.com/muzlee1113/newsdigest">
                        <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                    </a>
                </article>
            </Fade>
            
            <Fade bottom>
                <article>
                    <a href="https://giphy-to-me.herokuapp.com/index.html">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Giphytome.png"} alt=" "/>
                            <div className="overlay" id="imgGiphy">
                                <div className="article-title">
                                    <div>GiphyToMe</div>
                                    <div className="article-subtitle">A facial recognition application that generates gifs and text according to the
                                        physical attributes of the uploaded image.</div>
                                    <div className="article-subtitle">HTML/CSS | JQuery | APIs</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="code_link" href="https://github.com/cvanglee/House-Martell">
                        <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                    </a>
                </article>
            </Fade>
            <Fade bottom>

                <article>
                    <a href="https://giftasticpage.herokuapp.com/index.html">
                        <div className="cardcontainer">
                            <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Giftastic.png"} alt=" "/>
                            <div className="overlay" id="imgGifTastic">
                                <div className="article-title">
                                    <div>GifTastic</div>
                                    <div className="article-subtitle">A website that allows users search trendy gifs of their favorite characters.</div>
                                    <div className="article-subtitle">HTML/CSS | JQuery | APIs</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="code_link" href="https://github.com/muzlee1113/GifTastic">
                        <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                    </a>
                </article>
            </Fade>
        </section>
    )
}

export default DeveloperPanel
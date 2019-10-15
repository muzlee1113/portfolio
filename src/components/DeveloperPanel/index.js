
import React from "react";
import {
    Link 
} from "react-router-dom";


function DeveloperPanel(){

    return(
        <section className="cards" id="developer_panel">
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
                <a href="https://github.com/jakescheele/whats-in-store">
                    <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://pet-park.herokuapp.com/">
                    <div className="cardcontainer">
                        <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Petpark.png"} alt=" "/>
                        <div className="overlay" id="imgPetPark">
                            <div className="article-title">
                                <div>Pet Park</div>
                                <div className="article-subtitle">A web tamagotchi game that kids love.</div>
                                <div className="article-subtitle">Handlebars | SQL | Express </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/JoshVanOverbeke/Project2">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
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
                <a href="https://github.com/muzlee1113/newsdigest">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://findfriendbyyuwen.herokuapp.com/">
                    <div className="cardcontainer">
                        <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00FriendFinder.png"} alt=" "/>
                        <div className="overlay" id="imgFriendFinder">
                            <div className="article-title" style={{"color":"black"}}>
                                <div>Friend Finder</div>
                                <div className="article-subtitle">A website to match users with their soul mate by a survey.</div>
                                <div className="article-subtitle">Node.js | MySQL | Express</div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/friendFinder">
                    <img alt='' className="code invert" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
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
                <a href="https://github.com/cvanglee/House-Martell">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
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
                <a href="https://github.com/muzlee1113/GifTastic">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
        </section>
    )
}

export default DeveloperPanel
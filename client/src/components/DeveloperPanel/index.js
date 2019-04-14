
import React from "react";


function DeveloperPanel(){

    return(
        <section className="cards" id="developer_panel">
            <article>
                <a href="http://www.whats-in-store.net/">
                    <div className="cardcontainer">
                        <img className="article-img" src={process.env.PUBLIC_URL + "/images/D00WIS.png"} alt=" "/>
                        <div className="overlay" id="img13">
                            <div className="article-title">
                                <h5><b>What's In Store</b></h5>
                                <h6>A tool for business owner to manage their inventories online.</h6>
                                <h6>React | Express | MongoDB</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/jakescheele/whats-in-store">
                    <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://pet-park.herokuapp.com/">
                    <div className="cardcontainer">
                        <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00Petpark.png"} alt=" "/>
                        <div className="overlay" id="img11">
                            <div className="article-title">
                                <h5><b>Pet Park</b></h5>
                                <h6>A web tamagotchi game that kids love.</h6>
                                <h6>Handlebars | SQL | Express </h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/JoshVanOverbeke/Project2">
                    <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://digestnewsbyyuwen.herokuapp.com/">
                    <div className="cardcontainer">
                        <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00Newsdigest.png"} alt=" "/>
                        <div className="overlay" id="img12">
                            <div className="article-title">
                                <h5><b>News Digest</b></h5>
                                <h6>A web application that allows users to read, save and note NYT News.</h6>
                                <h6>Handlebars | Express | MongoDB </h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/newsdigest">
                    <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://googlebooksbyyuwen.herokuapp.com/">
                    <div className="cardcontainer">
                        <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00GoogleBook.png"} alt=" "/>
                        <div className="overlay" id="img1">
                            <div className="article-title" style={{"color":"black"}}>
                                <h5><b>Google Book</b></h5>
                                <h6>A web application that allow users to search and save books.</h6>
                                <h6>React| MongoDB | Express</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/googlebooks">
                    <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://findfriendbyyuwen.herokuapp.com/">
                    <div className="cardcontainer">
                        <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00FriendFinder.png"} alt=" "/>
                        <div className="overlay" id="img9">
                            <div className="article-title" style={{"color":"black"}}>
                                <h5><b>Friend Finder</b></h5>
                                <h6>A website to match users with their soul mate by a survey.</h6>
                                <h6>Node.js | MySQL | Express</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/friendFinder">
                    <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://giphy-to-me.herokuapp.com/index.html">
                    <div className="cardcontainer">
                        <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00Giphytome.png"} alt=" "/>
                        <div className="overlay" id="img5">
                            <div className="article-title">
                                <h5><b>GiphyToMe</b></h5>
                                <h6>A facial recognition application that generates gifs and text according to the
                                    physical attributes of the uploaded image.</h6>
                                <h6>HTML/CSS | JQuery | APIs</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/cvanglee/House-Martell">
                    <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://giftasticpage.herokuapp.com/index.html">
                    <div className="cardcontainer">
                        <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00Giftastic.png"} alt=" "/>
                        <div className="overlay" id="img3">
                            <div className="article-title">
                                <h5><b>GifTastic</b></h5>
                                <h6>A website that allows users search trendy gifs of their favorite characters.</h6>
                                <h6>HTML/CSS | JQuery | APIs</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/GifTastic">
                    <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://drive.google.com/open?id=1PDLzrk75R6gNyPMB3-_W_WywX-euxVJa">
                    <div className="cardcontainer">
                        <img className="article-img" src={process.env.PUBLIC_URL+"/images/D00Bamazon.png"} alt=" "/>
                        <div className="overlay" id="img8">
                            <div className="article-title">
                                <h5><b>Bamazon</b></h5>
                                <h6>A node.js application that run to simulate Amazon with customer, manager and
                                    supervisor mode.</h6>
                                <h6>Node.js | MySQL</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/bamazon">
                    <img className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
        </section>
    )
}

export default DeveloperPanel

import React from "react";


function DeveloperPanel(){

    return(
        <section className="cards" id="developer_panel">
            <article>
                <a href="http://www.whats-in-store.net/">
                    <div className="cardcontainer">
                        <img alt='' className="article-img" src={process.env.PUBLIC_URL + "/images/D00WIS.png"} alt=" "/>
                        <div className="overlay" id="imgWIS">
                            <div className="article-title">
                                <h5>What's In Store</h5>
                                <h6>A tool for business owner to manage their inventories online.</h6>
                                <h6>React | Express | MongoDB</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/jakescheele/whats-in-store">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://pet-park.herokuapp.com/">
                    <div className="cardcontainer">
                        <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Petpark.png"} alt=" "/>
                        <div className="overlay" id="imgPetPark">
                            <div className="article-title">
                                <h5>Pet Park</h5>
                                <h6>A web tamagotchi game that kids love.</h6>
                                <h6>Handlebars | SQL | Express </h6>
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
                                <h5>News Digest</h5>
                                <h6>A web application that allows users to read, save and note NYT News.</h6>
                                <h6>Handlebars | Express | MongoDB </h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/newsdigest">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://googlebooksbyyuwen.herokuapp.com/">
                    <div className="cardcontainer">
                        <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00GoogleBook.png"} alt=" "/>
                        <div className="overlay" id="imgGoogleBook">
                            <div className="article-title" style={{"color":"black"}}>
                                <h5>Google Book</h5>
                                <h6>A web application that allow users to search and save books.</h6>
                                <h6>React| MongoDB | Express</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/googlebooks">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://findfriendbyyuwen.herokuapp.com/">
                    <div className="cardcontainer">
                        <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00FriendFinder.png"} alt=" "/>
                        <div className="overlay" id="imgFriendFinder">
                            <div className="article-title" style={{"color":"black"}}>
                                <h5>Friend Finder</h5>
                                <h6>A website to match users with their soul mate by a survey.</h6>
                                <h6>Node.js | MySQL | Express</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/friendFinder">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://giphy-to-me.herokuapp.com/index.html">
                    <div className="cardcontainer">
                        <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Giphytome.png"} alt=" "/>
                        <div className="overlay" id="imgGiphy">
                            <div className="article-title">
                                <h5>GiphyToMe</h5>
                                <h6>A facial recognition application that generates gifs and text according to the
                                    physical attributes of the uploaded image.</h6>
                                <h6>HTML/CSS | JQuery | APIs</h6>
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
                                <h5>GifTastic</h5>
                                <h6>A website that allows users search trendy gifs of their favorite characters.</h6>
                                <h6>HTML/CSS | JQuery | APIs</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/GifTastic">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
            <article>
                <a href="https://drive.google.com/open?id=1PDLzrk75R6gNyPMB3-_W_WywX-euxVJa">
                    <div className="cardcontainer">
                        <img alt='' className="article-img" src={process.env.PUBLIC_URL+"/images/D00Bamazon.png"} alt=" "/>
                        <div className="overlay" id="imgBamazon">
                            <div className="article-title" style={{"color":"black"}}>
                                <h5>Bamazon</h5>
                                <h6>A node.js application that run to simulate Amazon with customer, manager and
                                    supervisor mode.</h6>
                                <h6>Node.js | MySQL</h6>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/muzlee1113/bamazon">
                    <img alt='' className="code" src={process.env.PUBLIC_URL+"/images/code.png"} alt=" "/>
                </a>
            </article>
        </section>
    )
}

export default DeveloperPanel
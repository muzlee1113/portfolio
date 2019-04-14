import React from "react";


function DesignerPanel () {
    
    return (
        
        <section className="cards show" id="designer_panel">
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
        </section>
    )}


export default DesignerPanel;

import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import WorkCard from '../components/WorkCard'

function DesignSystem() {

    return (<>
            <div className="project_overall_container">
                <Row>
                    <Col md={12} lg={4}>
                        <div className="left_bar_wrapper">
                        <div className="project_brief_container">
                            <div className="project_brief_title">Project Brief Title</div>
                            <div className="project_brief_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> 
                        </div>
                        <div className="scrollby" style={{"zIndex": "980"}} uk-sticky="offset:100;">
                            <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 180">

                                <li className="nav-li project_brief_content"><a href="#list-item-1">Typography</a></li>
                                <li className="nav-li project_brief_content"><a href="#list-item-2">Paragraph</a></li>
                                <li className="nav-li project_brief_content"><a href="#list-item-3">Cards</a></li>
                                <li className="nav-li project_brief_content"><a href="#list-item-4">#</a></li>
                                <li className="nav-li project_brief_content"><a href="#list-item-5">#</a></li>
                                <li className="nav-li project_brief_content"><a href="#list-item-8">#</a></li>
                            </ul>
                        </div>
                        </div>
                        
                    
                    </Col>
                    <Col md={12} lg={8}>
                        <section id="list-item-1" >
                            <h1 >Typography</h1>
                            <h1 style={{"margin":"1em 0 1em 0"}}>Heading1</h1>
                            <h2 style={{"margin":"1em 0 1em 0"}}>Heading2</h2>
                            <h3 style={{"margin":"1em 0 1em 0"}}>Heading3</h3>
                            <h4 style={{"margin":"1em 0 1em 0"}}>Heading4</h4>
                            <h5 style={{"margin":"1em 0 1em 0"}}>Heading5</h5>
                            <h6 style={{"margin":"1em 0 1em 0"}}>Heading6</h6>
                            <p style={{"margin":"1em 0 1em 0"}}>Body</p>
                            <p className="project_info" style={{"margin":"1em 0 1em 0"}}>Information</p>
                            <p className="project_caption" style={{"margin":"1em 0 1em 0"}}>Caption</p>
                        </section>
                        <hr/>
                        <section id="list-item-2" >
                        
                        <h1>Project Title</h1>
                        <h3>Project Subtitle</h3>
                        <div className="project_info">Project Infomation</div>
                        </section>
                        <section className="project_body">
                        <h2>Section Indicator</h2>
                        
                        <h5>Section Title</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  
                        <h6>Subtitle One</h6>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Interdum velit euismod in pellentesque massa. Est velit egestas dui id ornare arcu odio ut sem. Lectus proin nibh nisl condimentum. Turpis egestas maecenas pharetra convallis posuere. Eget velit aliquet sagittis id consectetur purus ut faucibus. Nulla facilisi etiam dignissim diam quis enim. Quis lectus nulla at volutpat diam ut. Risus commodo viverra maecenas accumsan lacus vel. Ut placerat orci nulla pellentesque dignissim enim sit amet. Ut sem nulla pharetra diam sit amet nisl.</p>

                        <p>Odio tempor orci dapibus ultrices in iaculis. Lectus vestibulum mattis ullamcorper velit sed. Sed egestas egestas fringilla phasellus faucibus scelerisque. Nunc non blandit massa enim nec dui nunc. Eu nisl nunc mi ipsum faucibus vitae aliquet. Arcu vitae elementum curabitur vitae. Mi eget mauris pharetra et ultrices neque ornare aenean. Pellentesque adipiscing commodo elit at. Vitae sapien pellentesque habitant morbi tristique senectus. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Condimentum id venenatis a condimentum. Ultrices eros in cursus turpis massa tincidunt dui ut. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Consequat nisl vel pretium lectus quam id. Sit amet aliquam id diam maecenas ultricies mi eget mauris.</p>

                        <p>Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Vulputate ut pharetra sit amet aliquam id diam. Velit dignissim sodales ut eu sem integer vitae justo. Pharetra sit amet aliquam id diam maecenas. Eu ultrices vitae auctor eu augue ut lectus. A arcu cursus vitae congue mauris rhoncus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id consectetur purus ut faucibus pulvinar elementum integer. Sem et tortor consequat id. Consequat semper viverra nam libero justo laoreet sit amet. Massa sapien faucibus et molestie ac feugiat sed. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.</p>

                        <p>At ultrices mi tempus imperdiet nulla. Dictum non consectetur a erat nam at. In hac habitasse platea dictumst vestibulum rhoncus est. Maecenas ultricies mi eget mauris pharetra. Aliquam nulla facilisi cras fermentum odio. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Diam sollicitudin tempor id eu. Tortor condimentum lacinia quis vel. Mauris a diam maecenas sed enim ut. Nibh sed pulvinar proin gravida hendrerit lectus a. Egestas congue quisque egestas diam in. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Sed blandit libero volutpat sed cras ornare arcu dui.</p>

                        <p>Mattis aliquam faucibus purus in. Pretium lectus quam id leo in vitae turpis. Tristique et egestas quis ipsum. Justo donec enim diam vulputate ut pharetra sit amet. Pharetra vel turpis nunc eget lorem dolor sed viverra. Dolor sit amet consectetur adipiscing. Bibendum enim facilisis gravida neque convallis a. Consectetur a erat nam at lectus urna. Lectus nulla at volutpat diam ut venenatis tellus. Porttitor eget dolor morbi non arcu risus. Eget aliquet nibh praesent tristique magna sit. Augue neque gravida in fermentum et sollicitudin. Morbi tristique senectus et netus et malesuada fames ac turpis. At tempor commodo ullamcorper a lacus vestibulum sed arcu.</p>   
                        
    
                    
                        
                        <h6>Subtitle One</h6>
                                            
                        <p>Mattis aliquam faucibus purus in. Pretium lectus quam id leo in vitae turpis. Tristique et egestas quis ipsum. Justo donec enim diam vulputate ut pharetra sit amet. Pharetra vel turpis nunc eget lorem dolor sed viverra. Dolor sit amet consectetur adipiscing. Bibendum enim facilisis gravida neque convallis a. Consectetur a erat nam at lectus urna. Lectus nulla at volutpat diam ut venenatis tellus. Porttitor eget dolor morbi non arcu risus. Eget aliquet nibh praesent tristique magna sit. Augue neque gravida in fermentum et sollicitudin. Morbi tristique senectus et netus et malesuada fames ac turpis. At tempor commodo ullamcorper a lacus vestibulum sed arcu.</p>
                        <p>Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Vulputate ut pharetra sit amet aliquam id diam. Velit dignissim sodales ut eu sem integer vitae justo. Pharetra sit amet aliquam id diam maecenas. Eu ultrices vitae auctor eu augue ut lectus. A arcu cursus vitae congue mauris rhoncus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id consectetur purus ut faucibus pulvinar elementum integer. Sem et tortor consequat id. Consequat semper viverra nam libero justo laoreet sit amet. Massa sapien faucibus et molestie ac feugiat sed. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.</p>

                        <p>At ultrices mi tempus imperdiet nulla. Dictum non consectetur a erat nam at. In hac habitasse platea dictumst vestibulum rhoncus est. Maecenas ultricies mi eget mauris pharetra. Aliquam nulla facilisi cras fermentum odio. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Diam sollicitudin tempor id eu. Tortor condimentum lacinia quis vel. Mauris a diam maecenas sed enim ut. Nibh sed pulvinar proin gravida hendrerit lectus a. Egestas congue quisque egestas diam in. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Sed blandit libero volutpat sed cras ornare arcu dui.</p>

                        <p>Mattis aliquam faucibus purus in. Pretium lectus quam id leo in vitae turpis. Tristique et egestas quis ipsum. Justo donec enim diam vulputate ut pharetra sit amet. Pharetra vel turpis nunc eget lorem dolor sed viverra. Dolor sit amet consectetur adipiscing. Bibendum enim facilisis gravida neque convallis a. Consectetur a erat nam at lectus urna. Lectus nulla at volutpat diam ut venenatis tellus. Porttitor eget dolor morbi non arcu risus. Eget aliquet nibh praesent tristique magna sit. Augue neque gravida in fermentum et sollicitudin. Morbi tristique senectus et netus et malesuada fames ac turpis. At tempor commodo ullamcorper a lacus vestibulum sed arcu.</p>   
                
                        </section>

                        <section className="project_body" id="list-item-3" >
                            <h1>Cards</h1>
                            <WorkCard url='/work/IoT' imgUrl='/images/IoT/mockup_multiscreens.png' name='An IoT-based smart city infrastructure management tool' tagline='Improve the usability of IoT network in real-world contexts.' description='UX Design | Usability Testing' bgColor="#f8f8f8" tColor="#0f0f0f"/>
                        </section>
                    
                    </Col>
                </Row>
            </div>
            
    </>)
}


export default DesignSystem;

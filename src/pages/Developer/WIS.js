import React from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount"
import BackToTopBtn from "../../components/BackToTopBtn"
import ProjectPagination from '../../components/ProjectPagination'





function WIS() {

    return (<>
        <ScrollToTopOnMount />
        <div className="project_head_container">
            <section className="project_head">
                <ButtonToolbar>
                    <OverlayTrigger
                        key="right"
                        placement="right"
                        overlay={
                            <Tooltip id="right">
                                Deployed Website.
                    </Tooltip>
                        }
                    >
                        <a href="http://www.whats-in-store.net/" className="hi_a"><h1>What's In Store <i className="fas fa-link ml-2"></i></h1></a>
                    </OverlayTrigger>
                </ButtonToolbar>

                <h3>A helpful tool for people to set up online shop and manage their inventories.</h3>
                <div className="project_info">April, 2019 (15 days), Workshop Project</div>

            </section>
        </div>
        <div className="project_separator_transparent">
            <img className="project_headerImg" src={process.env.PUBLIC_URL + "/images/WIS/WIS_done.png"} />
        </div>

        <div className="project_overall_container">
            <Row>
                <Col md={12} lg={3}>
                    <div className="left_bar_wrapper">

                        <div className="project_brief_container">
                            <div className="project_brief_title">Background</div>
                            <div className="project_brief_content">This is the final capstone of the full-stack web development boot camp offered by University of Minnesota.</div>
                            <div className="project_brief_title">My Role</div>
                            <div className="project_brief_content">UX designer & front-end developer</div>
                        </div>
                        <div className="scrollby" style={{ "zIndex": "980" }} uk-sticky="offset:100;">
                            <ul className="unset-Sticky" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80">

                                <li className="uk-l project_brief_content"><a href="#list-item-1">Intro</a></li>
                                <li className="uk-l project_brief_content"><a href="#list-item-2">Team Member and Role</a></li>
                                <li className="uk-l project_brief_content"><a href="#list-item-3">Research & Ideation</a></li>
                                <li className="uk-l project_brief_content"><a href="#list-item-4">UX Design</a></li>
                                <li className="uk-l project_brief_content"><a href="#list-item-5">Data Set</a></li>
                                <li className="uk-l project_brief_content"><a href="#list-item-6">Cool Snippets</a></li>
                                <li className="uk-l project_brief_content"><a href="#list-item-7">To Dos</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md={12} lg={9}>
                    <div className="project_container">
                    

                        <section className="project_body" id="list-item-1">
                            <h2>Intro</h2>
                            <p>We all know someone who has a small business, a big project requiring many supplies, or maybe they are a ‘collector’ of many things. These are ideas people, doers, collectors, oftentimes organized by disparate pieces of paper, notes in their cell phones, and Excel documents at best. We knew the need, and wanted to create an <b>easy-to-use</b> tool to manage their inventories, changes, and upcoming strategies to meet goals they set.</p>
                            <img className="project_illustration_medium" src={process.env.PUBLIC_URL + "/images/WIS/intro.png"} />
                            <ul></ul>
                        </section>
                        
                        

                        <section className="project_body" id="list-item-2">
                            <h2>Team Members & Roles</h2>
                            <ul>
                                <li className="p"><b>Jake Scheele</b>: back-end developer working on Cloudinary, database and product api routes</li>
                                <li className="p"><b>Jon Hernandez</b>: back-end developer working on Passport, database and user api routes</li>
                                <li className="p"><b>Emily Casale</b>: UI | UX designer & front-end developer working on design system and styling</li>
                                <li className="p"><b>Hannah Schuelke</b>: front-end developer working on login, signup and user profile</li>
                                <li className="p"><b>Yuwen Li</b>: UI | UX designer & front-end developer working on UX flows, front-end logics and axios</li>
                            </ul>
                            <p>My job focus on the front end, using React.js to create the dashboard, inventory page, product and category modal, sorting and filtering functions and promotion page.</p>
                        </section>
                        
                        

                        <section className="project_body" id="list-item-3">
                            <h2>Research & Ideation</h2>
                            <p>We based our design on a close study of AJ Taft, owner of Entheos Vibrations, a local small business in Minneapolis producing and selling lapel pins, sublimated  clothing, wire wrapped jewelry and hats.</p>
                            <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/research.png"} />
                            <p>Over the last year, inventory has tripled and AJ found himself needing a better way to keep track of his business than paper and pen. In research we found the following needs of small business owners:</p>
                            <br />
                            <ul>
                                <li className="p"><b>An easy way to keep track of the inventory and sales</b></li>
                                <p>When he was not working on site (such as concert) to sell products, AJ spent most of his time managing his online shop, checking and updating stocks and sales of different products. Some of these steps are logically correlated but actually achieved separately and manually.</p>
                                <br />
                                <li className="p"><b>An one-step checkout process</b></li>
                                <p>When working on site, AJ needs to checkout a product as quickly as possible so that the customers will not wait for a long time. And hopefully, he wants to finish the transaction online instead of doing the accounting in a busy and chaotic selling booth.</p>
                            </ul>
                            <br />
                            <p>Thus, based on the research, we define three basic functions of the application: dashbaord, inventory and promotions</p>
                            <ul>
                                <li className="p"><b>Dashboard</b>: dynamically displaying stock and sales data</li>
                                <li className="p"><b>Inventory</b>: business owner can easily find and manage stocks of individual products</li>
                                <li className="p"><b>Promotions</b>: business owner can easily manage special price changes</li>
                            </ul>
                        </section>
                        
                        

                        <section className="project_body" id="list-item-4" >
                            <h2>UX Design</h2>
                            <p>We wireframed the application to visualize the main functions:</p>
                            <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/wireframe.png"} />
                            <p>There are several practices we pay special attention to when prototyping in order to improve user experience:</p>
                            <br />
                            <ul>
                                <li className="p"><b>Keep Users in the Process Flow</b></li>
                                <p>One-Page Application: to avoid disrupting the user's mental flow, we keep the application in one page using tabs. So users can stay on the same page throughout the process and focus on their tasks</p>
                                <p>Overlays to Provide Additional Info: in order to help business owner to manage their inventory intuitively and within few steps, our design use modals as the main way to show detailed info and main console panel for possible actions without jumping out of the flow.</p>
                                <br />
                                <li className="p"><b>Keep Possible Action Visible</b></li>
                                <p>All actions are visible and accessible using the affordance of different buttons and components: checkboxes for showing or hiding specific categroy, dropdown for sorting, etc.</p>
                                <p>We allow users to edit contents directly in the context instead of in another page. According to Alan Cooper, 'Where there is output, let there be input'. 'Click to edit' is intuitive and straight forward.</p>
                                <br />
                                <li className="p"><b>Show Effect and Feedback Imediately</b></li>
                                <p>Apply Filtering and Sorting in One Click: since filtering and sorting are not irreversible actions, we allow users to manipulate the inventory dom in one click without confirmation.</p>
                                <p>Alert Users to Incorrect Inputs: we elaborate the sign up and log in modals to show users error message when their input does not fit the requirement.</p>
                            </ul>

                        </section>
                        
                        

                        <section className="project_body" id="list-item-5">
                            <h2>Data Set</h2>
                            <img className="project_illustration_small" src={process.env.PUBLIC_URL + "/images/WIS/data_set.png"} />
                            <p>We use MongoDB to keep and manage data which has more flexibility and horizontal Scale and allows nested data set in different format. We manage 1-to-N data relations which basically converge at the user collection.</p>
                        </section>
                        
                        

                        <section className="project_body" id="list-item-6">
                            <h2>Basic Features</h2>
                            
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/add_product.gif"} />
                                
                                <div className="project_caption mt-2" style={{textAlign:"center"}}>Add a product to inventory</div>
                        </section>
                        
                        

                        <section className="project_body" id="list-item-6">
                            <h2>Cool Snippets</h2>
                            <p>Here are some code snippets that I did in the project</p>
                            <br />
                            <ul>
                                <li className="p"><b>Add/Edit Variants, Categories and Subcategories</b></li>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/add_variant.gif"} />
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/add_category.gif"} />
                                <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/snippet_1.png"} />
                                <p>These functions are using similar code. I used spread syntax to do add and update, which turned out to be really handy.</p>
                                <br />
                                <li className="p"><b>Filtering</b></li>
                               
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/filtering.gif"} />
                                <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/snippet_2.png"} />
                                <p>The logic of the filtering funtionality is as below:</p>
                                <p>Firstly, when the whole page as a component is mounted, an axios request will get product data from our database and save them in state on inventory page; </p>
                                <p>Secondly, the above function creates a "filters" object on the state, keeping category_id: true/false pairs inside. When a user check/uncheck a category, the function will be triggered to reset the the value of a specific category id from true to false (or vice versa);</p>
                                <p>Finally, the handleSortedDom function keeps tracking of the filters to fill the "filteredProducts" array on the state with products that belong to that specific category.</p>
                                <br />
                                <li className="p"><b>Sorting</b></li>
                                    <img alt='' className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/sorting.gif"} />
                                <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/WIS/snippet_3.png"} />
                                
                                <p>The handleSorting function will keep track of the dropdown on inventory page and set the "sorting" state with the keywords of how we're going to sort the products (for example, price from low to high). After we set the state, we call the handleSortedDom function which is basically a switch that take in the filteredProducts array and sort the products inside according to the keywords, and finally reset the filteredProducts array in the right order.</p>
                            </ul>
                        </section>
                        
                        

                        <section className="project_body" id="list-item-7">
                            <h2>To Do</h2>
                            <ul>
                                <li className="p">Allows business owner to set up and deploy customer-side of the shop online in one click;</li>
                                <li className="p">Enables the transaction functionality for quick checkout and keeps on track of the total sales and sales of individual product and variant;</li>
                                <li className="p">Better visualizes the inventory using various layouts charts and graphs;</li>
                            </ul>
                        </section>
                        

                    </div>

                </Col>
            </Row>

        </div>
        <ProjectPagination prevUrl="/" prevName="Home" />


        <BackToTopBtn />

    </>)
}


export default WIS;

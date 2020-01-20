function recycle () {
    return (<>
        <section className="project_body" id="secondary">


<h2>Clarify user scope</h2>
<h5>Who are city managers?</h5>
<p>After analyzing the existing product, I found it unclear for whom it is specifically designed. Some features are to help administrators monitor and control infrastructure devices; others are more intended for hardware maintenance team or dev-ops to register and configure devices . All these assorted features were open to every user without differentiating their roles, needs, purposes and workflows.</p>
<p>To clarify the user scope, the following questions need to be answered.</p>
<ul>
    <li>Who might be the users?</li>
    <li>Are there any other stakeholders involved in this process?</li>
    <li>Who are our primary users?</li>
</ul>
<p>To try to answer these questions, I started with secondary research:</p>


<Container>
    <Row>
        <Col style={{ textAlign: "center", justifyContent: "center" }} xs={4}>

            <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/existing_product.png"} />
            <p className="project_caption">Existing product analysis</p>
        </Col>
        <Col style={{ textAlign: "center" }} xs={4}>
            <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/competitive_analysis.png"} />
            <p className="project_caption">Competitive analysis</p>
        </Col>
        <Col style={{ textAlign: "center" }} xs={4}>
            <img className="project_illustration" src={process.env.PUBLIC_URL + "/images/IoT/brainstorm.png"} />
            <p className="project_caption">Brainstorm with PM & engineers</p>
        </Col>
    </Row>
</Container>
<p>Finally, we came up with the following 5 key roles involved in the system and decided to focus on the administrators since they were the ones who need our tool the most to complete their jobs.</p>
<ImageZoom
    image={{
        src: '/images/IoT/5_roles.png',
        alt: '',
        className: 'project_illustration'
    }}

/>

</section>
                   <section  className="project_body" id="contextual">
                   <h2>User Research</h2>
                   <h5>How do administrators work in real life?</h5>
                   <img className="project_illustration_extrasmall" src={process.env.PUBLIC_URL + "/images/IoT/contextual_inquiry.png"} />
                   <Container>
                       <Row>
                       <Col xs={12} md={3}>
                       {/* <div className="project_overview_title">Design Process</div> */}
                               <div className="project_overview_content py-1"><b>Methods</b></div>
                               <div className="project_overview_content">Contextual Inquiry</div>
                           
                           </Col>
                           <Col xs={12} md={6}>
                               <div className="project_overview_content py-1"><b>Participants</b></div>
                               <div className="project_overview_content">2 Administrators of highway light infrastructure</div>
                               <div className="project_overview_content">1 Manager of street lighting at an office park.</div>
           
                           </Col>
                           <Col xs={12} md={3}>
                               <div className="project_overview_content py-1"><b>Questions</b></div>
                               <a className="text_link" href="https://docs.google.com/document/d/1-DEKGzb4zCd3_96tjkcxM2nTRz1ZywvDGmD1vPf86bc/edit?usp=sharing"><small>File link</small></a> 
                           </Col>


                          
                       </Row>
                   </Container>
                   
                   <h6>Key Findings</h6>
                   <p className="project_info">* You can find other artifacts I collected from the user research <a className="text_link" href="https://drive.google.com/drive/folders/1FE6olnNHznTqqrqwLotCCaDFewWmkra1?usp=sharing">here</a>.</p>

                   
                   
                       <ImageZoom
                           image={{
                                   src: '/images/IoT/two_workflows.png',
                                   alt: '',
                                   className: 'project_illustration_small'

                           }}/>
                          
                   <p>I dived deep into what they actually did to complete these responsibilities in the interviews and what are their ultimate goals. Finally, I synthesized the following two workflows along with the pain points in the processes:</p> 
                   <ul>
                       <li>Problem-shooting Workflow</li>
                       <li>Street Light Control Workflow</li>
                   </ul>
                  
                   <p>I then worked on solving the problems in these two workflows with my design.</p>
                                                                             
               </section>
    </>)
}
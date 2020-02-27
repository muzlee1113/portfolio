import React, { Component } from 'react';



export default function Footer(props) {
    return (<>
        <footer>
            <div className="footer_content">
                <p>Made with ☕️ and lovely React by Yuwen Li</p>
                {/* <br/> */}
                <div className="footer_link">
                <a href="https://dribbble.com/Leeven"><i className="fas fa-basketball-ball"></i></a>
                <a href="https://github.com/muzlee1113"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/yuwen-li-176a43105/"><i className="fab fa-linkedin"></i></a>
                <a href="https://medium.com/@muzlee1113"><i className="fab fa-medium"></i></a>
                <a href="mailto:liyuwen@uw.com"><i class="fas fa-envelope"></i></a>
                <a id="resume" href="https://drive.google.com/file/d/1-cxcgx8TkL5t_w83Zd35nrV6Mt4jIjX2/view?usp=sharing"><img alt='' id="resumeBtn" src={process.env.PUBLIC_URL + "/images/resumeBtn.png"} /></a>
                
                </div>
            </div>
        </footer>
        </>)
}



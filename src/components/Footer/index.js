import React, { Component } from 'react';



function Footer() {
    return (<>
        <footer>
            <div className="footer_content">
                <p>© 2019 Yuwen Li</p>
                <br/>
                <div className="footer_link">
                <a href="https://dribbble.com/Leeven"><i className="fas fa-basketball-ball"></i></a>
                <a href="https://github.com/muzlee1113"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/yuwen-li-176a43105/"><i className="fab fa-linkedin"></i></a>
                <a href="https://medium.com/@muzlee1113"><i className="fab fa-medium"></i></a>
                <a href="mailto:liyuwen@uw.com"><i class="fas fa-envelope"></i></a>
                <a id="resume" href="https://drive.google.com/file/d/1PaNEuH9lKhypcMjscnrgsMVocck_Vobz/view?usp=sharing"><img alt='' id="resumeBtn" src={process.env.PUBLIC_URL + "/images/resumeBtn.png"} /></a>
                
                </div>
            </div>
        </footer>
        </>)
}

export default Footer;


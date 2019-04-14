import React from "react";

function LeadingForWork(props) {

    return (
        <section className="leading">
            <p className="leading-bigtext">Hi, I<span className="leading-bigtext" style={{"color": "#DB696A"}}>’</span>m Yuwen Li<span
                className="leading-bigtext" style={{"color": "#DB696A"}}>.</span></p>
            {/* <p className="leading-text">
                UX <span name="designer" onClick={props.changePanel}>Designer</span> & <span name="developer" onClick={props.changePanel}>Developer</span>.
            </p> */}
            <ul className="leading-text">
                <li>UX </li>
                <li className={props.designer} id="designer"><a onClick={props.changePanel} name="designer">Designer</a></li>
                <li>& </li>
                <li className={props.developer} id="developer"><a onClick={props.changePanel} name="developer">Developer</a></li>
                <hr />
            </ul>
        </section>
    )
}

export default LeadingForWork


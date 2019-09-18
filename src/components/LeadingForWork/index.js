import React from "react";

function LeadingForWork(props) {

    return (
        <section className="leading">
            <p className="leading-bigtext">Hi, I<span className="leading-bigtext" style={{"color": "#9D2721"}}>’</span>m Yuwen Li<span
                className="leading-bigtext" style={{"color": "#9D2721"}}>.</span></p>
           
            <ul className="leading-text tabs">
                <li className="tabs-contain" >UX </li>
                <li className="tabs-contain" ><a className={"tabs-controls " + props.designer} onClick={props.changePanel} name="designer">Designer </a></li>
                <li className="tabs-contain" > & </li>
                <li className="tabs-contain" ><a className={"tabs-controls " +  props.developer} onClick={props.changePanel} name="developer">Developer</a></li>
            </ul>
        </section>)
}

export default LeadingForWork


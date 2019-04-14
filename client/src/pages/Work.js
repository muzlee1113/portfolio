import React, {Component} from "react";
import '../index.css';
import LeadingForWork from "../components/LeadingForWork"
import DesignerPanel from "../components/DesignerPanel"
import DeveloperPanel from "../components/DeveloperPanel"




class Work extends Component {
    state={
        panel:"designer",
        designer:"tab active_tab",
        developer:"tab"
    }
    changePanel=(e)=>{
        const name = e.target.name

        this.setState(preState=>{
            let panel = name
            let designer
            let developer
            if(name==="designer"){
                designer="tab active_tab" 
                developer="tab"
            }else if(name==="developer"){
            designer="tab"
            developer="tab active_tab"
        
            }
            return {
                panel,
                designer,
                developer
            }
        })
    }
    render(){
        return (
            <>
            <main>
                <LeadingForWork developer={this.state.developer} designer={this.state.designer} changePanel={this.changePanel} panel={this.state.panel}/>
                {this.state.panel==="designer"?
                <DesignerPanel/>:
                <DeveloperPanel/>}
            </main>
            </>)
    }}


export default Work;

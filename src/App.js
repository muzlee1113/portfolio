import React,  { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Nav from "./components/Nav"
import Footer from "./components/Footer"

// pages
import About from "./pages/About"
import Others from "./pages/Others"
import Design from "./pages/Design"
import Code from "./pages/Code"
import Play from "./pages/Play"
import Journalist from "./pages/Journalist"
import Teacher from "./pages/Teacher"
import Researcher from "./pages/Researcher"
import NoMatch from "./pages/NoMatch"

import ReadwithMe from "./pages/Designer/ReadwithMe"
import PhotoMe from "./pages/Designer/PhotoMe"
import Weather from "./pages/Designer/Weather"
import LightUp from "./pages/Designer/LightUp"
import BoardingPass from "./pages/Designer/BoardingPass"
import IoT from "./pages/Designer/IoTBest"
import IoTDashboard from "./pages/Designer/IoTDashboard"
import IoTNotification from "./pages/Designer/IoTNotification"
import MaterialBank from './pages/Designer/MaterialBank';
import Nightkick from './pages/Designer/Nightkick'
import SW from './pages/Designer/SW'
import QuickHire from './pages/Designer/QuickHire'
import Specs from './pages/Designer/Specs'
import Cor from './pages/Designer/Coronavirus'
import Outbreak from './pages/Designer/Outbreak'
import ABStreet from './pages/Designer/ABStreet';
import TableauPrep from './pages/Designer/TableauPrep';

import WIS from "./pages/Developer/WIS"


import DesignSystem from "./pages/DesignSystem"

import projects from "./components/projects.json"


const projectComponents= {
  IoT,
  IoTDashboard,
  IoTNotification,
  Nightkick,
  SW,
  Specs,
  Outbreak,
  ABStreet
}

let nav = true
let footer = true


class App extends Component {
  


  render() {
    return (<>
      <Router>
        <div uk-sticky="show-on-up: true">
          <Nav display={nav}/>
        </div>
        <Switch>
          <Route exact path="/" render={props => <Design {...props} />} />

          <Route exact path="/design" render={props => <Design {...props} />} />

          <Route exact path="/code" render={props => <Code {...props} />}/>

          <Route exact path="/play" render={props => <Play {...props} />} />

          <Route exact path="/about" render={props => <About {...props} />} />
          {/* design */}
        
          <Route exact path="/work/photome" render={(props)=><PhotoMe pagination={projects.findIndex(project=>project.component==="PhotoMe")} {...props} />} />

          <Route exact path="/work/IoT" render={(props)=><IoT pagination={projects.findIndex(project=>project.component==="IoT")} {...props} />}/>

          <Route exact path="/work/IoTDashboard" render={(props)=><IoTDashboard pagination={projects.findIndex(project=>project.component==="IoT")} {...props} />}/>
    <Route exact path="/work/IoTNotification" render={(props)=><IoTNotification pagination={projects.findIndex(project=>project.component==="IoT")} {...props} />}/>
          <Route exact path="/work/nightkick" render={(props)=><Nightkick pagination={projects.findIndex(project=>project.component==="Nightkick")}  {...props} />} />
          <Route exact path="/work/sw" render={(props)=><SW pagination={projects.findIndex(project=>project.component==="SW")} {...props} />} />
          <Route exact path="/work/specs" render={(props)=><Specs pagination={projects.findIndex(project=>project.component==="Specs")} {...props} />}/>
          <Route exact path="/work/outbreak" render={(props)=><Outbreak pagination={projects.findIndex(project=>project.component==="Outbreak")} {...props} />}/>
          <Route exact path="/work/abstreet" render={(props)=><ABStreet pagination={projects.findIndex(project=>project.component==="ABStreet")} {...props} />} />
          <Route exact path="/work/tableauprep" render={(props)=><TableauPrep pagination={projects.findIndex(project=>project.component==="TableauPrep")} {...props} />}/>
          
          {/* code */}
          <Route exact path="/work/WIS" component={WIS} />
          <Route exact path="/designsystem" component={DesignSystem}/>
          <Route component={NoMatch} />

        </Switch>
        <Footer display={footer}/>
      </Router>
    


    </>);
  }
}



export default App;

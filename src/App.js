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
import IoTZero from "./pages/Designer/IoTZero"
import IoTOne from "./pages/Designer/IoTOne"
import IoTTwo from "./pages/Designer/IoTTwo"
import IoTThree from "./pages/Designer/IoTThree"

import MaterialBank from './pages/Designer/MaterialBank';
import Nightkick from './pages/Designer/Nightkick'
import SW from './pages/Designer/SW'

import WIS from "./pages/Developer/WIS"


import DesignSystem from "./pages/DesignSystem"








class App extends Component {
  render() {
    return (<>
      <Router>
        <div uk-sticky="show-on-up: true">
          <Nav />
        </div>
        <Switch>
          <Route exact path="/"
            render={props => <Design {...props} />}
          />

          <Route exact path="/design"
            render={props => <Design {...props} />}
          />

          <Route exact path="/code"
            render={props => <Code {...props} />}
          />

          <Route exact path="/play" render={props => <Play {...props} />} />

          <Route exact path="/journalist" render={props => <Journalist {...props} />} />

          <Route exact path="/researcher" render={props => <Researcher {...props} />} />

          <Route exact path="/teacher" render={props => <Teacher {...props} />} />
          {/* <Route exact path="/others"
            render={props => <Others {...props} />} /> */}

          <Route exact path="/about"
            render={props => <About {...props} />}
          />
          {/* design */}

          <Route exact path="/work/readwithme" component={ReadwithMe} />
          <Route exact path="/work/photome" component={PhotoMe} />
          <Route exact path="/work/weather" component={Weather} />
          <Route exact path="/work/lightup" component={LightUp} />
          <Route exact path="/work/boardingpass" component={BoardingPass} />
          <Route exact path="/work/IoT" component={IoT}/>
          <Route exact path="/work/IoT/research" component={IoTZero}/>
          <Route exact path="/work/IoT/datavis" component={IoTOne}/>
          <Route exact path="/work/IoT/infonav" component={IoTTwo}/>
          <Route exact path="/work/IoT/sysimg" component={IoTThree}/>
          <Route exact path="/work/materialbank" component={MaterialBank} />
          <Route exact path="/work/nightkick" component={Nightkick}/>
          <Route exact path="/work/sw" component={SW}/>
          
          {/* code */}
          <Route exact path="/work/WIS" component={WIS} />
          <Route exact path="/designsystem" component={DesignSystem}/>
          <Route component={NoMatch} />

        </Switch>
        <Footer />
      </Router>
    </>);
  }
}

export default App;

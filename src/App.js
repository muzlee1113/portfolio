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
import IoT from "./pages/Designer/IoT"


import WIS from "./pages/Developer/WIS"







class App extends Component {
  render() {
    return (<>
      <Router>
        <Nav />
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
          <Route exact path="/others"
            render={props => <Others {...props} />} />

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
          {/* code */}
          <Route exact path="/work/WIS" component={WIS} />

          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </>);
  }
}

export default App;

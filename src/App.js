import React, { Component } from 'react';
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
import Work from "./pages/Work"
import NoMatch from "./pages/NoMatch"

import ReadwithMe from "./pages/Designer/ReadwithMe"
import PhotoMe from "./pages/Designer/PhotoMe"
import Weather from "./pages/Designer/Weather"
import LightUp from "./pages/Designer/LightUp"
import BoardingPass from "./pages/Designer/BoardingPass"







class App extends Component {
  render() {
    return (<>
      <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" 
            render={props=><Work {...props} />} 
            />
            <Route exact path="/work" 
            render={props=><Work {...props} />} 
            />
            <Route exact path="/others" 
            render={props=><Others {...props}  />}
            />
            <Route exact path="/about" 
            render={props=><About {...props} />}
            />
            <Route exact path="/work/readwithme" component={ReadwithMe} />
            <Route exact path="/work/photome" component={PhotoMe} />
            <Route exact path="/work/weather" component={Weather} />
            <Route exact path="/work/lightup" component={LightUp} />
            <Route exact path="/work/boardingpass" component={BoardingPass} />
            <Route component={NoMatch} />
          </Switch>
          <Footer/>
      </Router>
    </>);
  }
}

export default App;

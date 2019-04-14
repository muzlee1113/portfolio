import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Nav from "./components/Nav"
// pages
import About from "./pages/About"
import Others from "./pages/Others"
import Work from "./pages/Work"
import NoMatch from "./pages/NoMatch"




class App extends Component {
  render() {
    return (<>
      <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" 
            render={props=><Work {...props} />} 
            />
            <Route exact path="/others" 
            render={props=><Others {...props}  />}
            />
            <Route exact path="/about" 
            render={props=><About {...props} />}
            />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    </>);
  }
}

export default App;

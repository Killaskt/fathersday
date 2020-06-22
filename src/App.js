import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route exact path="/home" component={App}></Route>
        </Switch>
      </Router>
      <Nav/>
      <Hero />
      <div className="Cricket">
        <h2>Cricket Scores</h2>
      </div>
      <div className="footer">
        <h4>Created by Shubham Tiwari - 2020</h4>
        <div className="social-links">
          <a href="#" class="fa fa-github"></a>
          <a href="#" class="fa fa-linkedin"></a>
        </div>
      </div>
    </div>
  );
}

export default App;

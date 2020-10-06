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

const Main = () => {
  
  return (
    <>
    <Nav/>
      <Hero />
      <div className="Cricket">
        <h2>Cricket Scores</h2>
      </div>
      <div className="footer">
        <h4>Created by Shubham Tiwari - 2020</h4>
        <div className="social-links">
          <a href="https://github.com/killaskt" class="fa fa-github"></a>
          <a href="https://www.linkedin.com/in/shubh4mt1war1/" class="fa fa-linkedin"></a>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          {/* <Route exact path="/gallery" component={Gallery}></Route> */}
          {/* <Route exact path="/home" component={Main}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

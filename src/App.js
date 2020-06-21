import React from 'react';
import './App.css';

import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div  className="App">
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

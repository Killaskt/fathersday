import React, {useState, useEffect, useCallback} from 'react';

import './Nav.css';

import dad_pic from '../../res/raj_1.jpg'

const Nav = () => {
  const [scrollPixelsY,setScrollPixelsY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPixelsY(window.scrollY);
    if(scrollPixelsY > 95) {
      document.querySelector('.navigation').style.padding = "20px 20px 0";
      document.querySelector('.NavItems a').style.display = "none";
      document.querySelector('.logo').style.fontSize = "1.5rem";
      document.querySelector('.circle').style.top = '10px';
      document.querySelector('.circle').style.height = '60px';
      document.querySelector('.circle').style.width = '60px';
      document.querySelector('.navigation').style.borderBottom = '1px solid rgba(62, 65, 244, 1)';
      document.querySelector('.logo').style["text-shadow"] ="0px 0px 0px rgba(var(--violetRGB), 0.4)";
      document.querySelector('.logo').style["box-shadow"] ="0px 0px 0px rgba(var(--violetRGB), 0.4)";
    } else {
      document.querySelector('.navigation').style.padding = "75px 20px";
      document.querySelector('.NavItems a').style.display = "block";
      document.querySelector('.logo').style.fontSize = "3rem";
      document.querySelector('.circle').style.top = '30px';
      document.querySelector('.circle').style.height = '220px';
      document.querySelector('.circle').style.width = '220px';
      document.querySelector('.navigation').style.borderBottomColor = 'rgba(62, 65, 244, 0)';
      document.querySelector('.logo').style.textShadow = '-10px 5px 0px rgba(var(--violetRGB), 0.4)';
      document.querySelector('.logo').style.boxShadow = '1px 0px 10px rgba(0, 0, 0, 0.3)';
    }
  }, [scrollPixelsY])

  useEffect(() => {
    setScrollPixelsY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll, window.scrollY])

  return (
    <div>
      <nav className="navigation" >
        <a href="#" className="logo">Happy Father's Day</a>
        <div className="NavItems">
            <a href="#">Gallery</a>
        </div>
        <div className="circle">
            <img id="img_1" alt="Dad" src={dad_pic}></img>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

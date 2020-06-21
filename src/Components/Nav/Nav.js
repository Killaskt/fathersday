import React, {useState, useEffect, useCallback} from 'react';
import './Nav.css';

const Nav = () => {
  const [scrollPixelsY,setScrollPixelsY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPixelsY(window.scrollY);
    if(scrollPixelsY > 75) {
      document.querySelector('.navigation').style.padding = "20px 20px 0";
      document.querySelector('.NavItems a').style.display = "none";
      document.querySelector('.logo').style.fontSize = "1.5rem";
      document.querySelector('.circle').style.top = '10px';
      document.querySelector('.circle').style.height = '60px';
      document.querySelector('.circle').style.width = '60px';
      document.querySelector('.navigation').style.borderBottom = '1px solid rgba(62, 65, 244, 1)';
    } else {
      document.querySelector('.navigation').style.padding = "75px 20px";
      document.querySelector('.NavItems a').style.display = "block";
      document.querySelector('.logo').style.fontSize = "3rem";
      document.querySelector('.circle').style.top = '30px';
      document.querySelector('.circle').style.height = '220px';
      document.querySelector('.circle').style.width = '220px';
      document.querySelector('.navigation').style.borderBottomColor = 'rgba(62, 65, 244, 0)';
    }
  }, [scrollPixelsY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll])

  return (
    <div>
      <nav className="navigation" >
        <a href="#" className="logo">Happy Father's Day</a>
        <div className="NavItems">
            <a href="#">Gallery</a>
        </div>
        <div className="circle">
            <img alt="Dad" src="https://scontent.fdet1-1.fna.fbcdn.net/v/t1.0-9/74339276_10220855812291124_7054676206804795392_n.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=rbHTdeu2qloAX_8UYpm&_nc_ht=scontent.fdet1-1.fna&oh=3a214698ca49cf770bf706e5c36afa41&oe=5F13C3C5"></img>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

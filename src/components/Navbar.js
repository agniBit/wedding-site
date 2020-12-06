import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const [nav_up, setNav_up] = useState(true);
  window.addEventListener('scroll', function(){
    if (window.scrollY > 10){
      setNav_up(false);
    } else {
      setNav_up(true);
    }
  })

  return (
    <nav className= { nav_up ? 'navbar' : 'navbar-up'}>
      <div className='nav-list'>
        <div className="nav-item">
          Home
        </div>
        <div className="nav-item">
          OUR STORY
        </div>
        <div className="nav-item">
          RSVP
        </div>
        <div className="nav-item">
          FUNCTIONS
        </div>
        <div className="nav-item">
          GALLERY
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
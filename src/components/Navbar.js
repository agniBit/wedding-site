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
    <nav className= { nav_up ? 'navbar' : 'navbar nav-up'}>
      <ul className='nav-list'>
        <li>
          Home
        </li>
        <li>
          OUR STORY
        </li>
        <li>
          RSVP
        </li>
        <li>
          FUNCTIONS
        </li>
        <li>
          GALLERY
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [nav_up, setNav_up] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function scrollto_div(id){
    var p = document.getElementById(id).offsetTop - 80;
    window.scrollTo({
      top: p,
      behavior: 'smooth',
    });

    setClick(false);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', function(){
    if (window.scrollY > 10){
      setNav_up(false);
    } else {
      setNav_up(true);
    }
  })

  return (
    <>
      <nav className={ !click & nav_up ? 'navbar' : 'navbar-up'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Alkesh weds Deeksha
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i class={click ? 'fa fa-times' : 'fa fa-list'} aria-hidden="true" />
          </div>
          <ul className={ click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <a className='nav-links' 
                onClick={()=>scrollto_div('banner')}>
                Home
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='nav-links'
                onClick={()=>scrollto_div('functions')}
              >
                Functions
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='nav-links'
                onClick={()=>scrollto_div('vdo')}
              >
                Video Message
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-links' onClick={()=>scrollto_div('gallery')}>
                Gallery
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
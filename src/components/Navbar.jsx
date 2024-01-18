import React from 'react'
import './Navbar.scss'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className='header'>
    
      <img src='./src/assets/logo.png' className='header__logo' alt='logo kasa'></img>
    
    <nav>
    <ul className='header__navbar'>

    <NavLink to={'/'}>
    <li  className='navbar__link' >Accueil</li>
    </NavLink>

    <NavLink to={'/about'}>
    <li className='navbar__link' >A propos</li>
    </NavLink>
</ul> 
</nav>
    </header>
  )
}

export default Navbar
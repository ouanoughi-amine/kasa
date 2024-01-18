import React from 'react'
import './Navbar.scss'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
    
      <img src='./src/assets/logo.png' className='navbar__logo' alt='logo kasa'></img>
    <ul className='navbar__link'>

    <Link to={'/'}>
    <li  className='navbar__link__accueil' id='id'>Accueil</li>
    </Link>
    <Link to={'/about'}>
    <li className='navbar__link__accueil'   >A propos</li>
    </Link>
</ul> 
    </nav>
  )
}

export default Navbar
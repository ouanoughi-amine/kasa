import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className='navbar'>
    <div className="logo-kasa">
      <img src='./src/assets/logo.png' alt='logo kasa'></img>
    </div>
      <a href='#' className='accueil' >Accueil</a>
      <a href='#' className='apropos' >A propos</a>
    </nav>
  )
}

export default Navbar
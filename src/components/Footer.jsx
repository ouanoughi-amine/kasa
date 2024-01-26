import React from 'react'
import './Footer.scss'
import logoFooter from '../assets/logo-footer.png'


function Footer() {
  return (
    <footer className='footer'>
       
       <img src={logoFooter} className='footer__logo' alt="logo kas " />
        <div className='footer__text'>
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
       
    </footer>
  )
}

export default Footer
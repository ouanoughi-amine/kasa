import { NavLink } from "react-router-dom"
import './Header.scss'
import logoKasaColor from '../../assets/logo-kasa-color.png'

const Header = () => {
  return (
<header className='header'>
    
  <img src={logoKasaColor} className='header__logo' alt='logo kasa'></img>
    
  <nav>
    <ul className='header__navbar'>

      <NavLink to={'/'}>
        <li  className='header__navbar__link' >Accueil</li>
      </NavLink>

      <NavLink to={'/about'}>
        <li className='header__navbar__link' >A propos</li>
      </NavLink>
    </ul> 
  </nav>
</header>
  )
}

export default Header
import React from 'react'
import  './Error404.scss'
import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <div className='Error__block' >
        <div className='Error__block--image'>
        <img src='imageError.png' alt='image Error'></img>
        </div>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to={'/'} className='Error__block--link'>
        <p>Retourner sur la page d’accueil</p>
        </NavLink>
    </div>
  )
}

export default Error404
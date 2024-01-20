import React from 'react'
import { NavLink } from "react-router-dom";
import './Apartment.scss'


function Apartment() {
  return (
    <NavLink to={'/product'} className='card'>
      
        <h4 className='card__title'>Titre de la<br/>location</h4>
      
    </NavLink>
  );
}
export default Apartment
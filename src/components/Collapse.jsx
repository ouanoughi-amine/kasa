import React from 'react'
import './Collapse.scss'

function Collapse(props) {
    const label = props.label;
    const contentRef = props.contentRef;
  return (
    <div className='block'>
   <div className='block__red'>
    <h2 className='block__red-title'>{label}</h2>
    <img src="./src/assets/dropdown.png" alt="dropdown " />

   </div>
   <div className='block__gray' >
    <p>{contentRef}</p>
    
   </div>
   </div>
  )
}

export default Collapse
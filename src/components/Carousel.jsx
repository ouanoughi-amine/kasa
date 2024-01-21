import React from 'react'
import './Carousel.scss'

function Carousel() {
  return (
    <div className='carousel'>
        <img src= "Backgroundphoto.png" className='carousel__img'></img>
        <div className='carousel__arrow'>
            <img src="Arrow-left.png" alt="arrow left" />
            <img src="Arrow-right.png" alt="arrow right" />
        </div>
        <p className='carousel__numbers'>1/4</p>   
    </div>
  )
}

export default Carousel
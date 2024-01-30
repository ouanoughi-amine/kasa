import React from 'react'
import './Banner.scss'

function Banner({imgBanner, showTitleBanner}) {
  return (
    <div className='banner'>
      <div className='banner__overlay'></div>
      {showTitleBanner && (
                <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
      )}

      <img src={imgBanner} alt='photo montagne'  className='banner__image'/>
    </div>
  )
}

export default Banner
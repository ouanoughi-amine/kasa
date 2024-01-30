import './Carousel.scss'
import ArrowLeft from '../assets/Arrow-left.png'
import ArrowRight from '../assets/Arrow-right.png'
import { useState } from 'react'


function Carousel({images}) {

const [imageIndex, setImageIndex] =useState (0);



    // Si l'image actuelle est la dernière, revient à la première image
    // Sinon, on passe à l'image suivante.

  const nextImage = () => {
    setImageIndex((imageIndex) => (imageIndex === images.length - 1 ? 0 : imageIndex + 1));
  };
  
  
  const prevImage = () => {
    setImageIndex((imageIndex) => (imageIndex === 0 ? images.length - 1 : imageIndex - 1));
  }





  return (
    <div className='carousel'>
       
        <div className='carousel__arrow'>
            <img src={ArrowLeft} alt="arrow left" onClick={prevImage}/>
            <img src={ArrowRight} alt="arrow right" onClick={nextImage} />
        </div>
        <img src={images[imageIndex]} alt='photo appartement'  className='carousel__img'></img>
        <p className='carousel__numbers'>{imageIndex + 1}/{images.length}</p>   
    </div>
  )
}

export default Carousel





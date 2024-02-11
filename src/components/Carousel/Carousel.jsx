import './Carousel.scss'
import ArrowLeft from '../../assets/Arrow-left.png'
import ArrowRight from '../../assets/Arrow-right.png'
import { useState } from 'react'


function Carousel({images}) {

const [imageIndex, setImageIndex] = useState (0);
const notHidden = images.length  > 1;

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
         {/* la div 'carousel__arrow' apparait uniquement si notHidden = true (si images.length > 1)
         (si le nombre d'element de la liste est sup a 1)  */}
          {notHidden && 
        <div className='carousel__arrow'>
          <img src={ArrowLeft} className='carousel__arrow__ref' alt="arrow left" onClick={prevImage}/>
            <img src={ArrowRight} className='carousel__arrow__ref' alt="arrow right" onClick={nextImage} />
        </div>
            }
        <img src={images[imageIndex]} alt='photo appartement'  className='carousel__img'></img>
        {notHidden &&         
        <p className='carousel__numbers'>{imageIndex + 1}/{images.length}</p>   
}
    </div>
  )
}

export default Carousel




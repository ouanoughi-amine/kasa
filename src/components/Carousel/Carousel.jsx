import { useState } from 'react'
import ArrowLeft from '../../assets/Arrow-left.png'
import ArrowRight from '../../assets/Arrow-right.png'
import './Carousel.scss'

const Carousel = ({images}) => {

    // Déclaration de l'état local 'imageIndex' qui représente l'index de l'image actuellement affichée
const [imageIndex, setImageIndex] = useState (0);
const notHidden = images.length  > 1;

     // Mise à jour de l'index de l'image en utilisant une fonction de rappel (callback) qui prend l'index actuel comme paramètre.
  const nextImage = () => {
    setImageIndex((imageIndex) => (imageIndex === images.length - 1 ? 0 : imageIndex + 1));
  };


  const prevImage = () => {
    setImageIndex((imageIndex) => (imageIndex === 0 ? images.length - 1 : imageIndex - 1));
  }

  return (
    <div className='carousel'>
           {/** la div 'carousel__arrow' apparait uniquement si notHidden = true (si images.length > 1)  **/}
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





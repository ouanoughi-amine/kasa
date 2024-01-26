import './Carousel.scss'
import ArrowLeft from '../assets/Arrow-left.png'
import ArrowRight from '../assets/Arrow-Right.png'

function Carousel({images}) {
  return (
    <div className='carousel'>
        <img src={images}  className='carousel__img'></img>
        <div className='carousel__arrow'>
            <img src={ArrowLeft} alt="arrow left" />
            <img src={ArrowRight} alt="arrow right" />
        </div>
        <p className='carousel__numbers'>1/4</p>   
    </div>
  )
}

export default Carousel





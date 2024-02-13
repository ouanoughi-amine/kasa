import './Cards.scss'

// ** Les cards qui sont utiliser dans gallery **
const Cards =({imgCards, titleCards}) => {
  return (
    <div className='card'>
      <div className='card__overlay'></div>
      <img className='card__img' src={imgCards} alt={titleCards} />
      <h2 className='card__title'>{titleCards}</h2>
    </div>
  );
}
export default Cards
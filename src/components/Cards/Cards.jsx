import './Cards.scss'


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
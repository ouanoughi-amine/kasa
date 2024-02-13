import './Banner.scss'



// ** Home et About **
const Banner = ({imgBanner, showTitleBanner}) => {
  return (
    <div className='banner'>
      <div className='banner__overlay'></div>
      {/* si showTitleBanner = (true), on affiche le titre h1 sur la banner */}
      {showTitleBanner && (
          <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
      )}

      <img src={imgBanner} alt='photo montagne'  className='banner__image'/>
    </div>
  )
}

export default Banner
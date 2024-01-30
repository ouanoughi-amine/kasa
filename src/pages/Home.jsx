
import Banner from '../components/Banner.jsx';
import Gallery from '../components/Gallery.jsx';
import ImageHomeBanner from '../assets/image-home-banner.png'

function Home() {
  
  return (
    
    <>
      <Banner imgBanner={ImageHomeBanner} showTitleBanner={true} />
      <Gallery />
    </>

  )
}

export default Home


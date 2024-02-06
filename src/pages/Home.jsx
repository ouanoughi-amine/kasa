
import Banner from '../components/Banner.jsx';
import Gallery from '../components/Gallery.jsx';
import ImageHomeBanner from '../assets/image-home-banner.png'

function Home() {
  
  return (
    
    <main>
      <Banner imgBanner={ImageHomeBanner} showTitleBanner={true} />
      <Gallery />
    </main>

  )
}

export default Home


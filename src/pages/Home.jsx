import React from 'react';
import Navbar from '../components/Navbar.jsx';

import BannerHome from '../components/BannerHome.jsx';
import Gallery from '../components/Gallery.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <BannerHome />
      <Gallery />
      <Footer />
    </>

  )
}

export default Home


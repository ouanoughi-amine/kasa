import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import Gallery from '../components/Gallery.jsx';
import Footer from '../components/Footer.jsx';
import  './Home.scss';

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home


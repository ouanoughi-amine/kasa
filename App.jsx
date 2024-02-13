import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './src/components/Footer/Footer.jsx';
import Header from './src/components/Header/Header.jsx';
import About from './src/pages/About/About.jsx';
import NotFound from './src/pages/NotFound/NotFound.jsx';
import Product from './src/pages/Product/Product.jsx';
import Home from './src/pages/Home/Home.jsx';


// Pour éviter de  répeter l'appel de nos composants header et footer dans nos composants on les inclues dans notre router
const App = () => (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
    </Router>
  )
  export default App
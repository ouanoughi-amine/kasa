import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './src/components/Footer.jsx';
import Header from './src/components/Header.jsx';
import About from './src/pages/About.jsx';
import NotFound from './src/pages/NotFound.jsx';
import Product from './src/pages/Product.jsx';
import Home from './src/pages/Home.jsx';

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
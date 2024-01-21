import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './src/pages/About.jsx';
import NotFound from './src/pages/NotFound.jsx';
import Product from './src/pages/Product.jsx';
import Home from './src/pages/home.jsx';

import './index.scss'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/product" element={<Product />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);






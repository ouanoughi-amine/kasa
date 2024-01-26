// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './src/components/Footer.jsx';
// import Navbar from './src/components/Navbar.jsx';
// import About from './src/pages/About.jsx';
// import NotFound from './src/pages/NotFound.jsx';
// import Product from './src/pages/Product.jsx';
// import Home from './src/pages/Home.jsx';

// import './index.scss'

// const App = () => (
  
//   <Routes>
//     {/* //Pour ne pas repeter l'appel de nos comp header et footer dans nos comp on les inclues dans notre router */}
   
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/product" element={<Product />} />
//     <Route path="/*" element={<NotFound />} />
    
//     </Routes>
    
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//     <Navbar />
//       <App />
//       <Footer />
//     </Router>
    
//   </React.StrictMode>
// );





import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.scss'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

import React from 'react';

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './src/pages/Home.jsx';
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     //**** */ quand on rajoute un truck a notre url la page not found saffiche*****
//     errorElement: <h1>not found</h1>
//   },
  
//   {
//     path: "/apartment",
//     element: <div>appartment</div>,
//   },
//   {
//     path: "/about",
//     element: <div>about</div>,
//   },
// ]);

const Path =() => (
  <Router>
    <header />
    <Routes>
      <Route path ="/" element={<Home/>} />
      <route path="/About" element={<About/>} />
    </Routes>
    <Footer />
  </Router>
)

export default Path


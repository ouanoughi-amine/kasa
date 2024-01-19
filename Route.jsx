import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './src/pages/Home.jsx';
import About from './src/pages/About.jsx';
import NotFound from './src/pages/NotFound.jsx';
import Product from './src/pages/Product.jsx';
import './index.scss'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //**** */ quand on rajoute un truck a notre url la page not found saffiche*****
    // errorElement: <h1>not found</h1>
  },
  
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

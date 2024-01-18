import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //**** */ quand on rajoute un truck a notre url la page not found saffiche*****
    errorElement: <h1>not found</h1>
  },
  
  {
    path: "/apartment",
    element: <div>appartment</div>,
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

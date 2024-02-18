import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/layouts/Root.jsx';
import Home from './components/layouts/Home.jsx';
import AddCoffee from './components/layouts/AddCoffee.jsx';
import UpdateCoffee from './components/layouts/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/add-coffee",
        element:<AddCoffee></AddCoffee>,
      },
      {
        path:"/update-coffee",
        element:<UpdateCoffee></UpdateCoffee>,
      },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

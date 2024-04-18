import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import PhoneDetails from './Components/PhoneDetails/PhoneDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children :[
      {
        path:'/',
        loader: ()=> fetch('http://localhost:1000/phones'),
        element:<Home></Home>,
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/phones/:phoneID',
        loader: ({params})=>fetch(`http://localhost:1000/phones/${params.phoneID}`),
        element: <PhoneDetails></PhoneDetails>,
        
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

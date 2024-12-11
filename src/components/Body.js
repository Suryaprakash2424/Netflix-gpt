import React from 'react';
import Login from './Login';
import Broswe from './Broswe';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {

  const appRputer = createBrowserRouter([
    {
      path: "/",
      element:<Login/>,
    },
    {
      path: "/browse",
      element:<Broswe/>,
    }
  ])

  return (
      <div>
        <RouterProvider router={appRputer}/>
      </div>
  )
}

export default Body
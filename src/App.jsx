import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./component/Home/Home";
import Ghosala from "./component/Pages/Ghosala";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: '/goshala',
      element:<Ghosala />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
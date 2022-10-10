import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import ErrorPage from './Components/error/ErrorPage'
import Home from "./Components/Home/Home.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader:async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home />,
        },
      ],
    },
    {
      path:'*',
      element:<ErrorPage/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

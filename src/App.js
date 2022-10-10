import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

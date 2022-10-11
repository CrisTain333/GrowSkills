import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import ErrorPage from "./Components/error/ErrorPage";
import Home from "./Components/Home/Home.jsx";
import Rechart from "./Components/rechart/Rechart.jsx";
import Quiz from "./Components/Quiz/Quiz.jsx";
import Blog from "./Components/Blog/Blog.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home />,
        },
        {
          path: "/statistics",
          element: <Rechart />,
        },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element:<Quiz/>
        },
        {
          path:'/blog',
          element: <Blog/>
        }
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

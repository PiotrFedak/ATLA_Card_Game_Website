import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Auth from "./pages/Auth";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Stats",
    element: <Stats />,
  },
  {
    path: "/Auth",
    element: <Auth />,
  },
]);

export default router;

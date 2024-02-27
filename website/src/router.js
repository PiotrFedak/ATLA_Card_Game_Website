import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Stats",
    element: <Stats />,
  },
]);

export default router;

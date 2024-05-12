import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Auth from "./pages/Auth";
import DefaultLayout from './access/DefaultLayout';
import GuestLayout from './access/GuestLayout';
import Profile from "./pages/Profile";
import MatchHistory from "./pages/MatchHistory";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/Stats',
        element: <Stats />,
      },
      {
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/MatchHistory',
        element: <MatchHistory />,
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/Auth',
        element: <Auth />,
      },
    ],
  }
]);

export default router;

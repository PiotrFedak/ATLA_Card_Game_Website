import React from "react";
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Auth from "./pages/Auth";
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Profile from "./pages/Profile";

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

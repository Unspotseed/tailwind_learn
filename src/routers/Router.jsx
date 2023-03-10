import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../layout.jsx/Layout';
import LoginLayout from '../layout.jsx/LoginLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Service from '../pages/Service';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { path : '/' , element : <Home /> },
      { index: true, element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'service', element: <Service /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

import React, { useState } from 'react';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TodoPage from './components/pages/TodoPage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import TestPage from './components/pages/TestPage';
import Root from './components/Root';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <h1>Oppps</h1>,
      children: [
        {path:'/', element:<TodoPage/>},
        {path:'/test', element:<TestPage/>},
        {path:'/todos', element:<TodoPage/>},
      ]

    },
  ]);
  return <RouterProvider router={router} />
}

export default App;

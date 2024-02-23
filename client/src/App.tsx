import React, { useState } from 'react';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import QuestionsList from './components/pages/QuestionsList';
import Root from './components/Root';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <h1>Oppps</h1>,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/mygame', element: <QuestionsList /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

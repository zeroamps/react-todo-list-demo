import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootPage } from './Pages/RootPage';
import { WelcomePage } from './Pages/WelcomePage';
import { DashboardPage } from './Pages/DashboardPage';
import { LogInPage } from './Pages/LogInPage';
import { SignUpPage } from './Pages/SignUpPage';
import './styles.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootPage />,
      children: [
        { path: '/', element: <WelcomePage /> },
        { path: '/dashboard', element: <DashboardPage /> },
        { path: '/login', element: <LogInPage /> },
        { path: '/signup', element: <SignUpPage /> }
      ]
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

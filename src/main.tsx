import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootPage } from './pages/Root/RootPage';
import { WelcomePage } from './pages/WelcomePage';
import { TodoListPage } from './pages/TodoList/TodoListPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import './styles.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootPage />,
      children: [
        { path: '/', element: <WelcomePage /> },
        { path: '/todolist', element: <TodoListPage /> },
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

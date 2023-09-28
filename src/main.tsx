import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { RootPage } from './pages/Root/RootPage';
import { WelcomePage } from './pages/WelcomePage';
import { TodoListPage } from './pages/TodoList/TodoListPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { logInPath, rootPath, signUpPath, todoListPath } from './routes';
import './styles.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={rootPath} element={<RootPage />}>
      <Route index path={rootPath} element={<WelcomePage />} />
      <Route path={todoListPath} element={<PrivateRoute />}>
        <Route index element={<TodoListPage />} />
      </Route>
      <Route path={logInPath} element={<LogInPage />} />
      <Route path={signUpPath} element={<SignUpPage />} />
    </Route>
  ),
  {
    basename: import.meta.env.BASE_URL
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

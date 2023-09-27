import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoutes } from './components/PrivateRoutes';
import { RootPage } from './pages/Root/RootPage';
import { WelcomePage } from './pages/WelcomePage';
import { TodoListPage } from './pages/TodoList/TodoListPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import './styles.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route index path="/" element={<WelcomePage />} />
      <Route path="/todolist" element={<PrivateRoutes />}>
        <Route index element={<TodoListPage />} />
      </Route>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
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

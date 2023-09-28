import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoute() {
  const auth = useAuth();
  if (auth.currentUser) return <Outlet />;
  return <Navigate to="/login" replace />;
}

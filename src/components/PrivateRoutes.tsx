import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoutes() {
  const auth = useAuth();
  if (auth && auth.currentUser) return <Outlet />;
  return <Navigate to="/login" replace />;
}

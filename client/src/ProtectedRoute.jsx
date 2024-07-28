import { useAuth } from './contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ adminOnly }) {
  const { loading, isAuthenticated, isAuthorized } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (!isAuthenticated && !loading)
    return <Navigate to='/auth/login' replace />;

  if (adminOnly && !isAuthorized && !loading) return <Navigate to='/unauthorized' replace />;

  return <Outlet />;
}

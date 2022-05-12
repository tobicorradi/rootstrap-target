import { Navigate } from 'react-router-dom';
import useAuthentication from '../hooks/useAuthentication';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useAuthentication();
  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
};

import { Navigate } from 'react-router-dom';
import { RoutherPaths } from '../constants/routerPaths';
import useAuthentication from '../hooks/useAuthentication';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useAuthentication();
  if (isAuthenticated) {
    return children;
  }

  return <Navigate to={RoutherPaths.LOG_IN} />;
};

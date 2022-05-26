import { useSelector } from 'react-redux';
import { authSelector, usernameSelector } from '../state/reducers/userReducer';

const useAuthentication = () => {
  const username = useSelector(usernameSelector);
  const isAuthenticated = useSelector(authSelector);
  return { isAuthenticated, username };
};

export default useAuthentication;

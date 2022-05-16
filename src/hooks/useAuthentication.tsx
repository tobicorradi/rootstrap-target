import { useSelector } from 'react-redux';
import { authSelector } from '../state/reducers/userReducer';

const useAuthentication = () => {
  const isAuthenticated = useSelector(authSelector);
  return isAuthenticated;
};

export default useAuthentication;

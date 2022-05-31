import { Navigate } from 'react-router-dom';
import { RouterPaths } from '../constants';
import useAuthentication from '../hooks/useAuthentication';
import Map from '../components/common/Map';

interface Props {
  children: JSX.Element,
}

export const PrivateRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuthentication();
  if (isAuthenticated) {
    return (
      <section className="flex h-full">
        <div className='flex flex-col items-center w-2/6 h-screen max-w-sm p-12 space-y-10 text-center bg-white"'>
          {children}
        </div>
        <Map />
      </section>
    );
  }

  return <Navigate to={RouterPaths.LOG_IN} />;
};

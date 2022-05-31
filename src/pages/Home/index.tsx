import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userIcon } from '../../assets';
import { Button } from '../../components/common';
import { logOut } from '../../state/actions/userActions';
import useAuthentication from '../../hooks/useAuthentication';

const Home = () => {
  const dispatch = useDispatch();
  const { username } = useAuthentication();

  useEffect(() => {
    localStorage.setItem('hasVisitedBefore', 'true');
  }, []);

  return (
    <>
      <div>
        <img className="mb-4" src={userIcon} alt="User profile" />
        <p>{username}</p>
        <Button
          text="Logout"
          type="button"
          variant="subtle"
          onClick={() => dispatch(logOut())}
        />
      </div>
      <h2 className="font-semibold">Create your first target by clicking wherever on the map.</h2>
    </>
  );
};

export default Home;

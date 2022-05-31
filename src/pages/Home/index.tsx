import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userIcon } from '../../assets';
import { Button, Paragraph } from '../../components/common';
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
        <Paragraph text={username} />
        <Button
          text="Logout"
          type="button"
          variant="subtle"
          onClick={() => dispatch(logOut())}
        />
      </div>
      <Paragraph
        size="lg"
        fontWeight="semibold"
        text="Create your first target by clicking wherever on the map."
      />
    </>
  );
};

export default Home;

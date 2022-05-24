import { useDispatch } from 'react-redux';
import Map from '../../components/common/Map';
import { userIcon } from '../../assets';
import { Button, Paragraph } from '../../components/common';
import { logOut } from '../../state/actions/userActions';
import useAuthentication from '../../hooks/useAuthentication';

function Home() {
  const dispatch = useDispatch();
  const { username } = useAuthentication();
  return (
    <section className="flex h-full">
      {/* TODO: remove this empty div and create the component containing it's own logic */}
      <div className="flex justify-center w-2/6 h-screen max-w-sm p-5 text-center bg-white">
        <div>
          <img className="mb-4" src={userIcon} alt="User profile" />
          <Paragraph text={username} />
          <Button onClick={() => dispatch(logOut())} variant="subtle" type="button" text="Logout" />
        </div>
      </div>
      <Map />
    </section>
  );
}

export default Home;

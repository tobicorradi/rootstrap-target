import { useNavigate } from 'react-router-dom';
import {
  Button, Logo, Subtitle, Title,
} from '../../components/common';
import { RouterPaths } from '../../constants';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Logo />
        <Title text="Welcome to Target" />
        <Subtitle text="Find people near you & connect" />
      </div>
      <div className="mb-1 text-left">
        <ul>
          <li className="mb-5 blue-dot">
            Create a  target  by clicking wherever on the map, specify
            the ratio and and a topic: Travel, Dating, Music, etc.
          </li>
          <li className="blue-dot">
            Target will  start a chat whenever you&apos;ve a match.
            You can always dismiss a conversation if you&apos;re not interested.
          </li>
        </ul>
      </div>
      <Button
        type="button"
        variant="primary"
        text="Ok! Got it!"
        maxWidth="max-w-xs"
        onClick={() => navigate(RouterPaths.HOME)}
      />
    </>
  );
};

export default Welcome;

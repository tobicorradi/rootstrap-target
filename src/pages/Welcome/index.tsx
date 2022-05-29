import {
  Button, Logo, Subtitle, Title,
} from '../../components/common';

function Welcome() {
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
            Target will  start a chat whenever you've a match.
            You can always dismiss a conversation if you're not interested.
          </li>
          <li className="blue-dot">
            Target will  start a chat whenever you've a match.
            You can always dismiss a conversation if you're not interested.
          </li>
        </ul>
      </div>
      <Button
        type="button"
        variant="primary"
        text="Ok! Got it!"
        maxWidth="max-w-xs"
      />
    </>
  );
}

export default Welcome;

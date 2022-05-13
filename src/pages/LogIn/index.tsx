import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button, InputField, Logo, Paragraph, PhoneSection, Title, Subtitle,
} from '../../components/common';
import { usernameSelector } from '../../state/reducers/userReducer';

function LogIn() {
  const username = useSelector(usernameSelector);
  return (
    <section className="flex h-full">
      <div className="text-center bg-white half-section">
        <Logo />
        {username ? (
          <>
            <Title text={`¡Hi, ${username}!`} />
            <Subtitle text="Welcome to Target" />
          </>
        ) : (
          <>
            <Title text="Target MVD" />
            <Subtitle text="Find people near you & Connect" />
            <Paragraph
              maxWidth="sm"
              size="xs"
              text="Create a  target  wherever on the map, specify
              your interest: Travel, Dating, Music, etc and start conecting
              with others who share your interest."
            />
          </>
        )}

        <form className="w-full mt-8 mb-4 md:w-[250px]  space-y-7">
          <InputField label="Email" id="email" type="email" />
          <InputField label="Password" id="password" type="password" />
          <div>
            <Button type="submit" text="Sign In" variant="primary" />
            <Button type="button" text="Forgot your password?" variant="subtle" />
          </div>
        </form>
        <Button type="button" text="Connect with Facebook" variant="secondary" />
        <hr />
        <Link to="/sign-up">
          <Button type="button" text="Sign Up" variant="secondary" />
        </Link>
      </div>
      <PhoneSection />
    </section>
  );
}

export default LogIn;

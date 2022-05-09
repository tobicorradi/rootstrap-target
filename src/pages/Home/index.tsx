import {
  Button, InputField, Logo, Paragraph, PhoneSection, Title, Subtitle,
} from '../../components/common';

function Home() {
  return (
    <section className="flex h-full">
      <div className="text-center bg-white half-section">
        <Logo />
        <Title text="Target MVD" />
        <Subtitle text="Find people near you & Connect" />
        <Paragraph
          maxWidth="sm"
          size="xs"
          text="Create a  target  wherever on the map, specify
          your interest: Travel, Dating, Music, etc and start conecting
          with others who share your interest."
        />
        <form className="w-full mt-8 mb-4 md:w-4/12 space-y-7">
          <InputField label="Email" id="email" type="email" />
          <InputField label="Password" id="password" type="password" />
          <div>
            <Button type="submit" text="Sign In" variant="primary" />
            <Button type="button" text="Forgot your password?" variant="subtle" />
          </div>
        </form>
        <Button type="button" text="Connect with Facebook" variant="secondary" />
        <hr />
        <Button type="button" text="Sign Up" variant="secondary" />
      </div>
      <PhoneSection />
    </section>
  );
}

export default Home;

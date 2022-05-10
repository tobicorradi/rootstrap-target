import { Link } from 'react-router-dom';
import {
  Button, InputField, SelectInput, PhoneSection, Title,
} from '../../components/common';

function SignUp() {
  const genderOptions = [
    { id: 1, text: 'Male', value: 'male' },
    { id: 2, text: 'Woman', value: 'woman' },
    { id: 3, text: 'Other', value: 'other' },
  ];
  return (
    <section className="flex h-full">
      <div className="text-center bg-white half-section">
        <Title text="Sign Up" />
        <form className="w-full mt-8 mb-4 md:w-[250px] space-y-7">
          <InputField label="Name" id="name" type="text" />
          <InputField label="Email" id="email" type="email" />
          <InputField label="Password" id="password" type="password" placeholder="min. 6 characters long" />
          <InputField label="Confirm Password" id="password" type="password" />
          <SelectInput
            id="gender"
            label="Gender"
            placeholder="Select your gender"
            optionValues={genderOptions}
          />
          <Button type="submit" text="Sign Up" variant="primary" />
        </form>
        <hr />
        <Link to="/">
          <Button type="button" text="Sign In" variant="secondary" />
        </Link>
      </div>
      <PhoneSection />
    </section>
  );
}

export default SignUp;

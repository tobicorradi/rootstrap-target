import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../schemas';
import {
  Button, InputField, SelectInput, PhoneSection, Title,
} from '../../components/common';

interface SignUpInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

function SignUp() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const genderOptions = [
    { id: 1, text: 'Male', value: 'male' },
    { id: 2, text: 'Female', value: 'female' },
    { id: 3, text: 'Other', value: 'other' },
  ];

  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    console.log(data);
  };
  return (
    <section className="flex h-full">
      <div className="text-center bg-white half-section">
        <Title text="Sign Up" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 mb-4 md:w-[250px] space-y-7">
          <InputField
            id="name"
            type="text"
            label="Name"
            error={errors.name?.message}
            register={register('name')}
          />
          <InputField
            id="email"
            type="email"
            label="Email"
            error={errors.email?.message}
            register={register('email')}
          />
          <InputField
            id="password"
            type="password"
            label="Password"
            placeholder="min. 6 characters long"
            error={errors.password?.message}
            register={register('password')}
          />
          <InputField
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            error={errors.confirmPassword?.message}
            register={register('confirmPassword')}
          />
          <SelectInput
            id="gender"
            label="Gender"
            placeholder="Select your gender"
            optionValues={genderOptions}
            error={errors.gender?.message}
            register={register('gender')}
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

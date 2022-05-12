import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { signUpSchema } from '../../schemas';
import {
  Button, InputField, SelectInput, PhoneSection, Title,
} from '../../components/common';
import { genderOptions } from '../../constants/genderOptions';
import { SignUpInputsType } from '../../types/userInputsTypes';
import { signUp } from '../../state/actions/userActions';
import { requestErrorsSelector, statusSelector } from '../../state/reducers/userReducer';
import RequestStatus from '../../constants/requestStatus';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(statusSelector);
  const requestErrors = useSelector(requestErrorsSelector);

  const isRequestLoading = status === RequestStatus.PENDING;

  const errorsExist = Object.entries(requestErrors).length > 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpInputsType> = (data) => {
    dispatch(signUp(data));
  };

  useEffect(() => {
    if (status === RequestStatus.FULFILLED) navigate('/login');
  }, [status]);

  return (
    <section className="flex h-full">
      <div className="text-center bg-white half-section">
        <Title text="Sign Up" />
        {errorsExist
          && <span className="error-message">{requestErrors?.full_messages[0]}</span>}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 mb-4 md:w-[250px] space-y-7">
          <InputField
            id="username"
            type="text"
            label="Name"
            error={errors.username?.message}
            register={register('username')}
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
            placeholder="min. 8 characters long"
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
          <Button type="submit" text={`${isRequestLoading ? 'Loading...' : 'Sign Up'}`} variant="primary" />
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

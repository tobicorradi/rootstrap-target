import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { signUpSchema } from '../../schemas';
import {
  Button, InputField, SelectInput, PhoneSection, Title,
} from '../../components/common';
import { genderOptions, RequestStatus, RouterPaths } from '../../constants';
import { SignUpInputsType } from '../../types/userInputsTypes';
import { signUp, resetErrors } from '../../state/actions/userActions';
import { requestErrorsSelector, statusSelector } from '../../state/reducers/userReducer';
import { getFormErrors } from '../../utils/getFormErrors';
import useAuthentication from '../../hooks/useAuthentication';
import { AppDispatch } from '../../state/store';

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthentication();
  const status = useSelector(statusSelector);
  const requestErrors = useSelector(requestErrorsSelector);

  const isRequestLoading = useMemo(() => status === RequestStatus.PENDING, [status]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputsType>({ resolver: yupResolver(signUpSchema) });

  const onSubmit: SubmitHandler<SignUpInputsType> = async (data) => {
    await dispatch(signUp(data)).unwrap();
    navigate(RouterPaths.LOG_IN);
  };

  useEffect(() => {
    if (isAuthenticated) navigate(RouterPaths.HOME);
    return () => {
      dispatch(resetErrors());
    };
  }, []);

  return (
    <section className="flex h-full">
      <div className="text-center bg-white half-section">
        <Title text="Sign Up" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 mb-4 md:w-[250px] space-y-7">
          <InputField
            id="username"
            type="text"
            label="Name"
            error={getFormErrors(requestErrors, errors, 'username')}
            register={register('username')}
          />
          <InputField
            id="email"
            type="email"
            label="Email"
            error={getFormErrors(requestErrors, errors, 'email')}
            register={register('email')}
          />
          <InputField
            id="password"
            type="password"
            label="Password"
            placeholder="min. 8 characters long"
            error={getFormErrors(requestErrors, errors, 'password')}
            register={register('password')}
          />
          <InputField
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            error={getFormErrors(requestErrors, errors, 'confirmPassword')}
            register={register('confirmPassword')}
          />
          <SelectInput
            id="gender"
            label="Gender"
            placeholder="Select your gender"
            optionValues={genderOptions}
            error={getFormErrors(requestErrors, errors, 'gender')}
            register={register('gender')}
          />
          <Button type="submit" text={`${isRequestLoading ? 'Loading...' : 'Sign Up'}`} variant="primary" />
        </form>
        <hr />
        <Button onClick={() => navigate(RouterPaths.LOG_IN)} type="button" text="Sign In" variant="secondary" />
      </div>
      <PhoneSection />
    </section>
  );
};

export default SignUp;

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';
import { logInSchema } from '../../schemas';
import {
  Button, InputField, Logo, Paragraph, PhoneSection, Title, Subtitle,
} from '../../components/common';
import { requestErrorsSelector, statusSelector } from '../../state/reducers/userReducer';
import { RouterPaths, RequestStatus } from '../../constants';
import { getFormErrors } from '../../utils/getFormErrors';
import { LogInInputsType } from '../../types/userInputsTypes';
import { logIn } from '../../state/actions/userActions';
import useAuthentication from '../../hooks/useAuthentication';
import { AppDispatch } from '../../state/store';
import useVisitor from '../../hooks/useVisitor';

function LogIn() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const hasVisitedBefore = useVisitor();
  const { isAuthenticated, username } = useAuthentication();
  const status = useSelector(statusSelector);
  const requestErrors = useSelector(requestErrorsSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInInputsType>({ resolver: yupResolver(logInSchema) });

  const isRequestLoading = useMemo(() => status === RequestStatus.PENDING, [status]);

  const onSubmit: SubmitHandler<LogInInputsType> = async (data) => {
    await dispatch(logIn(data)).unwrap();
    navigate(hasVisitedBefore ? RouterPaths.HOME : RouterPaths.WELCOME);
  };

  useEffect(() => {
    if (isAuthenticated) navigate(RouterPaths.HOME);
  }, []);

  return (
    <section className="flex h-full">
      <div className="text-center bg-white half-section">
        <Logo />
        {username && !isAuthenticated ? (
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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 mb-4 md:w-[250px]  space-y-7">
          <InputField
            id="email"
            label="Email"
            type="email"
            error={getFormErrors(requestErrors, errors, 'email')}
            register={register('email')}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            error={getFormErrors(requestErrors, errors, 'password')}
            register={register('password')}
          />
          <div>
            <Button type="submit" text={`${isRequestLoading ? 'Loading...' : 'Sign In'}`} variant="primary" />
            <Button type="button" text="Forgot your password?" variant="subtle" />
          </div>
        </form>
        <Button type="button" text="Connect with Facebook" variant="secondary" />
        <hr />
        <Button onClick={() => navigate(RouterPaths.SIGN_UP)} type="button" text="Sign Up" variant="secondary" />
      </div>
      <PhoneSection />
    </section>
  );
}

export default LogIn;

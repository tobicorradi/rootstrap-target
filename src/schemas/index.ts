import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  username: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email format')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password length should be at least 8 characters'),
  confirmPassword: yup.string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  gender: yup.string()
    .required('Gender is required'),
});

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email format')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password length should be at least 8 characters'),
});

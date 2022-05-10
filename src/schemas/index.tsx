import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email format')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password length should be at least 6 characters'),
  confirmPassword: yup.string()
    .required('Confirm Password is required')
    .min(4, 'Password length should be at least 4 characters')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  gender: yup.string()
    .required('Gender is required'),
});

export const logIn = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email format')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password length should be at least 6 characters')
    .max(12, 'Password cannot exceed more than 12 characters'),
});

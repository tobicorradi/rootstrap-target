import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import userService from '../../services/userService';
import { ThunkActions } from '../../constants/thunkActions';

export const signUp = createAsyncThunk(
  ThunkActions.USER_SIGN_UP,
  async (user, thunkAPI) => {
    try {
      const { data } = await userService.signIn({ user });
      return data;
    } catch ({ response: { data } }) {
      return thunkAPI.rejectWithValue(data);
    }
  },
);
export const logIn = createAsyncThunk(
  ThunkActions.USER_LOG_IN,
  async (user, thunkAPI) => {
    try {
      const { data } = await userService.logIn({ user });
      console.log('el usuario fue logueado', data);
      return data;
    } catch ({ response: { data } }) {
      console.log('el usuario no fue logueado', data);
      return thunkAPI.rejectWithValue(data);
    }
  },
);

export const resetErrors = createAction(ThunkActions.USER_RESET_ERRORS);

export const {
  fulfilled: signUpFulfilled,
  pending: signUpPending,
  rejected: signUpRejected,
} = signUp;

export const {
  fulfilled: logInFulfilled,
  pending: logInPending,
  rejected: logInRejected,
} = logIn;

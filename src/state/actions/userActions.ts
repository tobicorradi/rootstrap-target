import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import userService from '../../services/userService';
import { ThunkActions } from '../../constants';
import { LogInInputsType, SignUpInputsType } from '../../types/userInputsTypes';

export const signUp = createAsyncThunk(
  ThunkActions.USER_SIGN_UP,
  async (user: SignUpInputsType, thunkAPI) => {
    try {
      const { data } = await userService.signUp({ user });
      return data;
    } catch ({ response: { data } }) {
      return thunkAPI.rejectWithValue(data);
    }
  },
);
export const logIn = createAsyncThunk(
  ThunkActions.USER_LOG_IN,
  async (user: LogInInputsType, thunkAPI) => {
    try {
      const { data, headers } = await userService.logIn({ user });
      return { ...data, ...headers };
    } catch ({ response: { data } }) {
      return thunkAPI.rejectWithValue(data);
    }
  },
);

export const logOut = createAction(ThunkActions.USER_LOG_OUT);

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

import { createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../../services/userService';
import { SignUpInputsType } from '../../types/userInputsTypes';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (user, thunkAPI) => {
    try {
      const { data } = await userService.signIn({ user });
      return data;
    } catch ({ response: { data } }) {
      return thunkAPI.rejectWithValue(data);
    }
  },
);

export const {
  fulfilled: signUpFulfilled,
  pending: signUpPending,
  rejected: signUpRejected,
} = signUp;

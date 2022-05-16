import { createAsyncThunk } from '@reduxjs/toolkit';
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

export const {
  fulfilled: signUpFulfilled,
  pending: signUpPending,
  rejected: signUpRejected,
} = signUp;

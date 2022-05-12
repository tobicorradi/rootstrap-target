import { createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../../services/userService';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (user, thunkAPI) => {
    try {
      const { data } = await userService.signIn({ user });
      console.log('Se hizo Sign Up', data);
      return data;
    } catch ({ response: { data } }) {
      console.log('Error en el SignUp', data);
      return thunkAPI.rejectWithValue(data);
    }
  },
);

export const {
  fulfilled: signUpFulfilled,
  pending: signUpPending,
  rejected: signUpRejected,
} = signUp;

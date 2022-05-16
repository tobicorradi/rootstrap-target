/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { signUpFulfilled, signUpPending, signUpRejected } from '../actions/userActions';
import { RequestStatus } from '../../constants/requestStatus';

const initialState = {
  status: null,
  userData: {},
  requestErrors: {},
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpFulfilled.toString()]: (state, { payload }) => {
      state.userData = payload;
      state.status = RequestStatus.FULFILLED;
      state.requestErrors = {};
    },
    [signUpPending.toString()]: (state) => {
      state.status = RequestStatus.PENDING;
    },
    [signUpRejected.toString()]: (state, { payload }) => {
      state.status = RequestStatus.REJECTED;
      state.requestErrors = payload.errors;
    },
  },
});

export const usernameSelector = (state) => state.user.userData.username;

export const statusSelector = (state) => state.user.status;

export const authSelector = (state) => state.user.isAuthenticated;

export const requestErrorsSelector = (state) => state.user.requestErrors;

export default userSlice.reducer;

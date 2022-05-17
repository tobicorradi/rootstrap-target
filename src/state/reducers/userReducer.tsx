/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  signUpFulfilled, signUpPending, signUpRejected, logInFulfilled, logInRejected, resetErrors, logInPending,
} from '../actions/userActions';
import { RequestStatus } from '../../constants/requestStatus';

const initialState = {
  status: null,
  userData: {},
  requestErrors: {},
  isAuthenticated: false,
};

const fulfilledReducer = (state, { payload }) => {
  state.userData = payload;
  state.status = RequestStatus.FULFILLED;
  state.requestErrors = {};
  state.isAuthenticated = true;
};

const pendingReducer = (state, { payload }) => {
  state.status = RequestStatus.PENDING;
};

const rejectedReducer = (state, { payload }) => {
  state.status = RequestStatus.REJECTED;
  state.requestErrors = payload.errors;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpFulfilled.toString()]: fulfilledReducer,
    [logInFulfilled.toString()]: fulfilledReducer,
    [signUpPending.toString()]: pendingReducer,
    [logInPending.toString()]: pendingReducer,
    [signUpRejected.toString()]: rejectedReducer,
    [logInRejected.toString()]: rejectedReducer,
    [resetErrors.toString()]: (state) => {
      state.requestErrors = {};
    },
  },
});

export const usernameSelector = (state) => state.user.userData.username;

export const statusSelector = (state) => state.user.status;

export const authSelector = (state) => state.user.isAuthenticated;

export const requestErrorsSelector = (state) => state.user.requestErrors;

export default userSlice.reducer;

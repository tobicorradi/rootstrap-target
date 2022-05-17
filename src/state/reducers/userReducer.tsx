/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  signUpFulfilled, signUpPending, signUpRejected, logInFulfilled,
  logInRejected, resetErrors, logInPending,
} from '../actions/userActions';
import { RequestStatus } from '../../constants/requestStatus';
import { InitialStateType } from '../../types/initialStateTypes';

const initialState: InitialStateType = {
  status: null,
  data: {},
  requestErrors: {},
  isAuthenticated: false,
};

const pendingReducer = (state: InitialStateType) => {
  state.status = RequestStatus.PENDING;
};

const rejectedReducer = (state: InitialStateType, { payload }) => {
  state.status = RequestStatus.REJECTED;
  state.requestErrors = payload.errors;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpFulfilled.toString()]: (state: InitialStateType, { payload }) => {
      state.data = payload;
      state.status = RequestStatus.FULFILLED;
      state.requestErrors = {};
    },
    [logInFulfilled.toString()]: (state: InitialStateType, { payload }) => {
      state.data = payload;
      state.status = RequestStatus.FULFILLED;
      state.requestErrors = {};
      state.isAuthenticated = true;
    },
    [signUpPending.toString()]: pendingReducer,
    [logInPending.toString()]: pendingReducer,
    [signUpRejected.toString()]: rejectedReducer,
    [logInRejected.toString()]: rejectedReducer,
    [resetErrors.toString()]: (state) => {
      state.requestErrors = {};
    },
  },
});

export const usernameSelector = (state) => state.user.data.username;

export const statusSelector = (state) => state.user.status;

export const authSelector = (state) => state.user.isAuthenticated;

export const requestErrorsSelector = (state) => state.user.requestErrors;

export default userSlice.reducer;

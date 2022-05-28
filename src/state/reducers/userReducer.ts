/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  signUpFulfilled, signUpPending, signUpRejected, logInFulfilled,
  logInRejected, resetErrors, logInPending, logOut,
} from '../actions/userActions';
import { RequestStatus } from '../../constants';
import { InitialStateType } from '../../types/initialStateTypes';
import type { RootState } from '../store';

const initialState: InitialStateType = {
  status: null,
  data: {},
  requestErrors: {},
  isAuthenticated: false,
  token: '',
  client: '',
};

const pendingReducer = (state: InitialStateType) => {
  state.status = RequestStatus.PENDING;
};

const rejectedReducer = (state: InitialStateType, { payload }: {payload: {[key: string]: any}}) => {
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
      state.data = payload.data;
      state.status = RequestStatus.FULFILLED;
      state.token = payload['access-token'];
      state.client = payload.client;
      state.isAuthenticated = true;
      state.requestErrors = {};
    },
    [signUpPending.toString()]: pendingReducer,
    [logInPending.toString()]: pendingReducer,
    [signUpRejected.toString()]: rejectedReducer,
    [logInRejected.toString()]: rejectedReducer,
    [logOut.toString()]: () => initialState,
    [resetErrors.toString()]: (state) => {
      state.requestErrors = {};
    },
  },
});

export const usernameSelector = (state: RootState) => state.user.data.username;

export const statusSelector = (state: RootState) => state.user.status;

export const authSelector = (state: RootState) => state.user.isAuthenticated;

export const requestErrorsSelector = (state: RootState) => state.user.requestErrors;

export default userSlice.reducer;

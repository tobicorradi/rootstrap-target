/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../constants';
import { NewTargetTypes, TargetTypes } from '../../types/TargetTypes';
import {
  newTargetCoordinates, newTargetFormData,
  createRejected,
  listFullfilled,
  createPending,
} from '../actions/targetAction';
import type { RootState } from '../store';

interface InitialTargetState {
  targets: TargetTypes[],
  newTarget: NewTargetTypes,
  status: null | RequestStatus.FULFILLED | RequestStatus.PENDING | RequestStatus.REJECTED
}

const initialState: InitialTargetState = {
  targets: [],
  newTarget: {
    radius: null,
    title: null,
    topic_id: null,
    lat: null,
    lng: null,
  },
  status: null,
};

const pendingReducer = (state: InitialTargetState) => {
  state.status = RequestStatus.PENDING;
};

export const targetSlice = createSlice({
  name: 'target',
  initialState,
  reducers: {},
  extraReducers: {
    [newTargetCoordinates.toString()]: (state, { payload: { lat, lng } }) => {
      state.newTarget.lat = lat;
      state.newTarget.lng = lng;
    },
    [newTargetFormData.toString()]: (state, { payload }) => {
      state.newTarget.radius = payload;
    },
    [createPending.toString()]: pendingReducer,
    [createRejected.toString()]: (state, { payload }) => {
      console.log(payload);
    },
    [listFullfilled.toString()]: (state, { payload }) => {
      state.targets = payload.targets;
    },
  },
});

export const targetsSelector = (state: RootState) => state.target.targets;

export const newTargetSelector = (state: RootState) => state.target.newTarget;

export const statusSelector = (state: RootState) => state.target.status;

export default targetSlice.reducer;

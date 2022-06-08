/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { newTargetCoordinates, newTargetFormData } from '../actions/targetAction';
import type { RootState } from '../store';

const initialState = {
  targets: [],
  newTarget: {
    radius: null,
    title: null,
    id_topic: null,
    lat: null,
    lng: null,
  },
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
  },
});

export const targetsSelector = (state: RootState) => state.target.targets;

export const newTargetSelector = (state: RootState) => state.target.newTarget;

export default targetSlice.reducer;

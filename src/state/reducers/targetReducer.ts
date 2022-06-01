/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';
import { newTargetCoordinates, newTargetFormData } from '../actions/targetAction';
import type { RootState } from '../store';

const initialState = {
  targets: [
    {
      target: {
        id: 3,
        title: 'new target',
        lat: -34.60558124333073,
        lng: -58.45071422798693,
        radius: 234,
        topic_id: 2,
      },
    },
    {
      target: {
        id: 3,
        title: 'new target',
        lat: -34.60881321702712,
        lng: -58.4447162690486,
        radius: 163,
        topic_id: 2,
      },
    },
  ],
  newTarget: {
    radius: 100,
    title: '',
    id_topic: '',
    lat: 0,
    lng: 0,
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

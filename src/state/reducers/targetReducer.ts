/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { NewTargetTypes, TargetTypes } from '../../types/TargetTypes';
import { newTargetCoordinates, newTargetFormData } from '../actions/targetAction';
import type { RootState } from '../store';

interface initialTargetState {
  targets: TargetTypes[],
  newTarget: NewTargetTypes
}

const initialState: initialTargetState = {
  targets: [],
  newTarget: {
    radius: null,
    title: null,
    topic_id: null,
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

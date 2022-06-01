/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../constants';
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
  newTarget: {},
};

export const targetSlice = createSlice({
  name: 'target',
  initialState,
  reducers: {},
  extraReducers: {

  },
});

export const targetsSelector = (state: RootState) => state.target.targets;

export default targetSlice.reducer;

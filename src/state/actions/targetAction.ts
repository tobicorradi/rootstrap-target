import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import TargetActions from '../../constants/targetActions';
import targetService from '../../services/targetService';
import { TargetTypes } from '../../types/TargetTypes';

export const create = createAsyncThunk(
  TargetActions.CREATE,
  async (target: TargetTypes, thunkAPI) => {
    try {
      await targetService.create({ target });
      const { data } = await targetService.list();
      return data;
    } catch ({ response: { data } }) {
      return thunkAPI.rejectWithValue(data);
    }
  },
);

export const list = createAsyncThunk(
  TargetActions.LIST,
  async (_, thunkAPI) => {
    try {
      const { data } = await targetService.list();
      return data;
    } catch ({ response: { data } }) {
      throw thunkAPI.rejectWithValue(data);
    }
  },
);

export const {
  fulfilled: createFullfilled,
  pending: createPending,
  rejected: createRejected,
} = create;

export const {
  fulfilled: listFullfilled,
  pending: listPending,
  rejected: listRejected,
} = list;

export const newTargetCoordinates = createAction('target/newTargetCoordinates');

export const newTargetFormData = createAction('target/newTargetFormData');

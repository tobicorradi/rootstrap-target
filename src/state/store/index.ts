import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../reducers/userReducer';

export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

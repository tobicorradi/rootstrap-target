import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../reducers/userReducer';
import { targetSlice } from '../reducers/targetReducer';

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    target: targetSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

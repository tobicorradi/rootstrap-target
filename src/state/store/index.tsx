import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../reducers/userReducer';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

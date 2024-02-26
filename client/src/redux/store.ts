import { configureStore } from '@reduxjs/toolkit';
import mygameSlice from './slices/mygameSlice';

export const store = configureStore({
  reducer: {
    mygame: mygameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

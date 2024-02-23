import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import todoSlice from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

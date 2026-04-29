import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';
import notesReducer from './notesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    entrinotes: notesReducer,
  },
});
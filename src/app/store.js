import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import profileReducer from '../features/profile/profileSlice';
import themeReducer from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    theme: themeReducer
  },
});

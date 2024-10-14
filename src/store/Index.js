import { configureStore } from '@reduxjs/toolkit';
import goldReducer from './goldSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    gold: goldReducer,
    theme: themeReducer,
  },
});

export default store;

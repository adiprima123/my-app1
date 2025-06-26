import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterSlice';
import kursusReducer from './reducer/kursusSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    kursus: kursusReducer,
  },
});

export default store;

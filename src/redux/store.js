import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';

const store = configureStore({
  reducer: combineReducers({
    missions: missionReducer,
  }),
});

export default store;

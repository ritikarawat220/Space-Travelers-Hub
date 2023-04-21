import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: combineReducers({
    missions: missionReducer,
    rockets: rocketReducer,
  }),
});

export default store;

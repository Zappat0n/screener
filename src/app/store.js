import { configureStore } from '@reduxjs/toolkit';
import indexReducer from './reducers/indexSlice';
import stockReducer from './reducers/stockSlice';
import profileReducer from './reducers/profileSlice';

const store = configureStore({
  reducer: {
    indexes: indexReducer,
    stocks: stockReducer,
    profile: profileReducer,
  },
});

export default store;

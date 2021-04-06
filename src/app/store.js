import { configureStore } from '@reduxjs/toolkit';
import indexReducer from './reducers/indexSlice';
import stockReducer from './reducers/stockSlice';

const store = configureStore({
  reducer: {
    indexes: indexReducer,
    stocks: stockReducer,
  },
});

export default store;

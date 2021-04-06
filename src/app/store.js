import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import indexReducer from '../app/reducers/indexSlice';
import stockReducer from './reducers/stockSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    indexes: indexReducer,
    stock: stockReducer,
  },
});

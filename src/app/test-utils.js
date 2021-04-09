import React from 'react';
import { createStore, combineReducers } from 'redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import indexReducer from './reducers/indexSlice';
import stockReducer from './reducers/stockSlice';
import profileReducer from './reducers/profileSlice';
import filterReducer from './reducers/filterSlice';

const rootReducer = combineReducers({
  indexes: indexReducer, stocks: stockReducer, profile: profileReducer, filter: filterReducer,
});

const initialState = {
  stocks: {
    AAPL: {
      price: 100,
      companyName: 'Apple Inc',
      changes: 1,
      sector: 'Technology',
    },
  },
  profile: {
    data: {
      image: '',
      companyName: 'Microsoft',
      price: 100,
      changes: 1,
      mktCap: 1000000,
      range: '0-100',
      country: 'US',
    },
  },
};

const renderComponent = (component) => render(
  <Provider store={createStore(rootReducer, initialState)}>
    <BrowserRouter>
      {component}
    </BrowserRouter>
  </Provider>,
);

export * from '@testing-library/react';
export { renderComponent };

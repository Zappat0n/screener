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
  indexes: {
    GSPC: {
      name: 'S&P 500',
      price: 4000,
      changesPercentage: 2,
    },
    NDX: {
      name: 'NASDAQ 100',
      price: 1000,
    },
    STOXX50E: {
      name: 'ESTX 50 PR.EUR',
      price: 3000,
    },
  },
  stocks: {
    AAPL: {
      price: 100,
      companyName: 'Apple Inc',
      changes: 1,
      sector: 'Technology',
    },
    MSFT: {
      price: 110,
      companyName: 'Microsoft',
    },
    GOOG: {
      price: 120,
      companyName: 'Google',
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

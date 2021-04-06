import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getQuote } from '../api/queries';

const initialState = {
  AAPL: { name: 'Apple Inc.', price: '' },
};

export const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    updateStocks: (state, action) => {
      action.payload.forEach((stock) => {
        // eslint-disable-next-line no-param-reassign
        state[stock.symbol] = stock;
      });
    },
  },
});

export const refreshStocks = createAsyncThunk(
  'stocks/updateStocks',
  async (ticker) => {
    const response = await getQuote(ticker);
    stockSlice.actions.updateStocks(response);
    return response;
  },
);

export const { update, updateStocks } = stockSlice.actions;

export default stockSlice.reducer;

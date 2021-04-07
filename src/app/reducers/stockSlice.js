import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile } from '../api/queries';

const initialState = {
};

export const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    clearStocks: (state) => {
      // eslint-disable-next-line no-param-reassign
      Object.keys(state).forEach((key) => delete state[key]);
    },
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
    const response = await getProfile(ticker);
    stockSlice.actions.updateStocks(response);
    return response;
  },
);

export const { clearStocks, updateStocks } = stockSlice.actions;

export default stockSlice.reducer;

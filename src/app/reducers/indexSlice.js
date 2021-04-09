/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getQuote } from '../api/queries';

const initialState = {
  GSPC: { name: 'S&P 500', price: '' },
  NDX: { name: 'NASDAQ 100', price: '' },
  STOXX50E: { name: 'ESTX 50 PR.EUR', price: '' },
};

export const indexSlice = createSlice({
  name: 'indexes',
  initialState,
  reducers: {
    clearIndexes: (state) => {
      Object.keys(state).forEach((key) => delete state[key]);
    },
    updateQuote: (state, action) => {
      // eslint-disable-next-line prefer-destructuring
      state[action.payload[0].symbol] = action.payload[0];
    },
    updateIndexes: (state, action) => {
      action.payload.forEach((index) => {
        state[index.symbol] = index;
      });
    },
  },
});

export const refreshIndexes = createAsyncThunk(
  'indexes/updateIndexes',
  async (indexes) => {
    const response = await getQuote(indexes);
    indexSlice.actions.updateIndexes(response);
    return response;
  },
);

export const { clearIndexes, updateQuote, updateIndexes } = indexSlice.actions;

export default indexSlice.reducer;

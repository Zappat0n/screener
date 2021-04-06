import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getQuotes } from "../api/queries";

const initialState = {
  '^GSPC': {name: 'S&P 500', price: ''},
  '^NDX': {name: 'NASDAQ 100', price: ''},
  '^N100': {name: 'EURONEXT 100', price: ''},
  '^STOXX50E': {name: 'STX 50 PR.EUR', price: ''},
  '^FTSE': {name: 'FTSE 100', price: ''},
  '^GDAXI': {name: 'DAX PERFORMANCE-INDEX', price: ''},
  '^IBEX': {name: 'IBEX 35', price: ''},
  '^N225': {name: 'Nikkei 225', price: ''},
};

export const indexSlice = createSlice({
  name: 'indexes',
  initialState,
  reducers: {
    updateQuote: (state, action) => {
      state[action.payload[0].symbol] = action.payload[0];
    },
    updateIndexes: (state, action) => {
      console.log(action.payload);
      action.payload.forEach((index) => {
        state[index.symbol] = index;
      })
      console.log(state.indexes);
    },
  },
});

export const refreshIndexes = createAsyncThunk(
  'indexes/updateIndexes',
  async (ticker) => {
    const response = await getQuotes(ticker);
    indexSlice.actions.updateIndexes(response)
    return response;
  }
);

export const { update, updateIndexes } = indexSlice.actions;

export default indexSlice.reducer;

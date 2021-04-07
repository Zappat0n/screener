import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'All',
  stocksVisible: true,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
    updateVisible: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.stocksVisible = !state.stocksVisible;
    },
    setVisible: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.stocksVisible = true;
    },
  },
});

export const { setVisible, updateFilter, updateVisible } = filterSlice.actions;

export default filterSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile } from '../api/queries';

const initialState = { };

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state[action.payload.symbol] = action.payload;
    },
  },
});

export const refreshProfile = createAsyncThunk(
  'stocks/updateStocks',
  async (ticker) => {
    const response = await getProfile(ticker);
    profileSlice.actions.updateProfile(response);
    return response;
  },
);

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;

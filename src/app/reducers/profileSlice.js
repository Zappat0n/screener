import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile } from '../api/queries';

const initialState = { };

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const data = action.payload[0];
      // eslint-disable-next-line no-param-reassign
      state.data = data;
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export const refreshProfile = createAsyncThunk(
  'profile/updateProfile',
  async (ticker) => {
    const response = await getProfile(ticker);
    updateProfile(response);
    return response;
  },
);

export default profileSlice.reducer;

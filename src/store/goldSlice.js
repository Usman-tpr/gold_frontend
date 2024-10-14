import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listings: [],
  loading: false,
  error: null,
};

const goldSlice = createSlice({
  name: 'gold',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.listings = action.payload;
    },
    fetchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = goldSlice.actions;
export default goldSlice.reducer;

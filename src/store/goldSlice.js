import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  response: [],
  loading: false,
  error: null,
  successMessage: null,
};

const goldSlice = createSlice({
  name: 'gold',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.listings = action.payload;
      state.successMessage = 'Operation successful!';
    },
    fetchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearMessages(state) {
      state.error = null;
      state.successMessage = null;
    },
  },
});

// Thunk to post ad with a dynamic endpoint
export const postAd = (endpoint, adData) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const response = await axios.post(`https://gold-backend-eta.vercel.app${endpoint}`, adData);
    dispatch(fetchSuccess(response.data));
    return response.data
  } catch (error) {
    dispatch(fetchFailure(error.response?.data || error.message));
  }
};

export const getRequest = (endpoint) => async(dispatch) =>{
  try {
    dispatch(fetchStart());
    const response = await axios.get(`https://gold-backend-eta.vercel.app${endpoint}` ,
 
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("Gold_token")}` }, 
      }
    );
    dispatch(fetchSuccess(response.data));
    return response.data
  } catch (error) {
    dispatch(fetchFailure(error.response?.data || error.message));
  }
} 

export const { fetchStart, fetchSuccess, fetchFailure, clearMessages } = goldSlice.actions;

export default goldSlice.reducer;

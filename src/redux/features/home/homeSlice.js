import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApiConstants, LoadingType} from '../../../services/api/constant';
import axios from 'axios';

// Async action creator for get homeScreen data
export const fetchGetHomeApiData = createAsyncThunk(
  ApiConstants.homeData,
  async () => {
    console.log('---');
    try {
      const response = await axios.get(ApiConstants.homeData);
      console.log('=================fetchGetHomeApiData===================');
      console.log(response);
      console.log('====================================');
      return response.data;
    } catch (error) {
      const errorData = error?.response?.data;
      console.log('==================fetchGetHomeApiData==================');
      console.log(error);
      console.log('====================================');
      if (!errorData?.Success) {
        showToast({
          errorMessage: errorData?.Message,
          type: 'error',
        });
      }
      throw new Error('Login failed. Please check your credentials.');
    }
  },
);

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchGetHomeApiData.pending, state => {
      state.loading = LoadingType.pending;
    });
    builder.addCase(fetchGetHomeApiData.fulfilled, (state, action) => {
      state.loading = LoadingType.idle;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchGetHomeApiData.rejected, (state, action) => {
      state.loading = LoadingType.idle;
      state.error = action.error.message;
    });
  },
});

export default homeSlice.reducer;

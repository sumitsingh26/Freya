// src/features/authSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ApiConstants} from '../../../services/api/apiConstants';
import {setStoredValue} from '../../../utils/helperFunctions';
import {appKeys} from '../../../utils/constant';

// Async action creator for login
export const loginUser = createAsyncThunk('auth/loginUser', async params => {
  try {
    const response = await axios.post(`${ApiConstants.login}`, params);
    return response.data;
  } catch (error) {
    throw new Error('Login failed. Please check your credentials.');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: 'idle',
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    // Other reducers for logout, etc.
    setUser(state, action) {
      state.user = action.payload.resultData;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.user = action.payload.resultData;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = 'idle';
      state.error = action.error.message;
    });
  },
});

export const {setUser, clearUser} = authSlice.actions;
export const selectUser = state => state.auth.user;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;

export default authSlice.reducer;

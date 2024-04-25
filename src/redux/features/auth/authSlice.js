// src/features/authSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ApiConstants, LoadingType} from '../../../services/api/constant';
import {
  removeStoredValue,
  setStoredValue,
  showToast,
} from '../../../utils/helperFunctions';
import {appKeys} from '../../../utils/constant';

// Async action creator for login
export const loginUser = createAsyncThunk('auth/loginUser', async params => {
  try {
    const response = await axios.post(ApiConstants.login, params);
    console.log({response});
    return response?.data;
  } catch (error) {
    const errorData = error?.response?.data;
    console.log({error});
    if (!errorData?.Success) {
      showToast({
        errorMessage: errorData?.Message,
        type: 'error',
      });
    }
    throw new Error('Login failed. Please check your credentials.');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: LoadingType.idle,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser(state, action) {
      const {token, usersData} = action.payload?.resultData;
      state.user = usersData;
      state.isAuthenticated = true;
      setStoredValue(appKeys.user, usersData);
      setStoredValue(appKeys.accessToken, token);
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      removeStoredValue(appKeys.accessToken);
      removeStoredValue(appKeys.user);
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.loading = LoadingType.pending;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = LoadingType.idle;
      state.user = action.payload.resultData;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = LoadingType.idle;
      state.error = action.error.message;
    });
  },
});

export const {setUser, clearUser} = authSlice.actions;
export const selectUser = state => state.auth.user;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;

export default authSlice.reducer;

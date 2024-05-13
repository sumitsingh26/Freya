import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ApiConstants, LoadingType} from '../../../services/api/constant';
import {showToast} from '../../../utils/helperFunctions';

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

// Async action creator for user registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async params => {
    try {
      const response = await axios.post(ApiConstants.register, params);
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
      throw new Error('Registration failed.');
    }
  },
);

// Async action creator for Email Verification
export const emailVerification = createAsyncThunk(
  'auth/emailVerification',
  async params => {
    try {
      const response = await axios.post(ApiConstants.emailVerification, params);
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
      throw new Error('Verification failed.');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: LoadingType.idle,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    setGuest(state) {
      console.log({state});
      state.isAuthenticated = true;
    },
    setUser(state, action) {
      const {token, usersData} = action.payload?.resultData;
      state.user = {token, usersData};
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: builder => {
    //Login
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

    //Register
    builder.addCase(registerUser.pending, state => {
      state.loading = LoadingType.pending;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = LoadingType.idle;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = LoadingType.idle;
      state.error = action.error.message;
    });

    //Email Verification
    builder.addCase(emailVerification.pending, state => {
      state.loading = LoadingType.pending;
    });
    builder.addCase(emailVerification.fulfilled, (state, action) => {
      state.loading = LoadingType.idle;
      state.error = null;
    });
    builder.addCase(emailVerification.rejected, (state, action) => {
      state.loading = LoadingType.idle;
      state.error = action.error.message;
    });
  },
});

export const {setGuest, setUser, clearUser} = authSlice.actions;
export const selectUser = state => state.auth.user;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;

export default authSlice.reducer;

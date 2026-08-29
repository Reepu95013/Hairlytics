import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authThunk';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  onBoardingStatus: false,
  role: null, // 'customer' | 'vendor'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.error = null;
    },

    clearError: state => {
      state.error = null;
    },

    // Onboarding completed
    setOnBoardingStatus: (state, action) => {
      state.onBoardingStatus = action.payload;
    },

    // Change current role
    setRole: (state, action) => {
      state.role = action.payload;
    },

    // Optional helper
    resetRole: state => {
      state.role = null;
    },
  },

  extraReducers: builder => {
    builder
      // LOGIN START
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })

      // LOGIN SUCCESS
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload.user;
        state.token = action.payload.token;
      })

      // LOGIN FAILED
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError, setOnBoardingStatus, setRole, resetRole, } = authSlice.actions;

export default authSlice.reducer;

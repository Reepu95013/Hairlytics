import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authThunk';
import { jwtDecode } from 'jwt-decode';
import { key } from '../../utils/key';

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
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
      state.refreshToken = null;
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
        const decoded = jwtDecode(action.payload.data?.token);
        console.log("decoded", decoded);
        if (decoded?.role?.toLowerCase() !== 'admin') {
         state.user = decoded.unique_name;
         state.token = action.payload.data?.token;
         state.refreshToken = action.payload.data?.refreshToken,
         state.role = decoded?.role?.toLowerCase() === 'vendor'? key.STORAGE_KEYS.ADMIN: key.STORAGE_KEYS.USER;
        }
        state.error = {data:"Username and Password is not valid"}
        state.loading = false;
        
      })

      // LOGIN FAILED
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError, setOnBoardingStatus, setRole, resetRole } =
  authSlice.actions;

export default authSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../api/authApi';

export const loginUser = createAsyncThunk(
  'auth/loginUser',

  async (data, { rejectWithValue }) => {
    try {
      const response = await loginApi(data);
      return response;
    } catch (error) {
      return rejectWithValue({
        status: error.status,
        message: error.message,
        data: error.data,
      });
    }
  },
);

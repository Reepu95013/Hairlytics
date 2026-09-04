import { createAsyncThunk } from '@reduxjs/toolkit';
import { customerRegisterApi, loginApi } from '../../api/authApi';

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

export const createAccount = createAsyncThunk(
  'auth/createAccount',
  async (accountData, { rejectWithValue }) => {
    try {
      const response = await customerRegisterApi(accountData);
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

import { API_ROUTES } from '../constants/apiRoutes';
import axiosClient from './axiosClient';

export const loginApi = async data => {
  console.log('data', data);
  const response = await axiosClient.post(API_ROUTES.AUTH.LOGIN, data, {
    headers: {
      // This overrides the global application/json header for this request
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const forgotPasswordApi = async data => {
  const response = await axiosClient.post(
    API_ROUTES.AUTH.FORGOT_PASSWORD,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};

export const resetPasswordApi = async data => {
  const response = await axiosClient.post(API_ROUTES.AUTH.RESET_PASSWORD, data);
  return response.data;
};

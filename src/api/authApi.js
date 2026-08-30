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

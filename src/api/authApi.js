import { API_ROUTES } from '../constants/apiRoutes';
import axiosClient from './axiosClient';

export const loginApi = async data => {
  const response = await axiosClient.post( API_ROUTES.AUTH.LOGIN, data);

  return response.data;
};
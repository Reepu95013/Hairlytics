import axios from 'axios';

// https://jsonplaceholder.typicode.com/posts

const axiosClient = axios.create({
  baseURL: 'http://10.214.38.30:5087/api/',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  config => {
    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response Interceptor
axiosClient.interceptors.response.use(
  response => {
    // Any status code between 200-299
    return response;
  },

  error => {
   if (error.response) {
      // Backend returned an error response
      const { status, data } = error.response;

      // console.log('Status:', status);
      // console.log('Backend Error:', data);

      switch (status) {
        case 400:
          return Promise.reject({
            status,
            message:
              data?.message ||
              data?.title ||
             'Bad request. Please check your data.',
            data,
          });

        case 401:
          return Promise.reject({
            status,
            message: data?.message || 'Unauthorized. Please login again.',
          });

        case 403:
          return Promise.reject({
            status,
            message: data?.message || 'You do not have permission.',
          });

        case 404:
          return Promise.reject({
            status,
            message: data?.message || 'Resource not found.',
          });

        case 500:
          return Promise.reject({
            status,
            message:
              data?.message || 'Internal server error. Please try again.',
          });

        default:
          return Promise.reject({
            status,
            message: data?.message || 'Something went wrong.',
            data,
          });
      }
    }

    if (error.request) {
      // Request sent but server did not respond
      return Promise.reject({
        status: 0,
        message: 'Unable to connect to server. Check your internet connection.',
      });
    }

    // Axios or configuration error
    return Promise.reject({
      status: 0,
      message: error.message || 'Something went wrong.',
    });
  },
);

export default axiosClient;

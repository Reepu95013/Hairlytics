export const API_ROUTES = {
  AUTH: {
    REGISTER: 'auth/register',
    SEND_EMAIL_OTP: email => `auth/send/email-otp/${encodeURIComponent(email)}`,
    VERIFY_EMAIL_OTP :'auth/verify/email-otp',
    LOGIN: 'auth/login',
    LOGIN: 'auth/login',
    FORGOT_PASSWORD: 'auth/forgot-password',
    RESET_PASSWORD: 'auth/reset-password',
    LOGOUT: 'auth/logout',
    PROFILE: 'auth/profile',

  },

  USER: {
    GET_USER: '/users',
    UPDATE_USER: '/users/update',
    GET_POST: '/posts',
  },
};

export const BASE_URL = 'https://api.caroloom.com/api';
const axios = require('axios');

export const ApiConstants = {
  register: BASE_URL + '/auth/new/Registration',
  login: BASE_URL + '/auth/user/Login',
  emailVerification: BASE_URL + '/auth/otp/email',
  homeData: BASE_URL + '/users/getHomepage',
};

export const LoadingType = {
  idle: 'idle',
  pending: 'pending',
};

export const apiConfig = (url, params) => {
  let data = JSON.stringify(params);
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BASE_URL}${url}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  return config;
};

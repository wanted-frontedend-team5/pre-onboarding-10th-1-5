import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem('access_token'));
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const apis = {
  postSignUp: payload => axios.post(`${BASE_URL}/auth/signup`, payload),

  postSignIn: payload => axios.post(`${BASE_URL}/auth/signin`, payload),
};

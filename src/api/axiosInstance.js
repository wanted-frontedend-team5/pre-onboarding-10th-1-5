import axios from 'axios';
import { BASE_URL } from 'constant/config';
import { getUserTokenInLocalStorage } from 'utils/localTokenUtils';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const axiosAuthInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosAuthInstance.interceptors.request.use(
  config => {
    const token = getUserTokenInLocalStorage();
    const configCopy = { ...config };
    configCopy.headers = { ...config.headers };
    configCopy.headers.Authorization = `Bearer ${token}`;
    return configCopy;
  },
  error => Promise.reject(error),
);

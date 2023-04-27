import axios from 'axios';

const host = 'https://www.pre-onboarding-selection-task.shop/';
export const api = axios.create({
  baseURL: host,
  Headers: {
    'Content-Type': 'application/json',
  },
});

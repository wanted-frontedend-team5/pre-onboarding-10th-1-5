import axios from 'axios';
import { BASE_URL } from '../constants/base_url';
import { axiosErrorHandler } from './axiosErrorHandler';

const signInstance = axios.create({
  baseURL: `${BASE_URL}/auth`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postSignIn = async userInfo => {
  try {
    const signInRes = await signInstance.post('/signin', userInfo);

    return {
      status: signInRes.status,
      accessToken: signInRes.data.access_token,
    };
  } catch (error) {
    axiosErrorHandler(error);
  }
};

export const postSignUp = async userInfo => {
  try {
    const signUpRes = await signInstance.post('/signup', userInfo);

    return {
      status: signUpRes.status,
    };
  } catch (error) {
    axiosErrorHandler(error);
  }
};

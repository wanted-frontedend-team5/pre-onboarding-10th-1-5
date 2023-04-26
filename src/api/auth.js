import { AxiosError } from 'axios';
import { axiosInstance } from './client';

const signIn = async loginData => {
  try {
    const res = await axiosInstance.post('/auth/signin', loginData);
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

const signUp = async signupData => {
  try {
    const res = await axiosInstance.post('/auth/signup', signupData);
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

const authApi = {
  signIn,
  signUp,
};

export default authApi;

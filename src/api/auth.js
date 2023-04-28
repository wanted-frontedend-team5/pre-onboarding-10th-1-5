import { AxiosError } from 'axios';
import { axiosInstance } from './axiosInstance';

const signIn = async signInData => {
  try {
    const response = await axiosInstance.post('/auth/signin', signInData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

const signUp = async signUpData => {
  try {
    const response = await axiosInstance.post('/auth/signup', signUpData);
    return response;
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

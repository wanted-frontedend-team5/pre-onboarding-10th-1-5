import { AxiosError } from 'axios';
import { apis } from './api';

export const postSignUp = async payload => {
  try {
    const response = await apis.postSignUp(payload);
    if (response.status === 201) alert('회원가입이 완료되었습니다.');
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      alert(error.response.data.message);
      return error;
    }
  }
};

export const postSignIn = async payload => {
  try {
    const response = await apis.postSignIn(payload);
    if (response.status === 200) {
      const accessToken = response.data.access_token;
      localStorage.setItem('access_token', accessToken);
      alert('로그인이 완료되었습니다.');
    }

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      alert(error.response.data.message);
      return error;
    }
  }
};

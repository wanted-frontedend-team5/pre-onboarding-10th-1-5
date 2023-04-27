import axios from 'axios';

const API_URL = 'https://www.pre-onboarding-selection-task.shop';

const postSignIn = async pathData => {
  const response = await axios.post(`${API_URL}/auth/signin`, pathData);
  return response.data;
};

export default postSignIn;

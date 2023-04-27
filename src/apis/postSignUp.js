import axios from 'axios';

const API_URL = 'https://www.pre-onboarding-selection-task.shop';
const postSignUp = async pathData => {
  await axios.post(`${API_URL}/auth/signup`, pathData);
};

export default postSignUp;

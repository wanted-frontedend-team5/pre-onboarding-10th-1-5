const { localStorage } = window;

const tokenKey = 'accessToken';

export const putUserTokenInLocalStorage = token => {
  localStorage.setItem(tokenKey, token);
};

export const getUserTokenInLocalStorage = () => localStorage.getItem(tokenKey);

export const removeUserTokenInLocalStorage = () => {
  localStorage.removeItem(tokenKey);
};

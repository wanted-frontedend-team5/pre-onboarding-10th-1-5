import { useNavigate } from 'react-router-dom';

export const useRouterTo = () => {
  const navigation = useNavigate();

  return {
    routerTo: (url, replace = false) => {
      if (replace) {
        navigation(url, { replace: true });
        return;
      }
      navigation(url);
    },
  };
};

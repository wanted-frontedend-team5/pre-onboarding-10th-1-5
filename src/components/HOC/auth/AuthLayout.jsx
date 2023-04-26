import { useEffect } from 'react';
import { useRouterTo } from '../../../hooks/useRouterTo';
import { getUserTokenInLocalStorage } from '../../../utils/localTokenUtils';

export default function AuthLayout({ children, withAuth, redirectPath = '/' }) {
  const { routerTo } = useRouterTo();

  useEffect(() => {
    const authToken = getUserTokenInLocalStorage();
    if (withAuth && !authToken) routerTo(redirectPath, true);
    if (!withAuth && authToken) routerTo(redirectPath, true);
  }, []);

  return children;
}

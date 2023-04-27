import { useEffect } from 'react';
import { useRouterTo } from '../../../hooks/useRouterTo';
import { getUserTokenInLocalStorage } from '../../../utils/localTokenUtils';
import AuthFalseNav from '../../nav/AuthFalseNav';

export default function AuthLayout({
  children,
  withAuth,
  navItem,
  redirectPath = '/',
}) {
  const { routerTo } = useRouterTo();

  useEffect(() => {
    const authToken = getUserTokenInLocalStorage();
    if (withAuth && !authToken) routerTo(redirectPath, true);
    if (!withAuth && authToken) routerTo(redirectPath, true);
  }, []);

  if (withAuth) return children;

  if (!withAuth) {
    return (
      <>
        <AuthFalseNav authFalseNavElements={navItem} />
        {children}
      </>
    );
  }
}

import { useEffect } from 'react';
import { useRouterTo } from '../../../hooks/useRouterTo';
import { getUserTokenInLocalStorage } from '../../../utils/localTokenUtils';
import AuthFalseNav from '../../nav/AuthFalseNav';
import AuthTrueNav from '../../nav/AuthTrueNav';

export default function AuthLayout({
  children,
  withAuth,
  authFalseNavElements,
  authTrueNavElements,
  redirectPath = '/',
}) {
  const { routerTo } = useRouterTo();

  useEffect(() => {
    const authToken = getUserTokenInLocalStorage();
    if (withAuth && !authToken) routerTo(redirectPath, true);
    if (!withAuth && authToken) routerTo(redirectPath, true);
  }, []);

  if (withAuth) {
    return (
      <>
        <AuthTrueNav authTrueNavElements={authTrueNavElements} />
        {children}
      </>
    );
  }

  if (!withAuth) {
    return (
      <>
        <AuthFalseNav authFalseNavElements={authFalseNavElements} />
        {children}
      </>
    );
  }
}

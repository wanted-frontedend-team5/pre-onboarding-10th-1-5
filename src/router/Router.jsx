import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthLayout from '../components/HOC/auth/AuthLayout';
import Todo from '../pages/Todo/Todo';
import NotFound from '../pages/NotFound/NotFound';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';

export const rootRouterElements = [
  {
    id: 1,
    path: '/',
    name: '메인페이지',
    element: <Navigate to="/signin" />,
    withAuth: false,
  },
  {
    id: 2,
    path: '/signin',
    name: '로그인 페이지',
    element: <SignIn />,
    withAuth: false,
    redirectPath: '/todo',
  },

  {
    id: 3,
    path: '/signup',
    name: '회원가입 페이지',
    element: <SignUp />,
    withAuth: false,
    redirectPath: '/todo',
  },
  {
    id: 4,
    path: '/todo',
    name: '투두리스트 페이지',
    element: <Todo />,
    withAuth: true,
    redirectPath: '/',
  },
];

// auth false navigation elements
const authFalseNavElements = rootRouterElements.reduce((prev, router) => {
  if (!router.withAuth) {
    return [...prev, { path: router.path, name: router.name }];
  }
  return prev;
}, []);

// auth false navigation elements
const authTrueNavElements = rootRouterElements.reduce((prev, router) => {
  if (router.withAuth) {
    return [...prev, { path: router.path, name: router.name }];
  }
  return prev;
}, []);

export const router = createBrowserRouter(
  rootRouterElements.map(page => {
    if ('redirectPath' in page) {
      return {
        path: page.path,
        element: (
          <AuthLayout
            withAuth={page.withAuth}
            redirectPath={page.redirectPath}
            authFalseNavElements={authFalseNavElements}
            authTrueNavElements={authTrueNavElements}
          >
            {page.element}
          </AuthLayout>
        ),
        errorElement: <NotFound />,
      };
    }

    return {
      path: page.path,
      element: page.element,
      errorElement: <NotFound />,
    };
  }),
);

import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import AuthLayout from '../components/HOC/auth/AuthLayout';
import Todo from '../pages/Todo/Todo';
import NotFound from '../pages/NotFound/NotFound';

const rootRouterElements = [
  {
    path: '/',
    element: <Navigate to="/signin" />,
    withAuth: false,
    errorElement: <NotFound />,
  },
  {
    path: '/signin',
    element: <SignIn />,
    withAuth: false,
    redirectPath: '/todo',
  },
  {
    path: '/signup',
    element: <SignUp />,
    withAuth: false,
    redirectPath: '/todo',
  },
  {
    path: '/todo',
    element: <Todo />,
    withAuth: true,
    redirectPath: '/',
  },
];

const router = createBrowserRouter(
  rootRouterElements.map(page => {
    if ('redirectPath' in page) {
      return {
        path: page.path,
        element: (
          <AuthLayout withAuth={page.withAuth} redirectPath={page.redirectPath}>
            {page.element}
          </AuthLayout>
        ),
      };
    }

    return {
      path: page.path,
      element: page.element,
    };
  }),
);

export default function Router() {
  return <RouterProvider router={router} />;
}

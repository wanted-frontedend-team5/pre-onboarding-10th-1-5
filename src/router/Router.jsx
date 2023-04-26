import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import SignInForm from '../pages/SignIn/SignInForm';
import SignUpForm from '../pages/SignUp/SignUpForm';
import AuthLayout from '../components/HOC/auth/AuthLayout';
import Todo from '../pages/Todo/Todo';
import NotFound from '../pages/NotFound/NotFound';

const rootRouterElements = [
  {
    path: '/',
    element: <Navigate to="/signin" />,
    withAuth: false,
  },
  {
    path: '/signin',
    element: <SignInForm />,
    withAuth: false,
    redirectPath: '/todo',
  },
  {
    path: '/signup',
    element: <SignUpForm />,
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

export default function Router() {
  return <RouterProvider router={router} />;
}

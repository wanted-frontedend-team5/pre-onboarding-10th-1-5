import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import ProtectedRoute from 'components/HOC/auth/ProtectedRoute';
import Todo from 'pages/Todo/Todo';
import NotFound from 'pages/NotFound/NotFound';
import { getUserTokenInLocalStorage } from 'utils/localTokenUtils';

const token = getUserTokenInLocalStorage();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" />,
    errorElement: <NotFound />,
  },
  {
    path: '/signin',
    element: <SignIn />,
    loader: () => {
      if (token) {
        throw redirect('/todo');
      }
      return null;
    },
  },
  {
    path: '/signup',
    element: <SignUp />,
    loader: () => {
      if (token) {
        throw redirect('/todo');
      }
      return null;
    },
  },
  {
    path: '/todo',
    element: (
      <ProtectedRoute>
        <Todo />
      </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

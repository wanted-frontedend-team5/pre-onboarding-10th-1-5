import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
// import ProtectedRoute from '../components/HOC/auth/ProtectedRoute';
import Todo from '../pages/Todo/Todo';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" />,
    errorElement: <NotFound />,
  },
  { index: true, path: '/', element: <Navigate to="/signin" /> },
  { path: '/signin', element: <SignIn /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/todo',
    element: (
      // <ProtectedRoute require>
      <Todo />
      // </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import ProtectedRoute from '../components/HOC/auth/ProtectedRoute';
import NotFound from '../pages/NotFound/NotFound';
import ToDoList from '../pages/Todo/ToDoList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" />,
    errorElement: <NotFound />,
  },
  { path: '/signin', element: <SignIn /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/todo',
    element: (
      <ProtectedRoute>
        <ToDoList />
      </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

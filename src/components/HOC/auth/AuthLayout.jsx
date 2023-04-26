import React from 'react';
import { Navigate } from 'react-router-dom';

export default function AuthLayout({ children, withAuth, redirectPath = '/' }) {
  const authToken = localStorage.getItem('access_token');

  if (withAuth) {
    if (authToken) {
      return children;
    }
    return <Navigate to={redirectPath} />;
  }

  if (!withAuth) {
    if (authToken) {
      return <Navigate to={redirectPath} />;
    }
    return children;
  }
}

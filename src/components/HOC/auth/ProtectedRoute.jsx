import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const tokenKey = 'access_token';
  const token = localStorage.getItem(tokenKey);

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return children;
}

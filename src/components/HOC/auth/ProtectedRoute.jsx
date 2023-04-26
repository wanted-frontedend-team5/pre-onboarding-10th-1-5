import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('access_token');

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return children;
}

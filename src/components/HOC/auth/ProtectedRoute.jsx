import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserTokenInLocalStorage } from '../../../utils/localTokenUtils';

export default function ProtectedRoute({ children }) {
  const token = getUserTokenInLocalStorage();

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return children;
}

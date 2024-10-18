import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from '../../api/rest/axios';
import Loading from '../../shared-components/Loading/Loading';

const PrivateRoute = ({ children, requiredRole }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsAuthorized(false);
        return;
      }
      if (token) {
        try {
          const response = await axiosInstance.get('/auth/verifyToken');
          const { valid, role } = response.data;

          if (valid && (!requiredRole || role === requiredRole)) {
            setIsAuthorized(true);
          } else {
            setIsAuthorized(false);
          }
        } catch (error) {
          console.error('Token verification failed:', error);
          setIsAuthorized(false);
        }
      }
    };

    verifyToken();
  }, [token, requiredRole]);

  if (isAuthorized === null) {
    return <Loading />;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

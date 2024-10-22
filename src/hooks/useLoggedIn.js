import { useEffect, useState } from 'react';
import axiosInstance from '../api/rest/axios';

const useIsLoggedIn = requiredRole => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          const response = await axiosInstance.get('/auth/verifyToken');
          const { valid, role } = response.data;

          if (valid && (!requiredRole || role === requiredRole)) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error('Token verification failed:', error);
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    };

    verifyToken();
  }, [token, requiredRole]);

  return isLoggedIn;
};

export default useIsLoggedIn;

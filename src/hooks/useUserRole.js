import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const useUserRole = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setRole(decodedToken.role);
      } catch (error) {
        console.error('Invalid token', error);
        setRole(null);
      }
    }
  }, []);

  return role;
};

export default useUserRole;

import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Kreiramo provider za autentifikaciju koji omotava celu aplikaciju
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulacija provere da li je korisnik ulogovan (možeš zameniti pravom logikom)
  useEffect(() => {
    const token = localStorage.getItem('token'); // Proverava postojanje tokena u localStorage
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = token => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

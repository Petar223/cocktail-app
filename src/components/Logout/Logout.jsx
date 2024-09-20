import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoutUser from '../../api/rest/auth/logout';
import styled, { keyframes } from 'styled-components';

// Animacija za loader (rotacija)
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Stilizovano dugme sa hover i klik efektima
const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    transform 0.1s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    border-color: ${({ theme }) => theme.hoverBorder};
  }

  &:active {
    transform: scale(0.95); /* Klik efekt - smanjenje dugmeta */
  }

  &:focus {
    outline: none;
  }
`;

// Loader stilizovan kao kružni spinner
const Loader = styled.div`
  border: 4px solid ${({ theme }) => theme.background};
  border-top: 4px solid ${({ theme }) => theme.text};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
  margin: 0 auto;
`;

const Logout = () => {
  const [isLoading, setIsLoading] = useState(false); // Praćenje stanja učitavanja
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true); // Postavi stanje učitavanja na true
    try {
      await logoutUser();
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setIsLoading(false); // Kada završi, vrati stanje učitavanja na false
    }
  };

  return (
    <LogoutButton onClick={handleLogout} disabled={isLoading}>
      {isLoading ? <Loader /> : 'Logout'}
    </LogoutButton>
  );
};

export default Logout;

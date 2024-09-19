import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NotificationWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'error':
        return theme.redAccent[500];
      case 'success':
        return theme.greenAccent[500];
      case 'warning':
        return theme.yellowAccent[600];
      default:
        return theme.grey[500];
    }
  }};
  color: ${({ theme }) => theme.grey[100]};
  padding: 16px 24px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  min-width: 250px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.grey[100]};
  font-size: 16px;
  cursor: pointer;
  margin-left: 16px;
`;

const Notification = ({
  message,
  type = 'default',
  duration = 5000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <NotificationWrapper $isVisible={isVisible} type={type}>
      <span>{message}</span>
      <CloseButton onClick={() => setIsVisible(false)}>Close</CloseButton>
    </NotificationWrapper>
  );
};

export default Notification;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import IconHeartOutline from '../../shared-components/Icons/IconHeartOutline';

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledFavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.grey[100]};
  padding: 0;
  display: flex;
  align-items: center;
  transition:
    transform 0.3s ease,
    fill 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    animation: ${bounce} 0.3s ease;
  }

  svg {
    transition: fill 0.3s ease;
  }
`;

const FavoriteButton = ({ onClick }) => {
  return (
    <StyledFavoriteButton onClick={onClick}>
      <IconHeartOutline fill="currentColor" width={32} height={32} />
    </StyledFavoriteButton>
  );
};

export default FavoriteButton;

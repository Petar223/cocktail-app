import styled from 'styled-components';

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.redAccentSharp};
  color: white;
  border: none;
  border-radius: 0;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  position: absolute;
  top: 12px;
  right: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.redAccentSharp};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ theme }) => theme.redAccentSharp};
    transform: translateY(0);
  }
`;

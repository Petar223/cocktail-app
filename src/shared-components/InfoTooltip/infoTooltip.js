import styled from 'styled-components';

export const InfoText = styled.p`
  display: flex;
  font-size: 22px;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0s linear 0.3s;
  position: absolute;
  top: 100%;
  left: 0;
  white-space: normal;
  background-color: ${({ theme }) => theme.grey[800]};
  color: ${({ theme }) => theme.grey[100]};
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px ${({ theme }) => theme.blackOverlay};
  z-index: 1000;
  width: 350px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover ${InfoText} {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
  }
`;

export const IconContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  cursor: help;
`;

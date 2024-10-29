import { css } from 'styled-components';

export const sharedTaglineStyles = css`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: bold;
  text-shadow: 2px 2px 4px ${({ theme }) => theme.blackOverlay};
  text-align: left;
  line-height: 1.2;
  margin: 8px;
  background: ${({ theme }) => theme.grey[600]};
  color: ${({ theme }) => theme.grey[100]};
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 30px ${({ theme }) => theme.blackOverlay};
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  cursor: pointer;
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.grey[100]};
  transition:
    border-radius 1s ease,
    transform 0.3s ease;

  &:hover {
    border-radius: 0;
    transform: scale(1.02);
  }
`;

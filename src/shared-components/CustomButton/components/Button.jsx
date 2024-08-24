import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  width: 100%;
  border: none;
  padding: 12px 40px;
  background-color: ${({ theme }) => theme.primary[100]};
  color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.grey[100] : theme.grey[900]};
  font-size: 22px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    transition: all 0.25s;
  }

  &:before {
    top: -5px;
    left: -5px;
    border-top: 2px solid ${({ theme }) => theme.primary[100]};
    border-left: 2px solid ${({ theme }) => theme.primary[100]};
  }

  &:after {
    bottom: -5px;
    right: -5px;
    border-bottom: 2px solid ${({ theme }) => theme.primary[100]};
    border-right: 2px solid ${({ theme }) => theme.primary[100]};
  }

  &:hover:before,
  &:hover:after {
    height: 100%;
    width: 100%;
  }
`;

export default Button;

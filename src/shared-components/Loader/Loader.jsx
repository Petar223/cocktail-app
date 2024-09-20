import styled from 'styled-components';

const Loader = styled.div`
  border: ${({ size }) => size / 7 || 2}px solid rgba(255, 255, 255, 0.3);
  border-top: ${({ size }) => size / 7 || 2}px solid white;
  border-radius: 50%;
  width: ${({ size }) => size || 14}px;
  height: ${({ size }) => size || 14}px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;

import styled from 'styled-components';

const ErrorBoundaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 30%;
  color: ${({ theme }) => theme.grey[100]};
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.grey[800]};
  font-size: 1.2em;
  margin: 10% auto;
  width: 500px;
  background-color: ${({ theme }) => theme.grey[900]};
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  padding: 32px;
`;

export default ErrorBoundaryContainer;

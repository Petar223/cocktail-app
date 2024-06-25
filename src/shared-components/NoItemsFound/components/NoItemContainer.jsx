import styled from 'styled-components';

const NoItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  color: ${({ theme }) => theme.grey[100]};
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.blackOverlay};
  font-size: 1.2em;
  margin: auto;
  width: 500px;
  background-color: ${({ theme }) => theme.grey[800]};
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export default NoItemContainer;

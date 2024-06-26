import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px;
  color: ${({ theme }) => theme.grey[100]};
`;

export default HomeContainer;

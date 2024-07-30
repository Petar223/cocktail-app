import styled from 'styled-components';

const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 32px;
  color: ${({ theme }) => theme.grey[100]};
`;

export default TypeContainer;

import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: 2px solid ${({ theme }) => theme.grey[100]};
  border-top: 2px solid ${({ theme }) => theme.grey[100]};
`;

export default HeaderContainer;

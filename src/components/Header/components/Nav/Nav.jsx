import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: ${({ theme }) => theme.grey[800]};
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  text-shadow: 2px 2px 4px ${({ theme }) => theme.blackOverlay};
`;

export default Nav;

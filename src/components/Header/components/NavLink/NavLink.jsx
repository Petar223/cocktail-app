import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.grey[100]};
  text-decoration: none;
  font-size: 1.2em;
  margin: 0 12px;
`;

export default NavLink;

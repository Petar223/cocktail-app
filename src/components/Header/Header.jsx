import React, { useContext } from 'react';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import Nav from './components/Nav/Nav';
import NavContainer from './components/NavContainer/NavContainer';
import LinkContainer from '../../shared-components/styledComponents/LinkContainer/LinkContainer';
import NavLink from './components/NavLink/NavLink';
import ThemeSwitch from '../ThemeSwich/ThemeSwitch';
import Dropdown from '../../shared-components/Dropdown/Dropdown';
import Logout from '../Logout/Logout';
import ThemeDropdownContainer from './components/ThemeDropdownContainer/ThemeDropdownContainer';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <HeaderContainer>
      <Nav>
        <NavContainer>
          {isAuthenticated && (
            <LinkContainer>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/browse">Browse Cocktails</NavLink>
              <NavLink to="/favorites">Favorites</NavLink>
              <NavLink to="/about">About</NavLink>
            </LinkContainer>
          )}
          <ThemeDropdownContainer>
            <ThemeSwitch />
            {isAuthenticated && (
              <Dropdown>
                <Logout />
              </Dropdown>
            )}
          </ThemeDropdownContainer>
        </NavContainer>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

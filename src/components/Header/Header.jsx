import React from 'react';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import Nav from './components/Nav/Nav';
import NavContainer from './components/NavContainer/NavContainer';
import LinkContainer from '../../shared-components/styledComponents/LinkContainer/LinkContainer';
import NavLink from './components/NavLink/NavLink';
import ThemeSwitch from '../ThemeSwich/ThemeSwitch';

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavContainer>
          <LinkContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/browse">Browse Cocktails</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/about">About</NavLink>
          </LinkContainer>
          <ThemeSwitch />
        </NavContainer>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import IconHamburger from '../../shared-components/Icons/IconHamburger';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 1;
  padding: 10px;
  border-radius: 5px;
`;

const DropdownItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  margin: 8px 0;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
  }

  &:last-child {
    border-bottom: none; /* Uklanja donju liniju na poslednjoj stavci */
  }
`;

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <IconHamburger width="24" height="24" />
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {React.Children.map(children, child => (
          <DropdownItem>{child}</DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;

import React from 'react';
import ButtonWrapper from './components/ButtonWrapper';
import Button from './components/Button';

const CustomButton = ({ to, onClick, children }) => {
  return (
    <ButtonWrapper>
      {to ? (
        <Button to={to}>{children}</Button>
      ) : (
        <Button onClick={onClick}>{children}</Button>
      )}
    </ButtonWrapper>
  );
};

export default CustomButton;

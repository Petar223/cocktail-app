import React from 'react';
import ButtonWrapper from './components/ButtonWrapper';
import Button from './components/Button';

const CustomButton = ({ to, children }) => {
  return (
    <ButtonWrapper>
      <Button to={to}>{children}</Button>
    </ButtonWrapper>
  );
};

export default CustomButton;

import React from 'react';
import ButtonWrapper from './components/ButtonWrapper';
import Button from './components/Button';
import Loader from '../Loader/Loader';

const CustomButton = ({ to, onClick, children, isLoading }) => {
  return (
    <ButtonWrapper>
      {to ? (
        <Button to={to}>{isLoading ? <Loader /> : children}</Button>
      ) : (
        <Button onClick={onClick}>{isLoading ? <Loader /> : children}</Button>
      )}
    </ButtonWrapper>
  );
};

export default CustomButton;

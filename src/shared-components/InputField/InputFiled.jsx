import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const labelFocus = keyframes`
  from {
    transform: translateY(0);
    opacity: 0.5;
  }
  to {
    transform: translateY(-50px);
    opacity: 1;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
`;

const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-75%);
  color: ${({ theme }) => theme.grey[500]};
  transition: 0.3s;
  font-size: 14px;

  ${({ $isFocusedOrFilled, theme }) =>
    $isFocusedOrFilled &&
    css`
      animation: ${labelFocus} 0.3s ease forwards;
      color: ${theme.grey[100]};
    `}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 2px solid
    ${({ hasError, theme }) =>
      hasError
        ? theme.redAccent[500]
        : theme.mode === 'dark'
          ? theme.grey[900]
          : theme.grey[100]};
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.redAccent[500] : theme.grey[100]};
  }

  &:focus + ${InputLabel} {
    color: ${({ theme }) => theme.grey[100]};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.redAccent[500]};
  font-size: 14px;
  margin: 10px;
`;

const InputField = ({
  id,
  label,
  register,
  hasError,
  errors,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputWrapper>
      <StyledInput
        id={id}
        hasError={hasError}
        {...register(id, { required: true })}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <InputLabel $isFocusedOrFilled={isFocused || value || hasError}>
        {label}
      </InputLabel>
      {hasError && (
        <ErrorMessage>
          {errors[id]?.message || 'This field is required'}
        </ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default InputField;

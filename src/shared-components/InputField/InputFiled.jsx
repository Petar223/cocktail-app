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
`;

const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #999;
  transition: 0.3s;
  font-size: 14px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      animation: ${labelFocus} 0.3s ease forwards;
      color: #007bff;
    `}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 2px solid ${({ hasError }) => (hasError ? '#ff4d4d' : '#ccc')};
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? '#ff4d4d' : '#007bff')};
  }

  &:focus + ${InputLabel} {
    color: #007bff;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4d4d;
  font-size: 12px;
  margin-top: 10px;
`;

const InputField = ({ id, label, register, hasError, errors, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper>
      <StyledInput
        id={id}
        hasError={hasError}
        {...register(id, { required: true })}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <InputLabel isFocused={isFocused || hasError}>{label}</InputLabel>
      {hasError && (
        <ErrorMessage>
          {errors[id]?.message || 'This field is required'}
        </ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default InputField;

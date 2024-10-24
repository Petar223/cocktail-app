import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import InputField from '../../shared-components/InputField/InputFiled';
import CenteredContainer from '../../shared-components/CenteredContainer/CenteradContainer';
import FormContainer from '../../shared-components/FormContainer/FormContainer';
import { useNotification } from '../../context/NotificationContext';
import loginUser from '../../api/rest/auth/login';
import { useAuth } from '../../context/AuthContext';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
`;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState(null);
  const navigate = useNavigate();
  const showNotification = useNotification();
  const { login } = useAuth();

  useEffect(() => {
    if (loginResponse && loginResponse.token) {
      const { token } = loginResponse;
      localStorage.setItem('token', token);
      login(token);
      navigate('/');
    }
  }, [loginResponse, login, navigate]);

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const response = await loginUser(data);

      if (!response || !response.token) {
        throw new Error('Invalid response from server');
      }

      setLoginResponse(response);
    } catch (error) {
      if (
        error.status === 401 &&
        error.message === 'Invalid username or password'
      ) {
        showNotification('Invalid username or password', 5000, 'error');
      } else {
        showNotification('An error occurred during login', 5000, 'error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CenteredContainer>
      <FormContainer>
        <InputField
          id="username"
          label="Username"
          placeholder="Username"
          register={register}
          $hasError={errors.username}
          errors={errors}
          validationRules={{ required: 'Username is required' }}
        />
        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          register={register}
          validationRules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
          $hasError={errors.password}
          errors={errors}
        />
        <ButtonWrapper>
          <CustomButton onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
            Login
          </CustomButton>
          <CustomButton to={'/register'}>Sign Up</CustomButton>
        </ButtonWrapper>
      </FormContainer>
    </CenteredContainer>
  );
};

export default LoginForm;

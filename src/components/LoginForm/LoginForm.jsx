import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import InputField from '../../shared-components/InputField/InputFiled';
import CenteredContainer from '../../shared-components/CenteredContainer/CenteradContainer';
import FormContainer from '../../shared-components/FormContainer/FormContainer';
import { useNotification } from '../../context/NotificationContext';
import loginUser from '../../api/rest/auth/login';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const showNotification = useNotification();
  const { login } = useAuth();
  const usernameValue = watch('username');
  const passwordValue = watch('password');

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const response = await loginUser(data);

      if (!response || !response.token) {
        throw new Error('Invalid response from server');
      }

      const { token } = response;
      localStorage.setItem('token', token);
      navigate('/');
      login(token);
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
          value={usernameValue}
        />
        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          register={register}
          $hasError={errors.password}
          errors={errors}
          value={passwordValue}
        />
        <CustomButton onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
          Login
        </CustomButton>
      </FormContainer>
    </CenteredContainer>
  );
};

export default LoginForm;

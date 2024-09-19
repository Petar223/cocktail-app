import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../api/rest/axios';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import InputField from '../../shared-components/InputField/InputFiled';
import CenteredContainer from '../../shared-components/CenteredContainer/CenteradContainer';
import FormContainer from '../../shared-components/FormContainer/FormContainer';
import { jwtDecode } from 'jwt-decode';
import { useNotification } from '../../context/NotificationContext';

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
  const usernameValue = watch('username');
  const passwordValue = watch('password');

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/auth/login', data);
      if (!response || !response.data || !response.data.token) {
        throw new Error('Invalid response from server');
      }
      const { token } = response.data;
      localStorage.setItem('token', token);

      navigate('/');
    } catch (error) {
      showNotification('Unexpected error occurred.', 5000, 'error');
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
          register={register}
          hasError={errors.username}
          errors={errors}
          value={usernameValue}
        />

        <InputField
          id="password"
          type="password"
          label="Password"
          register={register}
          hasError={errors.password}
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

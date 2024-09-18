import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../api/rest/axios';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import InputField from '../../shared-components/InputField/InputFiled';
import CenteredContainer from '../../shared-components/CenteredContainer/CenteradContainer';
import FormContainer from '../../shared-components/FormContainer/FormContainer';
import { jwtDecode } from 'jwt-decode';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/auth/login', data);
      const { token } = response.data;
      localStorage.setItem('token', token);
   
      const decodedToken = jwtDecode(token);
      console.log('User info:', decodedToken);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      alert('Login failed: ' + error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CenteredContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="username"
          label="Username"
          register={register}
          hasError={errors.username}
          errors={errors}
        />

        <InputField
          id="password"
          type="password"
          label="Password"
          register={register}
          hasError={errors.password}
          errors={errors}
        />

        <CustomButton onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
          Login
        </CustomButton>
      </FormContainer>
    </CenteredContainer>
  );
};

export default LoginForm;

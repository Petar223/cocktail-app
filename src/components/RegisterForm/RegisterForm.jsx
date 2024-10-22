import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import InputField from '../../shared-components/InputField/InputFiled';
import CenteredContainer from '../../shared-components/CenteredContainer/CenteradContainer';
import FormContainer from '../../shared-components/FormContainer/FormContainer';
import { useNotification } from '../../context/NotificationContext';
import styled from 'styled-components';
// import registerUser from '../../api/rest/auth/register';

const MemberLoginPrompt = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.grey[100]};
`;

const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.blueLight[600]};
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const showNotification = useNotification();
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');
  const email = watch('email');

  const onSubmit = async data => {
    // setIsLoading(true);
    // try {
    //   const response = await registerUser(data);
    //   if (!response || !response.token) {
    //     throw new Error('Invalid response from server');
    //   }
    //   showNotification('Registration successful!', 5000, 'success');
    //   navigate('/login');
    // } catch (error) {
    //   showNotification('An error occurred during registration', 5000, 'error');
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <CenteredContainer>
      <FormContainer>
        <InputField
          id="username"
          label="Username"
          placeholder="Username"
          register={register}
          validationRules={{ required: 'Username is required' }}
          $hasError={errors.username}
          errors={errors}
          value={watch('username')}
        />
        <InputField
          id="email"
          type="email"
          label="Email"
          placeholder="Email"
          register={register}
          validationRules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          }}
          $hasError={errors.email}
          errors={errors}
          value={email}
        />
        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          register={register}
          validationRules={{ required: 'Password is required' }}
          $hasError={errors.password}
          errors={errors}
          value={password}
        />
        <InputField
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          register={register}
          validationRules={{
            required: 'Please confirm your password',
            validate: value => value === password || 'Passwords do not match',
          }}
          $hasError={errors.confirmPassword}
          errors={errors}
          value={confirmPassword}
        />
        <CustomButton onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
          Register
        </CustomButton>

        <MemberLoginPrompt>
          Already a member?
          <LoginLink to="/login">Go to login</LoginLink>
        </MemberLoginPrompt>
      </FormContainer>
    </CenteredContainer>
  );
};

export default RegisterForm;

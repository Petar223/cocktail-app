import axiosInstance from '../axios';

const registerUser = async data => {
  try {
    const response = await axiosInstance.post('/auth/register', data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error.response.data || 'Unknown error occurred';
  }
};

export default registerUser;

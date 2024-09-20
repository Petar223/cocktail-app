import axiosInstance from '../axios';

const loginUser = async data => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Unknown error occurred';
  }
};

export default loginUser;

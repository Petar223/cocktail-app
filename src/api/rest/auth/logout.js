import axiosInstance from '../axios';

const logoutUser = async () => {
  try {
    const response = await axiosInstance.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Unknown error occurred';
  }
};

export default logoutUser;

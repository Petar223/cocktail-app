import axiosInstance from '../axios';

const getDrinks = async () => {
  const response = await axiosInstance.get('/drinks');
  return response.data;
};

export default getDrinks;

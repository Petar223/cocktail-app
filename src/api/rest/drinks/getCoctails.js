import axiosInstance from '../axios';

const getCocktails = async () => {
  const response = await axiosInstance.get('/cocktails');
  return response.data;
};

export default getCocktails;

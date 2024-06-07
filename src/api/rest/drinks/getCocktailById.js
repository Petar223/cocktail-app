import axiosInstance from '../axios';

const getCocktailById = async cocktailId => {
  const response = await axiosInstance.get(`/cocktails/${cocktailId}`);
  return response.data;
};

export default getCocktailById;

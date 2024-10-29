import axiosInstance from '../axios';

const getFavoritesCocktailes = async () => {
  const response = await axiosInstance.get('/favorites');
  return response.data;
};

export default getFavoritesCocktailes;

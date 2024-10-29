import axiosInstance from '../axios';

const addFavoriteCocktail = async cocktailId => {
  try {
    const response = await axiosInstance.post('/favorites/add', { cocktailId });
    return response.data;
  } catch (error) {
    console.error('Failed to add favorite cocktail:', error);
    throw error;
  }
};

export default addFavoriteCocktail;

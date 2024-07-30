import axiosInstance from '../axiosInstance';

const deleteCocktail = async id => {
  try {
    const response = await axiosInstance.delete(`/cocktails/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default deleteCocktail;

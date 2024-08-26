import axiosInstance from '../axios';

const deleteDrink = async id => {
  try {
    const response = await axiosInstance.delete(`/drinks/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default deleteDrink;

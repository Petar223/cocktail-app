import axios from 'axios';
import { useNotification } from '../../context/NotificationContext';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const showNotification = useNotification();

    if (error.response) {
      const message =
        error.response.data?.message || 'Unexpected error occurred';
      showNotification(message, 5000, 'error');
    } else if (error.request) {
      showNotification('No response received from the server.', 5000);
    } else {
      showNotification('Error setting up the request: ' + error.message, 5000);
    }

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

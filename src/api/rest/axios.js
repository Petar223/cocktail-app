import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          return Promise.reject({
            ...error,
            message: 'Bad Request (400): Please check your input.',
          });
        case 401:
          return Promise.reject({
            ...error,
            message:
              'Unauthorized (401): Your session has expired. Please login again.',
          });
        case 403:
          return Promise.reject({
            ...error,
            message:
              'Forbidden (403): You do not have permission to access this resource.',
          });
        case 404:
          return Promise.reject({
            ...error,
            message: 'Not Found (404): The requested resource was not found.',
          });
        case 500:
          return Promise.reject({
            ...error,
            message:
              'Internal Server Error (500): Something went wrong on the server.',
          });
        case 502:
          return Promise.reject({
            ...error,
            message:
              'Bad Gateway (502): Invalid response from the upstream server.',
          });
        case 503:
          return Promise.reject({
            ...error,
            message:
              'Service Unavailable (503): The server is temporarily unavailable.',
          });
        case 504:
          return Promise.reject({
            ...error,
            message:
              'Gateway Timeout (504): The server took too long to respond.',
          });
        default:
          return Promise.reject({
            ...error,
            message: `Unexpected error occurred. Status: ${status}`,
          });
      }
    } else if (error.request) {
      return Promise.reject({
        ...error,
        message: 'No response received from the server.',
      });
    } else {
      return Promise.reject({
        ...error,
        message: 'Error setting up the request: ' + error.message,
      });
    }
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
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

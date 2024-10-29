import { useEffect } from 'react';
import axiosInstance from '../../api/rest/axios';
import { useNotification } from '../../context/NotificationContext';

const ErrorHandler = ({ children }) => {
  const showNotification = useNotification();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      response => response,
      error => {
        if (error.response) {
          const status = error.response.status;

          switch (status) {
            case 400:
              showNotification(
                'Bad Request: Please check your input.',
                5000,
                'warning'
              );
              break;
            case 401:
              showNotification(
                'Unauthorized: Your session has expired. Please login again.',
                5000,
                'error'
              );
              break;
            case 403:
              showNotification(
                'Forbidden: You do not have permission to access this resource.',
                5000,
                'warning'
              );
              break;
            case 404:
              showNotification(
                'Not Found: The requested resource was not found.',
                5000,
                'error'
              );
              break;
            case 500:
              showNotification(
                'Internal Server Error: Something went wrong on the server.',
                5000,
                'error'
              );
              break;
            case 503:
              showNotification(
                'Service Unavailable: The server is temporarily unavailable.',
                5000,
                'error'
              );
              break;
            default:
              showNotification(
                `Unexpected error occurred. Status: ${status}`,
                5000,
                'error'
              );
          }
        } else if (error.request) {
          showNotification(
            'No response received from the server. Please check your connection.',
            5000,
            'error'
          );
        } else {
          showNotification(
            'Error setting up the request: ' + error.message,
            5000,
            'error'
          );
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [showNotification]);

  return children;
};

export default ErrorHandler;

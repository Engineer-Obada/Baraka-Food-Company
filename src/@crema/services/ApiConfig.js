import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// Intercept the request and add the authorization header
instance.interceptors.request.use((config) => {
  const public_token = localStorage.getItem('token');
  if (public_token) {
    config.headers['Authorization'] = 'Bearer ' + public_token;
  }
  return config;
});

export default instance;

export const baseURL = 'https://cors-anywhere.herokuapp.com/http://ubcfood.000webhostapp.com';

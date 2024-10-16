// request.js
import axios from 'axios';

// Base Axios instance with default settings
const api = axios.create({
  baseURL: 'https://gold-backend-eta.vercel.app', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
     Authorization: `Bearer ${localStorage.getItem("Gold_token")}`
  },
});

// Wrapper function to handle requests
const request = async (method, endpoint, payload = {}, config = {}) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data: payload, // For POST/PUT requests
      params: method === 'get' ? payload : {}, // For GET requests with query params
      ...config, // Add any additional configurations like headers
    });
    return response.data;
  } catch (error) {
    console.error(`Error with ${method.toUpperCase()} request to ${endpoint}:`, error);
    throw error.response ? error.response.data : error.message;
  }
};

export const get = (endpoint, params, config) => request('get', endpoint, params, config);
export const post = (endpoint, data, config) => request('post', endpoint, data, config);
export const put = (endpoint, data, config) => request('put', endpoint, data, config);
export const del = (endpoint, data, config) => request('delete', endpoint, data, config);

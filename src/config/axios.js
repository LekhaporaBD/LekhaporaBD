

import axios from 'axios';

const baseDomain = 'http://links.shaheenagrofood.com/'; // API  

export const customHeaders = {
  Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

const Axios = axios.create({
  baseURL: baseUrl,
  headers: customHeaders,
});

Axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default Axios;

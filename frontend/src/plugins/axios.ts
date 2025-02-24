import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  install(app : any) {
    app.config.globalProperties.$axios = axiosInstance;
  },
};
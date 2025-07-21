// We will be using axios interceptors to automatically add the access token to the headers of the request if access token is available, so we don't need to configure it each time.

import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
  // To import environment variables, here we imported the base url to avoid writing full https://localhost:8000 for each url instead just use baseURL.
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

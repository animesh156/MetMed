import axios from "axios";

const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_BACKEND_PROD_URL
  : import.meta.env.VITE_DEV_BACKEND_URL;

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default API;

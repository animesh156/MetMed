import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // for development
  // baseURL: "https://metmed.onrender.com/api", // for production
  withCredentials: true,
});

export default API;

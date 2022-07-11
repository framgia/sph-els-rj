import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.defaults.withCredentials = true;

export default apiClient;

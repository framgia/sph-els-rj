import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

axios.defaults.withCredentials = true;

export default apiClient;

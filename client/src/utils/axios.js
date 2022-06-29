

import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

axios.defaults.withCredentials = true;

export default apiClient;
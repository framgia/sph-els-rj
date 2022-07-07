<<<<<<< HEAD
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
=======


import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
>>>>>>> f6190d0 (fix-file-structure(2nd commit))
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

axios.defaults.withCredentials = true;

<<<<<<< HEAD
export default apiClient;
=======
export default apiClient;
>>>>>>> f6190d0 (fix-file-structure(2nd commit))

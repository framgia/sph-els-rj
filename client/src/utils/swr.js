import apiClient from "./axios";

export const swrConfig = {
  fetcher: (url) =>
    apiClient
      .get(url, { baseURL: "http://localhost:8000/api/v1" })
      .then((res) => res.data),
};

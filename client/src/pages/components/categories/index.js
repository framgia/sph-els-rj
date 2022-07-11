import apiClient from "../../../utils/axios";

const CategoryApi = {
  show: (id) => {
    const options = {
      method: "GET",
      url: `/category/${id}`,
    };
    return apiClient.request(options);
  },
  store: (name, description) => {
    const options = {
      method: "POST",
      url: "/category",
      data: {
        name,
        description,
      },
    };
    return apiClient.request(options);
  },

  update: (name, description, id) => {
    const options = {
      method: "PUT",
      url: `/category/${id}`,
      data: {
        name,
        description,
      },
    };
    return apiClient.request(options);
  },

  delete: (id) => {
    const options = {
      method: "DELETE",
      url: `/category/${id}`,
    };
    return apiClient.request(options);
  },
};
export default CategoryApi;

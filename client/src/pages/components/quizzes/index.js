import apiClient from "../../../utils/axios";

const answersApi = {
  store: (answers, categoryID) => {
    const options = {
      method: "POST",
      url: `/answers`,
    };
    return apiClient.request(options);
  },
};

export default answersApi;

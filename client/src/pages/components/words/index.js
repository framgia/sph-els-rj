import apiClient from "../../../utils/axios";

const WordsApi = {
  store: (category_id, word) => {
    const options = {
      method: "POST",
      url: "/words",
      data: {
        category_id,
        word,
      },
    };
    return apiClient.request(options);
  },

  update: (word, id) => {
    const options = {
      method: "put",
      url: `/words/${id}`,
      data: {
        word,
      },
    };
    return apiClient.request(options);
  },

  delete: (id) => {
    const options = {
      method: "delete",
      url: `/words/${id}`,
    };

    return apiClient.request(options);
  },
};

export default WordsApi;

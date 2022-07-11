import apiClient from "../../../utils/axios";

const ChoiceApi = {
  show: (id) => {
    const options = {
      method: "GET",
      url: `/choice/${id}`,
    };
    return apiClient.request(options);
  },
  store: (word_id, choice_name, is_correct) => {
    const options = {
      method: "POST",
      url: "/choice",
      data: {
        word_id,
        choice_name,
        is_correct,
      },
    };
    return apiClient.request(options);
  },

  update: (name, isCorrect, id) => {
    const options = {
      method: "PUT",
      url: `/choice/${id}`,
      data: {
        choice_name: name,
        is_correct: isCorrect,
      },
    };
    return apiClient.request(options);
  },

  delete: (id) => {
    const options = {
      method: "DELETE",
      url: `/choice/${id}`,
    };
    return apiClient.request(options);
  },
};
export default ChoiceApi;

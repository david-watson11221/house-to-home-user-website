import { API } from "../config/axios.config";

export const submitFeedback = (data) => {
  console.log(data);
  return API({
    method: "POST",
    url: `/feedback/submit`,
    data,
  });
};

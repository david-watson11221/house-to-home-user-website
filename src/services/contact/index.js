import { API } from "../config/axios.config";

export const submitQuery = (data) => {
  return API({
    method: "POST",
    url: `/feedback`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JSON_WEB_TOKEN")}`,
    },
  });
};

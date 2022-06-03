import { API } from "../config/axios.config";

export const getMinCategories = () => {
  return API({
    method: "GET",
    url: `/category/min`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JSON_WEB_TOKEN")}`,
    },
  });
};

import { API } from "../config/axios.config";

export const getProducts = (page, perPage, type, category) =>
  API({
    method: "GET",
    url: `/user/wishlist/all`,
    params: {
      page,
      perPage,
      type,
      category,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JSON_WEB_TOKEN")}`,
    },
  });

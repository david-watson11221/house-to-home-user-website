import { API } from "../config/axios.config";

export const getProducts = (page, perPage, type, category) =>
  API({
    method: "GET",
    url: `/product/user/get-products`,
    params: {
      page,
      perPage,
      type,
      category,
    },
  });

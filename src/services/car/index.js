import { API } from "../config/axios.config";

export const getCars = (
  page,
  perPage,
  condition,
  minPrice,
  maxPrice,
  category,
  store,
  searchString
) =>
  API({
    method: "GET",
    url: `/product/user/all`,
    params: {
      page,
      perPage,
      condition,
      minPrice,
      maxPrice,
      category,
      store,
      searchString,
    },
  });

export const getCarDetails = (carId) =>
  API({
    method: "GET",
    url: `/product/user/${carId}`,
  });

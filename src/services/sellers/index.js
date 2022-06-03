import { API } from "../config/axios.config";

export const getSellers = (page, perPage) =>
  API({
    method: "GET",
    url: `/seller/user/all`,
    params: {
      page,
      perPage,
    },
  });

export const getSellerDetails = (carId) =>
  API({
    method: "GET",
    url: `/product/user/${carId}`,
  });

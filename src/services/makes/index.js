import { API } from "../config/axios.config";

export const getMakes = (page) =>
  API({
    method: "GET",
    url: `/category/user/makes`,
    params: {
      page,
      perPage: 20,
    },
  });

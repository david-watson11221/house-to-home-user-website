import { API } from "../config/axios.config";

// export const getSellers = (page, perPage) =>
//   API({
//     method: "GET",
//     url: `/seller/user/all`,
//     params: {
//       page,
//       perPage,
//     },
//   });

export const getStoreDetails = (storeId) =>
  API({
    method: "GET",
    url: `/store/user/${storeId}`,
  });

export const postStoreReivews = (data) =>
  API({
    method: "POST",
    url: `/store/review`,
    data,
  });

export const getStoreReivews = (storeId) =>
  API({
    method: "GET",
    url: `/store/reviews-user/${storeId}`,
  });

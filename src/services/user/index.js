import { API } from "../config/axios.config";

export const updateProfile = (data, userId) => {
  return API({
    method: "POST",
    url: `/user/${userId}`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JSON_WEB_TOKEN")}`,
    },
  });
};

export const changePassword = (data) =>
  API({
    method: "POST",
    url: `/user/update-password`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JSON_WEB_TOKEN")}`,
    },
  });

export const addToWishlist = (prodId) =>
  API({
    method: "POST",
    url: `/user/add-car-to-wishlist/${prodId}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JSON_WEB_TOKEN")}`,
    },
  });

export const getWishlist = () =>
  API({
    method: "GET",
    url: `/user/wishlist/all`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JSON_WEB_TOKEN")}`,
    },
  });

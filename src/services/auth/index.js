import { API } from "../config/axios.config";

export const signup = async (data) =>
  API({
    method: "PUT",
    url: `/auth/register`,
    data,
  });

export const login = (data) =>
  API({
    method: "POST",
    url: `/auth/login`,
    data,
  });

export const recoverPassword = (data) =>
  API({
    url: `/auth/recover`,
    method: "POST",
    data,
  });

export const verifyCode = (data) =>
  API({
    url: `/auth/verify`,
    method: "POST",
    data,
  });

export const resetPassword = (data) =>
  API({
    url: `/auth/reset`,
    method: "POST",
    data,
  });

export const getMe = (data) =>
  API({
    url: `/auth/user`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JSON_WEB_TOKEN")}`,
    },
  });

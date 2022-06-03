import axios from "axios";
import { BASE_URL } from "./baseUrl.config";

export const API = axios.create({ baseURL: BASE_URL });

// export const attachToken = (jsonWebToken) => {
//     API.defaults.headers.common.Authorization = `Bearer ${jsonWebToken}`;
// };

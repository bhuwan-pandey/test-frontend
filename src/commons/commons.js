import Axios from "axios";
import { verifyToken } from "../auth/auth";
import { encodedToken, tokenKey } from "../constants/constants";
export const axiosInstance = Axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    //set headers
    config.headers["authorization"] =
      "Bearer " + encodedToken.value;
    if (
      !config.url.search("login") &&
      !verifyToken(encodedToken)
    ) {
      localStorage.removeItem(tokenKey);
      return window.location.reload();
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

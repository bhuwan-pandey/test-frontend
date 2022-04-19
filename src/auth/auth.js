import jwt from "jsonwebtoken";
import { jwtKey, tokenKey } from "../constants/constants";

export const verifyToken = (token = localStorage.getItem(tokenKey)) => {
  return jwt.verify(token, jwtKey, (err, decoded) => {
    return err ? null : decoded;
  });
};

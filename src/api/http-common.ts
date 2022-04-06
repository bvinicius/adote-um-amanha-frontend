import { getAccessToken } from "@/modules/shared/utils/AccessTokenManager";
import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://localhost:8090/api/`,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

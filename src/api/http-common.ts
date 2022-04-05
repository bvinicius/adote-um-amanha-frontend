import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://localhost:8090/api/`,
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjQ5MTIzNTY4LCJleHAiOjE2NDkyMDk5Njh9.nOTTNGU9t7gjkHHm_Gk5ieFCSvA2FYEPeOzvX-TlX0J4NLyIlhHCQ8y0BcAL2WTNV2k2xSPCabWVo3C8wqvABg",
  },
});

import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://localhost:8090/api/`,
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjQ5MjA1Njc4LCJleHAiOjE2NDkyOTIwNzh9.AlxPBtu_rpCaxsvLkIS1MdRTfVeMbd6sSUaJK9qhkbSBkQDNhU-bcDeHEK1z9QfOuwmLwYaMaMnvc8apYdO9qQ",
  },
});

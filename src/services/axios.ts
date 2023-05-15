import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.RAPID_API_HOST,
  },
});

export default instance;

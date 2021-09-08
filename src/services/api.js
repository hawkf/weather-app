import axios from "axios";

const BACKEND_URL = "https://api.openweathermap.org/data/2.5";
const REQUEST_TIMEOUT = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

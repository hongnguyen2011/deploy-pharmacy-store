import axios from "axios";

const requestApi = axios.create({
  baseURL: "https://localhost:7102/api/",
});

export default requestApi;

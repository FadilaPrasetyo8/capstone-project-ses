import axios from "axios";

const api = axios.create({
  baseURL: "https://pure-woodland-13460.herokuapp.com",
});
export default api;

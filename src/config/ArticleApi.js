import axios from "axios";
import api from ".";

export default {
  find: () =>
    api.get("/api/articles?populate=*&sort=id").then((res) => res.data),
  detail: (id) =>
    api.get(`/api/articles/${id}?populate=*&sort=id`).then((res) => res.data),
};

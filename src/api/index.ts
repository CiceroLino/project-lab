import Axios, { AxiosError } from "axios";

const Api = Axios.create({
  baseURL: "/api",
});

export default Api;

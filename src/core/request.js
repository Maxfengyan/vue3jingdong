import Axios from "axios";
import { getToken } from "./auth";
import app from "@/main.js";
// 创建axios
const service = Axios.create({
  baseURL: window.apiUrl,
  withCredentials: true,
});

service.interceptors.request.use(
  (config) => {
    app.config.globalProperties.$loading.show("加载中...");
    config.headers["X-Token"] = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    if (response.config.url === "/pay/pay.json") {
      setTimeout(() => {
        app.config.globalProperties.$loading.hide();
      }, 1000);
    } else {
      app.config.globalProperties.$loading.hide();
    }
    return response.data;
  },
  (error) => {
    app.config.globalProperties.$loading.hide();
    return Promise.reject(error);
  },
);

export default service;

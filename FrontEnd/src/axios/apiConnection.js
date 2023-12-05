import axiosInstance from "./axiosInstance";

const API = {
  get: async (path, params) => {
    return await axiosInstance.get(path);
  },
  post: async (path, params, data) => {
    return await axiosInstance.post(path, params, data);
  },
  put: async (path, params, data) => {
    return await axiosInstance.put(path, params, data);
  },
  delete: async (path, params) => {
    return await axiosInstance.delete(path, params);
  },
}

export default API;
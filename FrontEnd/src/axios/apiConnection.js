import axios from "axios"; 

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  // ... otras configuraciones ...
});

const handleRequest = async (requestFunction, path, data) => {
  try {
    const response = await requestFunction(path, data);
    return response.data; 
  } catch (error) {
    console.log(error);
  }
};

const API = {
  get: async (path) => handleRequest(axiosInstance.get, path),
  post: async (path, data) => handleRequest(axiosInstance.post, path, data),
  put: async (path, data) => handleRequest(axiosInstance.put, path, data),
  delete: async (path) => handleRequest(axiosInstance.delete, path),
};

export default API;

import axios from "axios"; 

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BASE_URL,
});

const handleRequest = async (requestFunction, path, data) => {
  try {
    const response = await requestFunction(path, data);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

const API = {
  get: async (path, usePublicBackend = false) => {
    const baseURL = usePublicBackend ? process.env.NEXT_PUBLIC_BACKEND_URL : process.env.BASE_URL;
    const dynamicAxiosInstance = axios.create({
      baseURL,
      // ... otras configuraciones ...
    });

    return handleRequest(dynamicAxiosInstance.get, path);
  },
  post: async (path, data, usePublicBackend = false) => {
    const baseURL = usePublicBackend ? process.env.NEXT_PUBLIC_BACKEND_URL : process.env.BASE_URL;
    const dynamicAxiosInstance = axios.create({
      baseURL,
      // ... otras configuraciones ...
    });

    return handleRequest(dynamicAxiosInstance.post, path, data);
  },
  put: async (path, data, usePublicBackend = false) => {
    const baseURL = usePublicBackend ? process.env.NEXT_PUBLIC_BACKEND_URL : process.env.BASE_URL;
    const dynamicAxiosInstance = axios.create({
      baseURL,
      // ... otras configuraciones ...
    });

    return handleRequest(dynamicAxiosInstance.put, path, data);
  },
  delete: async (path, usePublicBackend = false) => {
    const baseURL = usePublicBackend ? process.env.NEXT_PUBLIC_BACKEND_URL : process.env.BASE_URL;
    const dynamicAxiosInstance = axios.create({
      baseURL,
      // ... otras configuraciones ...
    });

    return handleRequest(dynamicAxiosInstance.delete, path);
  },
};

export default API;

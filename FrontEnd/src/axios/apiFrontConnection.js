'use client'

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
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

const APIClient = {
  get: async (path) => {
    return handleRequest(axiosInstance.get, path);
  },
  post: async (path, data) => {
    return handleRequest(axiosInstance.post, path, data);
  },
  put: async (path, data) => {
    return handleRequest(axiosInstance.put, path, data);
  },
  delete: async (path) => {
    return handleRequest(axiosInstance.delete, path);
  },
};

export default APIClient;

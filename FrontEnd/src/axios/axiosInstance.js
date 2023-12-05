// axiosInstance.js

import Axios from 'axios';

const axiosInstance = Axios.create({
    //TODO cambiar esto a la api de CoCode
  baseURL: 'http://localhost:3000/api',
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('token')}`
  // }
});

export default axiosInstance;

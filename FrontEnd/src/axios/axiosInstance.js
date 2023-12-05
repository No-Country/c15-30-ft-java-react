// axiosInstance.js

import Axios from 'axios';

const axiosInstance = Axios.create({
    //TODO cambiar esto a la api de CoCode
  baseURL: 'https://restcountries.com/v3.1/all',
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('token')}`
  // }
});

export default axiosInstance;

'use client'

import { persistence } from '@/utils/localeStorage';
import Axios from 'axios';

const axiosInstance = Axios.create({
    //TODO cambiar esto a la api de CoCode
  baseURL: `${'http://localhost:8080'}`,
/*   headers: {
    Authorization: `Bearer ${persistence.get('token')}`
  } */
});

export default axiosInstance;

'use client'

import { persistence } from '@/utils/localeStorage'
import React from 'react'
import axiosInstance from '@/axios/axiosInstance'
import { useUserStore } from './user/user'

const StateLoader = () => {
  const setUser = useUserStore(state => state.setUser);

  if (typeof window !== 'undefined') {
    const user = persistence.get('user');
    const token = persistence.get('token');
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    setUser(user);
  }

  return (
    <></>
  );
}

export default StateLoader;

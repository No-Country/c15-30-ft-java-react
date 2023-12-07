"use client";

import React from "react";
import {axiosInstance} from "@/axios/apiConnection";
import { useTokenStore, useUserStore } from "./user/user";
import { useSession } from "next-auth/react";

const StateLoader = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useTokenStore((state) => state.setToken);
  const { data } = useSession();
  const user = data?.user?.user;
  const token = data?.user?.token;

  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  setUser(user);
  setToken(token);

  return <></>;
};

export default StateLoader;

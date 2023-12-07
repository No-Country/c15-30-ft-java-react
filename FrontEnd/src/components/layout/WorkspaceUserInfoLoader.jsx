"use client";

import React from "react";
import TextDisplayWithTitle from "../ui/textDisplayWIthTitle";
import { useSession } from "next-auth/react";

const WorkspaceUserInfoLoader = () => {
  const { data: session, status } = useSession();
  const user = session?.user?.user;

  const UserData = {
    title: user && `${user.nombre} ${user.apellido}`,
    data: user && [user.rol],
  };
  const UserDataFallback = {
    title: "loading...",
    data: "user && [user.rol]",
  }

  return (
    user && (
      <section className="px-[20px] flex flex-col ">
         <TextDisplayWithTitle type={""} variant={"primary"} content={user ? UserData : UserDataFallback} />
      </section>
    )
  );
};

export default WorkspaceUserInfoLoader;

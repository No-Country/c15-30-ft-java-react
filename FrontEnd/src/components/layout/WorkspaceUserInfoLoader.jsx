"use client";

import { useUserStore } from "@/state/user/user";
import React from "react";
import TextDisplayWithTitle from "../ui/textDisplayWIthTitle";
import { Input } from "../ui/input";
import { useSession } from "next-auth/react";

const WorkspaceUserInfoLoader = () => {
  const { data: session, status } = useSession();
  const user = session?.user?.user;

  const UserData = {
    title: user && `${user.nombre} ${user.apellido}`,
    data: user && [user.rol],
  };

  return (
    user && (
      <section className="px-[20px] flex flex-col ">
         <TextDisplayWithTitle type={""} variant={"primary"} content={UserData} />
        <div className="mt-[20px]">
          <Input tipo={"busqueda"} placeholder={"Buscar"} />
        </div>
      </section>
    )
  );
};

export default WorkspaceUserInfoLoader;

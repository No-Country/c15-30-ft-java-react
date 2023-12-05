"use client";

import { useUserStore } from "@/state/user/user";
import React from "react";
import TextDisplayWithTitle from "../ui/textDisplayWIthTitle";
import { Input } from "../ui/input";

const WorkspaceUserInfoLoader = () => {
  const user = useUserStore((state) => state.user);

  const UserData = {
    title: `${user.nombre} ${user.apellido}`,
    data: [user.rol],
  };

  return (
    <section className="px-[20px] flex flex-col ">
      <TextDisplayWithTitle type={""} variant={"primary"} content={UserData} />
      <div className="mt-5">
        <Input tipo={"busqueda"} placeholder={"Buscar"} />
      </div>
    </section>
  );
};

export default WorkspaceUserInfoLoader;

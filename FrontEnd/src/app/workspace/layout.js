import NavBar from "@/components/layout/NavBar";
import { getServerSession } from "next-auth";
import React from "react";
import authOptions from "../api/auth/[...nextauth]/authOptions";

const layout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className={"flex flex-col h-screen"}>
      <div className="p-[20px] ">
        <NavBar session={session} tipo={"colorExtended"} />
      </div>

      {children}
    </div>
  );
};

export default layout;

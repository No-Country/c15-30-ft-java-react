import NavBar from "@/components/ui/navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className={"flex flex-col h-screen"}>
      <div className="p-[20px] ">
        <NavBar tipo={"colorExtended"} />
      </div>

      {children}
    </div>
  );
};

export default layout;

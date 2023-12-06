import API from "@/axios/apiConnection";
import TextDisplayWithTitle from "@/components/ui/textDisplayWIthTitle";
import React from "react";
import LoginCard from "@/components/layout/LoginCard";

const page = async () => {
  const user = await API.get("/user");

  const userData = {
    title: `${user.nombre} ${user.apellido}`,
    data: user.activo && ["online"],
  };

  console.log(userData);

  return (
    <div className="h-full">
      <div className=" flex flex-col justify-between">
        <section className="px-[20px] ">
          <TextDisplayWithTitle
            type={""}
            variant={"primary"}
            content={userData}
          />
        </section>
        <section className={"mt-[20px] flex flex-1 flex-col"}>
          <LoginCard />
        </section>
      </div>
    </div>
  );
};

export default page;

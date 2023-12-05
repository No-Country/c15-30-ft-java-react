import React from "react";
import TextDisplayWIthTitle from "../../components/ui/textDisplayWIthTitle";
import { Input } from "../../components/ui/input";
import TitleDisplayWithButton from "@/components/ui/titleDisplayWithButton";
import WorkSpaceCard from "@/components/layout/WorkSpaceCard";

const UserData = {
  title: "Karol G",
  data: ["Front-end Dev"],
};
const pageContent = {
  title: "",
  data: ["Aquí puedes ver los proyectos en los que participas actualmente."],
};
const WorkSpace = () => {

  
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="px-[20px]">
        <section className="px-[20px] flex flex-col ">
          <TextDisplayWIthTitle
            type={""}
            variant={"primary"}
            content={UserData}
          />
         <div className="mt-5">
         <Input tipo={"busqueda"} placeholder={"Buscar"} />
         </div>
        </section>
        <section className={"mt-[20px] flex flex-col"}>
          <TitleDisplayWithButton />
          <TextDisplayWIthTitle
            type={"vertical"}
            variant={"primary"}
            content={pageContent}
          />
        </section>
      </div>
      <WorkSpaceCard
        className={""}
      />
    </div>
  );
};

export default WorkSpace;

import React from "react";
import NavBar from "../../components/ui/navbar";
import TextDisplayWIthTitle from "../../components/ui/textDisplayWIthTitle";
import { Inputs } from "../../components/ui/input";
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
    <div className="p-[20px]">
      <section>
        <TextDisplayWIthTitle
          type={""}
          variant={"primary"}
          content={UserData}
        />
        <Inputs tipo={"busqueda"} placeholder={"Buscar"} />
      </section>
      <section className={"mt-[20px]"}>
        <TitleDisplayWithButton />
        <TextDisplayWIthTitle
          type={"vertical"}
          variant={"primary"}
          content={pageContent}
        />
        <WorkSpaceCard />
      </section>
    </div>
  );
};

export default WorkSpace;

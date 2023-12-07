import React, { Suspense } from "react";
import TextDisplayWIthTitle from "../../components/ui/textDisplayWIthTitle";
import { Input } from "../../components/ui/input";
import TitleDisplayWithButton from "@/components/ui/titleDisplayWithButton";
import WorkSpaceCard from "@/components/layout/WorkSpaceCard";
import WorkspaceUserInfoLoader from "@/components/layout/WorkspaceUserInfoLoader";
import API from "@/axios/apiConnection";

const pageContent = {
  title: "",
  data: ["Aquí puedes ver los proyectos en los que participas actualmente."],
};

const WorkSpace = async () => {
  const projects = await API.get("/projects");

  return (
    <div className="h-full">
      <div className="px-[20px] h-full flex flex-col justify-between">
        <WorkspaceUserInfoLoader />

        <Input tipo={"busqueda"} placeholder={"Buscar"} />
        <section className={"flex flex-col px-[20px]"}>
          <TitleDisplayWithButton />

          <TextDisplayWIthTitle
            type={"vertical"}
            variant={"primary"}
            content={pageContent}
          />
        </section>
        <WorkSpaceCard projects={projects} />
      </div>{" "}
    </div>
  );
};

export default WorkSpace;

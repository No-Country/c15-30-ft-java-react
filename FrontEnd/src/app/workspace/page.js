import React, { Suspense } from "react";
import TextDisplayWIthTitle from "../../components/ui/textDisplayWIthTitle";
import { Input } from "../../components/ui/input";
import TitleDisplayWithButton from "@/components/ui/titleDisplayWithButton";
import WorkSpaceCard from "@/components/layout/WorkSpaceCard";
import WorkspaceUserInfoLoader from "@/components/layout/WorkspaceUserInfoLoader";

const pageContent = {
  title: "",
  data: ["Aquí puedes ver los proyectos en los que participas actualmente."],
};

const WorkSpace = () => {
  return (
    <div className="h-full">
      <div className="px-[20px] h-full flex flex-col justify-between">
        <Suspense fallback={<p>loading</p>}>
          <WorkspaceUserInfoLoader />
        </Suspense>
        <section className={"flex flex-col"}>
          <TitleDisplayWithButton />
          <TextDisplayWIthTitle
            type={"vertical"}
            variant={"primary"}
            content={pageContent}
          />
        </section>
        <WorkSpaceCard />
      </div>{" "}
    </div>
  );
};

export default WorkSpace;

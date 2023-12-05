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
    <div className="h-full flex flex-col justify-between">
      <div className="px-[20px]">
        <Suspense fallback={<p>loading</p>}>
          <WorkspaceUserInfoLoader />
        </Suspense>
        <section className={"mt-[20px] flex flex-col"}>
          <TitleDisplayWithButton />
          <TextDisplayWIthTitle
            type={"vertical"}
            variant={"primary"}
            content={pageContent}
          />
        </section>
        <Suspense>

          <WorkSpaceCard className={""} />
        </Suspense>
      </div>{" "}
    </div>
  );
};

export default WorkSpace;

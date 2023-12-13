import React from "react";
import WorkSpaceCard, {
  CommentsCard,
  WorkspaceCustomCard,
} from "./WorkSpaceCards";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { comments } from "@/constants/comments";
import { WorkspaceTable } from "./WorkspaceTable";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { PolarAreaChart } from "./WorkspaceCharts";
import { Card } from "../ui/card";

const WordspaceReactiveCards = async ({ projects, children }) => {
  return (
    <>
      <Card className={cn("col-span-5 shadow-sm w-full h-[377px] p-[40px] flex flex-col rounded-[25px] md:max-w-full md:max-h-[820px] items-center ")}>
        <PolarAreaChart />
      </Card>

      <WorkSpaceCard
        projects={projects}
        data={{ title: "Proyectos", action: "ver más" }}
        className={cn("col-span-5 ")}
      />
      <WorkspaceCustomCard
        projects={projects}
        title="Comentarios"
        dataArr={comments}
        className={cn("col-span-7 ")}
      />

      <WorkspaceTable
        className={cn("hidden md:block col-span-12 row-span-2")}
      />

      {children}
    </>
  );
};

export default WordspaceReactiveCards;
